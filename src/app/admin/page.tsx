"use client";

import { useState, useEffect } from "react";
import { 
  Lock, LayoutDashboard, LogOut, 
  Search, RefreshCw, Download, 
  User, Mail, Phone, BookOpen, 
  Calendar, CheckCircle2 
} from "lucide-react";
import Image from "next/image";

interface Registration {
  _row: number;
  Timestamp: string;
  "Full Name": string;
  Email: string;
  "WhatsApp Number": string;
  Course: string;
  Status?: string;
  "Payment Reference"?: string;
}

export default function AdminDashboard() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [confirmingRows, setConfirmingRows] = useState<Set<number>>(new Set());
  const [resendingRows, setResendingRows] = useState<Set<number>>(new Set());
  const [paymentReferences, setPaymentReferences] = useState<Record<number, string>>({});

  useEffect(() => {
    // Check if already authenticated via session
    fetchData(true);
  }, []);

  const fetchData = async (silent = false) => {
    if (!silent) {
      setIsRefreshing(true);
      if (data.length === 0) setIsInitialLoading(true);
    }
    try {
      const res = await fetch("/api/admin/data", { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setIsAuth(true);
      } else if (res.status === 401) {
        // Explicitly clear auth state if unauthorized
        setIsAuth(false);
      }
    } catch (err) {
      console.error("Fetch Data Error:", err);
      if (!silent) setError("Failed to synchronize with Google Sheets.");
    } finally {
      if (!silent) setIsRefreshing(false);
      setIsInitialLoading(false);
    }
  };

  const handleConfirmPayment = async (student: Registration) => {
    const ref = paymentReferences[student._row]?.trim();
    if (!ref) {
      alert("Please enter a Payment Reference ID before confirming.");
      return;
    }

    if (!confirm(`Are you sure you want to confirm payment for ${student["Full Name"]} with Reference: ${ref}?`)) {
      return;
    }

    setConfirmingRows(prev => new Set(prev).add(student._row));

    try {
      const res = await fetch("/api/admin/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: student.Email,
          name: student["Full Name"],
          row: student._row,
          course: student.Course,
          reference: ref
        }),
      });

      if (res.ok) {
        // Optimistically update local data
        setData(prev => prev.map(item => 
          item._row === student._row ? { ...item, Status: "Confirmed", "Payment Reference": ref } : item
        ));
      } else {
        const err = await res.json();
        alert(err.error || "Failed to confirm payment");
      }
    } catch (err) {
      alert("System error. Please try again.");
    } finally {
      setConfirmingRows(prev => {
        const next = new Set(prev);
        next.delete(student._row);
        return next;
      });
    }
  };

  const handleResendReceipt = async (student: Registration) => {
    const ref = student["Payment Reference"] || paymentReferences[student._row]?.trim();
    if (!ref) {
        alert("Payment Reference is missing. Please enter it first if you haven't.");
        return;
    }

    if (!confirm(`Resend confirmation email to ${student["Full Name"]} with Reference: ${ref}?`)) {
      return;
    }

    setResendingRows(prev => new Set(prev).add(student._row));

    try {
      const res = await fetch("/api/admin/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: student.Email,
          name: student["Full Name"],
          row: student._row,
          course: student.Course,
          reference: ref
        }),
      });

      if (res.ok) {
        alert("Receipt resent successfully!");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to resend receipt");
      }
    } catch (err) {
      alert("System error. Please try again.");
    } finally {
      setResendingRows(prev => {
        const next = new Set(prev);
        next.delete(student._row);
        return next;
      });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuth(true); // Open dashboard immediately
        fetchData();     // Sync data in background
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch (err) {
      setError("System error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter(item => 
    item["Full Name"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item["WhatsApp Number"]?.includes(searchTerm)
  );

  const exportToCSV = () => {
    const headers = ["Timestamp", "Full Name", "Email", "WhatsApp Number", "Course"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(row => 
        [
          `"${row.Timestamp}"`,
          `"${row["Full Name"]}"`,
          `"${row.Email}"`,
          `"${row["WhatsApp Number"]}"`,
          `"${row.Course}"`
        ].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]">
        <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
            <div className="bg-slate-900 p-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl mb-2">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-white font-serif">Admin Portal</h1>
              <p className="text-slate-400 text-sm font-medium">Please enter your credentials to access the dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="p-10 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Master Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold"
                  placeholder="••••••••"
                  required
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-bold animate-shake">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95 ${loading ? 'opacity-70' : ''}`}
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <LayoutDashboard className="w-5 h-5" />
                    Access Dashboard
                  </>
                )}
              </button>
            </form>
          </div>
          
          <p className="text-center mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
            Learn Simply Academy • Secure Management
          </p>
        </div>
      </div>
    );
  }

  // Root loading state is no longer needed since we want immediate dashboard access
  // We handle intra-dashboard loading inside the main sector instead.

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-24 lg:w-72 bg-slate-950 border-r border-white/5 z-50 flex flex-col items-center lg:items-stretch transition-all duration-300">
        <div className="p-6 lg:p-10 flex flex-col items-center lg:items-start">
          <a 
            href="https://learnsimplyacademy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 lg:w-full lg:h-auto bg-white rounded-xl lg:rounded-none overflow-hidden p-2 block hover:opacity-80 transition-opacity"
          >
            <Image src="/learnsimply_logo.jpeg" alt="Logo" width={160} height={48} className="w-full h-auto" />
          </a>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="px-4 mb-4 hidden lg:block">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Navigation</p>
          </div>
          <button className="w-full flex items-center justify-center lg:justify-start gap-4 p-4 bg-primary/10 text-primary rounded-2xl font-bold transition-all border border-primary/20">
            <LayoutDashboard className="w-6 h-6 shrink-0" />
            <span className="hidden lg:inline">Registrations</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" });
              window.location.reload();
            }} 
            className="w-full flex items-center justify-center lg:justify-start gap-4 p-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold transition-all"
          >
            <LogOut className="w-6 h-6 shrink-0" />
            <span className="hidden lg:inline">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-24 lg:pl-72 min-h-screen">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-8 py-6">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-baseline gap-4">
              <h1 className="text-2xl font-bold text-slate-900 font-serif">Enrollment Dashboard</h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-200 shadow-sm">
                {data.length} Total
              </span>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search students, emails, or phone numbers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900"
                />
              </div>
              <button 
                onClick={() => fetchData()}
                className={`p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-600 ${isRefreshing ? 'animate-spin text-primary' : ''}`}
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button 
                onClick={exportToCSV}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            </div>
          </div>
        </header>

        <section className="p-8">
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Student Info</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Contact Details</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Enrolled Course</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {isInitialLoading ? (
                    <tr>
                      <td colSpan={4} className="px-8 py-32">
                        <div className="max-w-md mx-auto space-y-6 text-center">
                          <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="absolute top-0 bottom-0 left-0 bg-primary animate-progress-indefinite rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-900">Synchronizing with Google Sheets</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest animate-pulse">Fetching latest registration data...</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : filteredData.length > 0 ? filteredData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-white transition-all">
                            {row["Full Name"]?.charAt(0) || "U"}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{row["Full Name"]}</p>
                            <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Verified User</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            {row.Email}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            {row["WhatsApp Number"]}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-xl border border-primary/10">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold">{row.Course}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        {row.Status === "Confirmed" ? (
                          <div className="flex flex-col items-end gap-1.5">
                            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 font-bold text-[10px] uppercase tracking-wider">
                              <CheckCircle2 className="w-3 h-3" />
                              Confirmed
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">
                              Ref: {row["Payment Reference"] || 'N/A'}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {row.Timestamp ? new Date(row.Timestamp).toLocaleDateString() : 'N/A'}
                            </span>
                            <button
                              onClick={() => handleResendReceipt(row)}
                              disabled={resendingRows.has(row._row)}
                              className="mt-2 text-[8px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors underline underline-offset-4 flex items-center gap-1"
                            >
                              {resendingRows.has(row._row) ? <RefreshCw className="w-2 h-2 animate-spin" /> : <RefreshCw className="w-2 h-2" />}
                              Resend Receipt
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-end gap-3">
                            <input
                              type="text"
                              placeholder="Reference ID (e.g. UTR...)"
                              value={paymentReferences[row._row] || ""}
                              onChange={(e) => setPaymentReferences(prev => ({ ...prev, [row._row]: e.target.value }))}
                              className="w-48 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold focus:border-primary outline-none transition-all"
                            />
                            <button
                              onClick={() => handleConfirmPayment(row)}
                              disabled={confirmingRows.has(row._row)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md active:scale-95 disabled:opacity-50"
                            >
                              {confirmingRows.has(row._row) ? (
                                <RefreshCw className="w-3 h-3 animate-spin" />
                              ) : "Confirm Payment"}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10" />
                          </div>
                          <p className="text-slate-500 font-bold">No registrations found matching your search</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="bg-slate-50 border-t border-slate-100 px-8 py-4 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Showing {filteredData.length} of {data.length} registrations</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Live Sync Active
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
