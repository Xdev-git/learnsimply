import { Key, XOctagon, ListChecks, Ban, Send, Clock, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refunds | Learn Simply Academy",
  description: "Digital Content Policy, Cancellation and Refund Policy.",
};

export default function RefundPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm">
             <ListChecks className="w-4 h-4" /> Returns & Cancellations
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Digital Content Policy</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Effective Date: March 17, 2026</p>
       </header>

       <div className="space-y-12">
          <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
             Learn Simply Academy provides online educational courses delivered in digital format. By registering for any course on this platform, you agree to the following Cancellation and Refund Policy.
          </p>

          <section className="space-y-6 pt-6 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Key className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Course Registration & Access</h3>
             </div>
             <p className="font-semibold text-slate-600 mb-6">Enrollment is confirmed only after successful payment through a secure third-party payment gateway. Upon confirmation, users are granted access to digital educational content, which may include:</p>
             <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {["Recorded sessions and learning modules", "Supporting academic materials", "Access to scheduled live or cohort-based sessions (if applicable)"].map((it, i) => (
                     <li key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-[13px] font-bold text-slate-700">
                         <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span> {it}
                     </li>
                 ))}
             </ul>

             <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <div className="flex-1 bg-slate-50 border border-slate-200 p-6 rounded-3xl shadow-inner">
                   <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">Immediate Access</h4>
                   <p className="text-sm font-medium text-slate-600">For on-demand courses instantly available after purchase.</p>
                </div>
                <div className="flex-1 bg-slate-50 border border-slate-200 p-6 rounded-3xl shadow-inner">
                   <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-widest">Scheduled Access</h4>
                   <p className="text-sm font-medium text-slate-600">For cohort-based or live sessions mapped to an itinerary.</p>
                </div>
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-200 pt-10">
              <section className="bg-red-50 border border-red-200 rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                 <div className="flex items-center gap-4 border-b border-red-200 pb-4 mb-4">
                     <XOctagon className="w-8 h-8 text-red-600 shrink-0" />
                     <h3 className="text-xl font-bold font-serif text-slate-900">Cancellation Policy</h3>
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 leading-relaxed mb-6 bg-white p-5 rounded-xl border border-red-100 shadow-sm">Due to the digital nature of the content and instant access provided after registration, cancellations are generally not permitted once access has been granted.</p>
                 <div className="bg-red-100/50 p-5 rounded-xl border border-red-200/50 mt-auto">
                    <p className="text-xs font-bold text-red-800 leading-relaxed">However, requests may be reviewed in exceptional cases at the sole discretion of Learn Simply Academy.</p>
                 </div>
              </section>

              <section className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                 <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-4">
                     <ListChecks className="w-8 h-8 text-secondary shrink-0" />
                     <h3 className="text-xl font-bold font-serif text-slate-900">Refund Eligibility</h3>
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 leading-relaxed mb-6">Refunds are not standard for digital educational products. However, a refund may be considered under the following circumstances:</p>
                 <ul className="space-y-3 mt-auto">
                     {["Duplicate transaction for the same course within 24 hours", "Verified technical error during the payment process resulting in multiple charges", "Inability to access the platform due to a confirmed technical issue from our side that remains unresolved"].map((it, i) => (
                        <li key={i} className="flex gap-3 text-xs font-bold text-slate-700 items-start">
                            <span className="text-secondary opacity-50 text-base font-bold leading-none mt-0">■</span> {it}
                        </li>
                     ))}
                 </ul>
              </section>
          </div>

          <section className="space-y-6 pt-10 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Ban className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Non-Refundable Situations</h3>
             </div>
             <p className="font-semibold text-slate-600 mb-6">Refunds will not be issued in the following cases:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {["Change of mind after course access has been provided", "Lack of usage or incomplete participation", "Device, browser, or internet compatibility issues on the user’s end", "Absence from live sessions where recordings are available for later review", "Failure to complete the course within the designated access period"].map((it, i) => (
                     <li key={i} className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                         <Ban className="w-5 h-5 text-slate-300" />
                         {it}
                     </li>
                 ))}
             </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-200">
             <section className="space-y-4">
                 <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                     <Send className="w-6 h-6 text-primary" />
                     <h3 className="text-lg font-bold font-serif text-slate-900">Refund Request Process</h3>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-inner">
                    <p className="text-[13px] font-bold text-slate-700 mb-4">All refund requests must be submitted within <strong className="text-slate-900 bg-slate-200 p-1 px-2 rounded ml-1">48 hours</strong> of the transaction.</p>
                    <p className="text-[14px] font-medium text-slate-600 mb-4">Email <a href="mailto:support@learnsimplyacademy.com" className="font-bold text-primary">support@learnsimplyacademy.com</a> with:</p>
                    <ul className="list-disc list-inside text-[13px] font-bold text-slate-700 space-y-1 ml-2">
                       <li>Transaction details or receipt</li>
                       <li>A brief explanation of the issue</li>
                    </ul>
                 </div>
             </section>

             <section className="space-y-4">
                 <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                     <Clock className="w-6 h-6 text-secondary" />
                     <h3 className="text-lg font-bold font-serif text-slate-900">Processing Timeline</h3>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 h-[calc(100%-4rem)] shadow-inner flex items-center">
                    <p className="text-[13px] font-bold text-slate-600 leading-relaxed text-center w-full px-6">If approved, refunds will be processed within <br/><strong className="text-lg text-slate-900 drop-shadow-sm border-b border-slate-300 pb-1 inline-block mt-2 mb-2">7–10 working days</strong><br/> to the original payment method. Processing timelines may vary depending on the user’s banking provider.</p>
                 </div>
             </section>
          </div>

          <section className="mt-16 bg-white border border-slate-200 shadow-lg rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 ring-1 ring-slate-100">
             <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Billing & Support Help</h3>
                <p className="text-sm font-medium text-slate-500">For any assistance related to course access, refunds, or technical issues, please contact:</p>
             </div>
             <a href="mailto:support@learnsimplyacademy.com" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-6 h-6" />
                support@learnsimplyacademy.com
             </a>
          </section>

       </div>
    </div>
  );
}
