import { Cookie, ShieldCheck, Activity, Settings2, Share2, SlidersHorizontal, CheckSquare, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Learn Simply Academy",
  description: "Usage Transparency and Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm">
             <Cookie className="w-4 h-4" /> Usage Transparency
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Cookie Policy</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Last updated: March 17, 2026</p>
       </header>

       <div className="space-y-12">
          <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
             This website uses cookies to improve user experience and ensure the stable operation of our platform. This Cookie Policy explains what cookies are, how we use them, and the choices available to you.
          </p>

          <section className="space-y-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Cookie className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">What Are Cookies</h3>
             </div>
             <p className="font-semibold text-slate-600 bg-slate-50 border border-slate-200 p-8 rounded-3xl text-sm leading-relaxed shadow-inner">
                Cookies are small text files stored on a user's device when visiting a website. They help recognize returning users, remember preferences, and provide a smoother, personalized browsing experience without tracking individual identity details unnecessarily.
             </p>
          </section>

          <section className="space-y-8 pt-10 border-t border-slate-200">
             <h3 className="text-2xl font-bold font-serif text-slate-900 border-l-4 border-primary pl-4">Types of Cookies We Use</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                     <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                     <h4 className="text-lg font-bold text-slate-900 font-serif mb-2">Essential Cookies</h4>
                     <p className="text-xs font-bold text-slate-500 leading-relaxed">These are necessary for core website functionality. They enable secure login sessions, user authentication, and smooth navigation across the interactive platform.</p>
                 </div>
                 <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                     <Activity className="w-10 h-10 text-secondary mb-4" />
                     <h4 className="text-lg font-bold text-slate-900 font-serif mb-2">Performance Cookies</h4>
                     <p className="text-xs font-bold text-slate-500 leading-relaxed">These cookies help us understand how users interact with the platform by collecting anonymized usage data. This allows us to improve loading speeds and UX.</p>
                 </div>
                 <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                     <Settings2 className="w-10 h-10 text-slate-700 mb-4" />
                     <h4 className="text-lg font-bold text-slate-900 font-serif mb-2">Functional Cookies</h4>
                     <p className="text-xs font-bold text-slate-500 leading-relaxed">These remember your preferences (such as language, display settings, or other contextual customizations) to provide a more personalized experience.</p>
                 </div>
                 <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                     <Share2 className="w-10 h-10 text-orange-500 mb-4" />
                     <h4 className="text-lg font-bold text-slate-900 font-serif mb-2">Third-Party Cookies</h4>
                     <p className="text-xs font-bold text-slate-500 leading-relaxed">We use trusted third parties for analytics, secure payment gateway persistence, and media delivery. They process limited info under their own privacy protocols.</p>
                 </div>
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-200">
             <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-inner h-full flex flex-col">
                 <div className="flex items-center gap-3 mb-4">
                     <SlidersHorizontal className="w-6 h-6 text-primary" />
                     <h4 className="font-bold text-lg font-serif text-slate-900">Managing Preferences</h4>
                 </div>
                 <p className="text-[13px] font-bold text-slate-600">Users can control or disable cookies through their browser settings at any time. Please note that disabling essential cookies may severely affect platform features.</p>
             </section>
             <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-inner h-full flex flex-col">
                 <div className="flex items-center gap-3 mb-4">
                     <CheckSquare className="w-6 h-6 text-secondary" />
                     <h4 className="font-bold text-lg font-serif text-slate-900">User Consent</h4>
                 </div>
                 <p className="text-[13px] font-bold text-slate-600">By continuing to use the Learn Simply Academy website, you intrinsically consent to the use of cookies as described securely within this policy.</p>
             </section>
          </div>

          <section className="mt-16 bg-white border border-slate-200 shadow-lg rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 ring-1 ring-slate-100">
             <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Questions about Tracking?</h3>
                <p className="text-sm font-medium text-slate-500">For any questions related to this Cookie Policy or data storage, please contact:</p>
             </div>
             <a href="mailto:support@learnsimplyacademy.com" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-6 h-6" />
                compliance@learnsimplyacademy.com
             </a>
          </section>

       </div>
    </div>
  );
}
