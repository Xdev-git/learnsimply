import { ShieldCheck, Database, FileKey, AlertCircle, Share2, Mail, GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Learn Simply Academy",
  description: "Learn Simply Academy privacy policy and data collection commitment.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 delay-150">
       <header className="border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm">
             <ShieldCheck className="w-4 h-4" /> Commitment to Data Privacy
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4 tracking-tight">Privacy Policy</h2>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Effective Date: March 17, 2026</p>
       </header>

       <div className="prose prose-slate max-w-none space-y-12">
          <p className="text-lg text-slate-600 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
             Learn Simply Academy respects the privacy of its users and is committed to protecting personal information. This Privacy Policy explains how information is collected, used, and safeguarded while you access our educational platform.
          </p>

          <section className="space-y-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Information We Collect</h3>
             </div>
             <p className="font-medium text-slate-600">We may collect the following information during course registration to ensure a structured and personalized learning experience:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                    "Full name and basic professional details", 
                    "Email address for course access and communication", 
                    "Phone number for verification and support", 
                    "General professional background (for course relevance)", 
                    "Payment information (processed securely through third-party gateways)"
                ].map((it, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-slate-200 text-[13px] font-bold text-slate-700 shadow-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 shadow-md" /> {it}
                    </li>
                ))}
             </ul>
             <div className="bg-orange-50/70 border border-orange-200/60 p-5 rounded-2xl md:rounded-full mt-6 flex items-center gap-4 shadow-sm">
                 <AlertCircle className="w-6 h-6 text-orange-500 shrink-0" />
                 <p className="text-xs font-semibold text-orange-800 leading-relaxed md:pr-4">
                   All payment transactions are processed through secure, industry-standard third-party payment providers. <strong className="font-bold underline decoration-orange-300/50 underline-offset-2">Learn Simply Academy does not store or have access to absolute card or bank account details.</strong>
                 </p>
             </div>
          </section>

          <section className="space-y-6">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <FileKey className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">How We Use Your Information</h3>
             </div>
             <p className="font-medium text-slate-600">The collected information is used strictly for educational platform operations, including:</p>
             <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-inner">
                 <ul className="space-y-5 text-sm font-bold text-slate-800">
                    {[
                        "Course registration and account creation", 
                        "Providing access to digital learning modules and academic content", 
                        "Payment processing and invoicing for compliance purposes", 
                        "Sending important updates related to courses and platform services", 
                        "Providing customer and technical support"
                    ].map((it, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <span className="text-primary font-bold text-lg leading-none mt-0.5">»</span> {it}
                        </li>
                    ))}
                 </ul>
             </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
              <section className="space-y-5">
                 <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                     <GraduationCap className="w-6 h-6 text-secondary" />
                     <h3 className="text-xl font-bold text-slate-900 font-serif">Educational Nature of Services</h3>
                 </div>
                 <p className="text-[13px] text-slate-600 font-semibold leading-relaxed">
                    Learn Simply Academy provides structured educational content intended for academic learning and professional knowledge enhancement only. We do not provide medical advice, diagnosis, or treatment services through this platform.
                 </p>
              </section>

              <section className="space-y-5">
                 <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                     <ShieldCheck className="w-6 h-6 text-emerald-600" />
                     <h3 className="text-xl font-bold text-slate-900 font-serif">Data Security Standards</h3>
                 </div>
                 <p className="text-[13px] text-slate-600 font-semibold leading-relaxed">
                    We implement appropriate technical and organizational measures to protect user data from unauthorized access, disclosure, or loss. This includes encryption and secure data handling practices. While we strive to use commercially acceptable means to protect information, no digital system can guarantee absolute security.
                 </p>
              </section>
          </div>

          <section className="space-y-6 pt-10 mt-10 border-t border-slate-200">
             <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Share2 className="w-6 h-6 ml-0.5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Data Sharing & Third-Parties</h3>
             </div>
             <p className="font-semibold text-slate-600 leading-relaxed max-w-3xl">We use trusted third-party services to operate our platform efficiently, including secure payment providers, communication services, and cloud-based LMS platforms. These providers process limited information only as required.</p>
             <div className="bg-slate-900 text-white rounded-3xl p-8 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <ShieldCheck className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex items-start gap-5">
                   <AlertCircle className="w-8 h-8 text-secondary shrink-0" />
                   <div>
                       <h4 className="text-lg font-bold font-serif mb-2">Transparency Promise</h4>
                       <p className="text-sm font-semibold text-slate-300 leading-relaxed max-w-xl">
                          We do not sell, rent, or trade personal information. Data may be shared strictly only when necessary for payment processing, essential platform functionality, or legal compliance.
                       </p>
                   </div>
                </div>
             </div>
          </section>

          <section className="space-y-5 pt-10 mt-10 border-t border-slate-200">
             <h3 className="text-xl font-bold text-slate-900 font-serif">User Rights</h3>
             <p className="text-[14px] text-slate-600 font-semibold leading-relaxed max-w-3xl">
                Users may request access to their personal data, correction of inaccurate information, or account deletion, subject to applicable legal and compliance requirements.
             </p>
          </section>

          <section className="mt-16 bg-white border border-slate-200 shadow-lg rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 ring-1 ring-slate-100">
             <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Contact Privacy Support</h3>
                <p className="text-sm font-medium text-slate-500">For any privacy-related queries or data access requests, please reach out to our dedicated support team directly.</p>
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
