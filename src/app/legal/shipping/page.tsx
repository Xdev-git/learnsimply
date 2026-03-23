import { PackageX, Zap, Calendar, AlertCircle, Mail, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Learn Simply Academy",
  description: "Shipping and Delivery Policy for digital courses.",
};

export default function ShippingPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm">
             <PackageX className="w-4 h-4" /> Zero Physical Shipping
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Shipping Policy</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Last updated: March 17, 2026</p>
       </header>

       <div className="space-y-12">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden flex items-center gap-6">
             <div className="absolute right-0 top-0 p-8 opacity-10">
                <Globe className="w-48 h-48" />
             </div>
             <PackageX className="w-12 h-12 text-secondary shrink-0 relative z-10" />
             <div className="relative z-10">
                <h3 className="text-xl font-bold font-serif mb-2">100% Digital Delivery</h3>
                <p className="text-[14px] font-medium text-slate-300 leading-relaxed max-w-2xl">Learn Simply Academy provides online educational courses delivered entirely in digital format. We do not ship any physical products.</p>
             </div>
          </div>

          <section className="space-y-6 pt-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Zap className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Digital Product Delivery</h3>
             </div>
             <p className="font-semibold text-slate-600 mb-6">Upon successful payment confirmation through a secure third-party payment gateway, users will receive access to their purchased course(s) electronically. Delivery includes:</p>
             <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {["Course access credentials (username and secure password)", "Login instructions for the secure learning platform", "Relevant course information and immediate updates"].map((it, i) => (
                     <li key={i} className="flex flex-col gap-3 bg-white p-5 rounded-3xl border border-slate-200 text-[13px] font-bold text-slate-700 shadow-sm">
                         <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                             <Mail className="w-4 h-4 text-primary" />
                         </div>
                         {it}
                     </li>
                 ))}
             </ul>
             <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200 mt-6 inline-block shadow-inner gap-3 flex">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
                <p className="text-xs font-bold text-orange-850">All details are shared via the registered email address. Users are advised to ensure correct email entry and check spam or junk folders if necessary.</p>
             </div>
          </section>

          <section className="space-y-6 pt-10 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Calendar className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Access Timeline</h3>
             </div>
             <p className="font-semibold text-slate-600">Course access is typically provided as follows:</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] shadow-sm transform hover:-translate-y-1 transition-transform cursor-default">
                   <h4 className="text-lg font-bold text-primary mb-3 font-serif border-b border-slate-200 pb-3">Immediate Access</h4>
                   <p className="text-[13px] font-bold text-slate-600 leading-relaxed">For on-demand courses and recorded learning modules, full access is granted automatically and shortly after payment confirmation.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] shadow-sm transform hover:-translate-y-1 transition-transform cursor-default">
                   <h4 className="text-lg font-bold text-secondary mb-3 font-serif border-b border-slate-200 pb-3">Scheduled Access</h4>
                   <p className="text-[13px] font-bold text-slate-600 leading-relaxed">For cohort-based or live sessions, access details and portal keys are shared in advance or specifically on the official start date.</p>
                </div>
             </div>
          </section>

          <section className="space-y-6 pt-10 border-t border-slate-200">
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <AlertCircle className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Delivery Issues</h3>
             </div>
             <p className="font-semibold text-slate-600">If you do not receive access details within <strong className="bg-slate-200 px-2 py-1 rounded text-slate-900">24 hours</strong> of successful payment:</p>
             <ul className="space-y-3 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm inline-block min-w-full md:min-w-[400px]">
                 {["Check your spam or junk email folders immediately", "Confirm that the payment has been successfully processed by your bank", "Contact our support team below for fast manual assistance"].map((it, i) => (
                     <li key={i} className="flex gap-4 items-center text-[13px] font-bold text-slate-700">
                         <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> {it}
                     </li>
                 ))}
             </ul>
          </section>

          <section className="mt-16 bg-white border border-slate-200 shadow-lg rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 ring-1 ring-slate-100">
             <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Support & Manual Credentials</h3>
                <p className="text-sm font-medium text-slate-500">For any issues related to course access, delivery, or lost portal details, please contact:</p>
             </div>
             <a href="mailto:support@learnsimplyacademy.com" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-6 h-6" />
                Email Support
             </a>
          </section>

       </div>
    </div>
  );
}
