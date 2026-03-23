import { FileText, UserCheck, CodeSquare, AlertTriangle, Shield, Settings, Scale, Landmark } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Learn Simply Academy",
  description: "Operational Terms and Conditions for using Learn Simply Academy.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm">
             <FileText className="w-4 h-4" /> Operational Terms
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Terms of Use</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Last updated: March 17, 2026</p>
       </header>

       <div className="space-y-12">
          <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
             These Terms and Conditions govern the use of the Learn Simply Academy website and participation in its online courses. By accessing this website or registering for any course, you agree to these terms.
          </p>

          <section className="space-y-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Eligibility</h3>
             </div>
             <p className="font-medium text-slate-600">The courses offered by Learn Simply Academy are intended for individuals with a background or interest in medical and healthcare education, including:</p>
             <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {["Medical students and trainees", "Healthcare professionals", "Individuals seeking structured academic learning in this domain"].map((it, i) => (
                    <li key={i} className="flex flex-col gap-3 bg-white p-5 rounded-3xl border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 shadow-md" /> {it}
                    </li>
                ))}
             </ul>
             <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 mt-6 inline-block">
                <p className="text-sm font-bold text-slate-700">The platform provides educational content and is not designed for general public use without relevant academic interest.</p>
             </div>
          </section>

          <section className="space-y-6 pt-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <CodeSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Course Content & Intellectual Property</h3>
             </div>
             <p className="font-medium text-slate-600">All materials, including recorded sessions, presentations, and supporting documents, are the exclusive intellectual property of Learn Simply Academy and its faculty.</p>
             
             <div className="bg-red-50/50 border border-red-200/60 p-6 rounded-3xl mt-6 shadow-sm">
                 <h4 className="text-sm font-extrabold text-red-800 uppercase tracking-widest mb-4">Participants are strictly prohibited from:</h4>
                 <ul className="space-y-4">
                    {["Copying, reproducing, or distributing course materials in any format", "Recording or downloading proprietary video content without permission", "Sharing login credentials with any third party", "Hosting or broadcasting content on external platforms"].map((it, i) => (
                        <li key={i} className="flex items-start gap-4 text-[13px] font-bold text-red-900/80">
                            <span className="text-red-500 font-bold text-lg leading-none mt-0.5">⊗</span> {it}
                        </li>
                    ))}
                 </ul>
                 <p className="text-xs font-bold text-red-800 mt-6 pt-4 border-t border-red-200/50">Unauthorized use may result in termination of access without refund and may lead to legal action.</p>
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
             <section className="bg-orange-50/50 border border-orange-200 rounded-[2.5rem] p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                   <AlertTriangle className="w-8 h-8 text-orange-600" />
                   <h3 className="text-xl font-bold font-serif text-slate-900">Educational Disclaimer</h3>
                </div>
                <p className="text-[13px] font-semibold text-slate-700 mb-6">All content provided on this platform is intended solely for educational and informational purposes. The courses:</p>
                <ul className="space-y-4 text-[13px] font-bold text-slate-800 list-disc list-inside">
                   <li>Do not constitute medical advice, diagnosis, or treatment</li>
                   <li>Do not replace formal education, institutional training programs, or supervised practice</li>
                   <li>Are designed for knowledge enhancement and academic discussion only</li>
                </ul>
                <p className="text-[13px] font-bold text-orange-800 mt-6 pt-4 border-t border-orange-200/60">Users are solely responsible for how they interpret and apply any information obtained from the platform.</p>
             </section>

             <div className="space-y-8 flex flex-col justify-between h-full">
                 <section className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
                    <div className="flex items-center gap-3 mb-4">
                       <Shield className="w-6 h-6 text-emerald-600" />
                       <h3 className="text-lg font-bold font-serif text-slate-900">Account Security & Responsibility</h3>
                    </div>
                    <p className="text-[13px] font-medium text-slate-600">Users are responsible for maintaining the confidentiality of their login credentials. Sharing account access is strictly prohibited and may result in suspension or termination.</p>
                 </section>

                 <section className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
                    <div className="flex items-center gap-3 mb-4">
                       <Settings className="w-6 h-6 text-primary" />
                       <h3 className="text-lg font-bold font-serif text-slate-900">Course Access & Modifications</h3>
                    </div>
                    <p className="text-[13px] font-medium text-slate-600">Access to courses is granted after successful registration and payment confirmation. <br/><br/> Learn Simply Academy reserves the right to update or modify course content, structure, or delivery format to improve the learning experience or reflect updated knowledge, without prior notice.</p>
                 </section>
             </div>
          </div>

          <section className="space-y-6 pt-10 mt-10 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                 <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Scale className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-slate-900">Limitation of Liability</h3>
             </div>
             <p className="font-semibold text-slate-600">Learn Simply Academy and its faculty shall not be held responsible for:</p>
             <ul className="space-y-3">
                 {["Any decisions made based on the information provided in the courses", "Any outcomes resulting from the use or interpretation of the content", "Technical issues related to user devices, internet connectivity, or third-party services"].map((it, i) => (
                     <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-[14px] font-bold text-slate-700">
                         <span className="text-primary">•</span> {it}
                     </li>
                 ))}
             </ul>
          </section>

          <section className="mt-16 bg-slate-900 text-white rounded-[2.5rem] p-10 flex items-center gap-6 shadow-xl relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 opacity-10">
                 <Landmark className="w-64 h-64" />
             </div>
             <Landmark className="w-10 h-10 text-secondary shrink-0 relative z-10" />
             <div className="relative z-10">
                 <h3 className="text-xl font-bold font-serif mb-2">Governing Law & Jurisdiction</h3>
                 <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-2xl">These terms are governed by the laws of India. Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.</p>
             </div>
          </section>
       </div>
    </div>
  );
}
