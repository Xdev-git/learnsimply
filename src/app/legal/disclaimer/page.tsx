import { AlertTriangle, Library, User, Stethoscope, Scale, Eye, CheckCircle2, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Learn Simply Academy",
  description: "Educational Notice and Disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-orange-500/20 shadow-sm">
             <AlertTriangle className="w-4 h-4" /> Legal Disclaimer
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Educational Notice</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Last updated: March 17, 2026</p>
       </header>

       <div className="space-y-12">
          <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
             The content provided through Learn Simply Academy is intended solely for educational and informational purposes. It is designed to support academic learning and professional knowledge enhancement.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <section className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                 <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-4">
                     <Library className="w-8 h-8 text-primary shrink-0" />
                     <h3 className="text-xl font-bold font-serif text-slate-900">Scope of Material</h3>
                 </div>
                 <p className="text-[13px] font-semibold text-slate-700 leading-relaxed mb-6">The courses, recorded sessions, and interactive modules available on this platform are created to improve conceptual understanding and subject knowledge.</p>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-sm font-bold text-red-700 uppercase tracking-widest mb-4">They do not replace:</h4>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-xs font-bold text-slate-700"><span className="text-red-500 max-w-2">✗</span> Formal medical education, residency, or institutional training programs</li>
                        <li className="flex gap-3 text-xs font-bold text-slate-700"><span className="text-red-500 max-w-2">✗</span> Supervised professional practice or mentorship</li>
                        <li className="flex gap-3 text-xs font-bold text-slate-700"><span className="text-red-500 max-w-2">✗</span> Established institutional protocols or guidelines</li>
                        <li className="flex gap-3 text-xs font-bold text-slate-700"><span className="text-red-500 max-w-2">✗</span> Independent professional judgment required in real-world scenarios</li>
                    </ul>
                 </div>
              </section>

              <section className="bg-orange-50 border border-orange-200 rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                 <div className="flex items-center gap-4 border-b border-orange-200 pb-4 mb-4">
                     <Stethoscope className="w-8 h-8 text-orange-600 shrink-0" />
                     <h3 className="text-xl font-bold font-serif text-slate-900">No Medical Advice</h3>
                 </div>
                 <p className="text-[14px] font-semibold text-orange-900 leading-relaxed mb-6">Learn Simply Academy does not provide medical advice, diagnosis, or treatment services.</p>
                 <div className="bg-orange-100/50 p-6 rounded-2xl border border-orange-200/50 shadow-sm mt-auto">
                    <p className="text-sm font-bold text-orange-850 leading-relaxed">All content is intended for academic learning only and should not be relied upon as a substitute for professional decision-making or real-world application.</p>
                 </div>
              </section>
          </div>

          <section className="space-y-6 pt-10 border-t border-slate-200">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">User Responsibility</h3>
             </div>
             <p className="font-semibold text-slate-600">Users are solely responsible for how they interpret and apply the information provided through the platform.</p>
             <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
                 <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2 inline-block">Any use of knowledge gained must be in accordance with:</h4>
                 <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                     {["Their individual qualifications and training", "Applicable professional standards", "Local laws and regulatory requirements"].map((it, i) => (
                         <li key={i} className="flex flex-col gap-2 bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-sm font-bold text-slate-700">
                             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary mb-2 shadow-sm font-serif">{(i+1).toString().padStart(2, '0')}</div>
                             {it}
                         </li>
                     ))}
                 </ul>
             </div>
          </section>

          <section className="space-y-6 pt-10 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Scale className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Limitation of Liability</h3>
             </div>
             <p className="font-semibold text-slate-600">Learn Simply Academy, its founders, and faculty shall not be held responsible for:</p>
             <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {["Any decisions made based on the content provided", "Any outcomes resulting from the use or interpretation of the material", "Any reliance placed on the educational content beyond its intended purpose"].map((it, i) => (
                     <li key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-[13px] font-bold text-slate-700">
                         <span className="text-primary opacity-50 text-xl font-bold">•</span> {it}
                     </li>
                 ))}
             </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
             <section className="space-y-4">
                 <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                     <Eye className="w-6 h-6 text-secondary" />
                     <h3 className="text-lg font-bold font-serif text-slate-900">Content Perspective</h3>
                 </div>
                 <p className="text-[13px] font-medium text-slate-600 bg-slate-50 p-6 rounded-[2rem] border border-slate-200 h-full shadow-inner">
                    The material reflects general knowledge, academic perspectives, and educational insights at the time of creation. As knowledge evolves, certain concepts may be updated or revised over time.
                 </p>
             </section>

             <section className="space-y-4">
                 <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                     <CheckCircle2 className="w-6 h-6 text-primary" />
                     <h3 className="text-lg font-bold font-serif text-slate-900">Accuracy of Information</h3>
                 </div>
                 <p className="text-[13px] font-medium text-slate-600 bg-slate-50 p-6 rounded-[2rem] border border-slate-200 h-full shadow-inner">
                    While efforts are made to ensure the accuracy and relevance of all content, Learn Simply Academy does not guarantee that the material is exhaustive or universally applicable. Users are encouraged to refer to standard references and verified sources where necessary.
                 </p>
             </section>
          </div>

          <section className="mt-16 bg-primary text-white border border-slate-200 shadow-xl rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden ring-1 ring-slate-100">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Mail className="w-32 h-32" />
             </div>
             <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div>
                    <h3 className="text-2xl font-bold font-serif mb-3">Contact for Clarification</h3>
                    <p className="text-sm font-medium text-white/80">For any questions regarding the scope of the educational content, please contact us.</p>
                 </div>
                 <a href="mailto:support@learnsimplyacademy.com" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-colors">
                    <Mail className="w-6 h-6" />
                    Email Support
                 </a>
             </div>
          </section>

       </div>
    </div>
  );
}
