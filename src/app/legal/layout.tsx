"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, FileText, AlertTriangle, Truck, RotateCcw, Cookie, ChevronRight } from "lucide-react";
import React from "react";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menu = [
    { name: "Privacy Policy", href: "/legal/privacy-policy", icon: ShieldCheck },
    { name: "Terms of Use", href: "/legal/terms", icon: FileText },
    { name: "Disclaimer", href: "/legal/disclaimer", icon: AlertTriangle },
    { name: "Shipping Policy", href: "/legal/shipping", icon: Truck },
    { name: "Cancellation & Refund", href: "/legal/refund", icon: RotateCcw },
    { name: "Cookies Policy", href: "/legal/cookies", icon: Cookie },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-3 pl-1">Platform Policies</span>
         <h1 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">Legal & Privacy Hub</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3">
           <div className="bg-white border border-slate-200 rounded-[2rem] p-5 shadow-sm sticky top-32 animate-in fade-in slide-in-from-left-8 duration-700">
              <nav className="flex flex-col gap-1.5">
                 {menu.map((item, i) => {
                   const isActive = pathname === item.href;
                   return (
                     <Link key={i} href={item.href} className={`flex items-center justify-between p-3.5 rounded-2xl transition-all font-bold text-[13px] ${isActive ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                        <div className="flex items-center gap-3.5">
                           <item.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                           {item.name}
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4 opacity-70" />}
                     </Link>
                   )
                 })}
              </nav>
           </div>
        </aside>

        {/* Dynamic Content View */}
        <main className="lg:col-span-9 bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-14 shadow-md min-h-[60vh] relative z-10">
           {children}
        </main>
      </div>
    </div>
  );
}
