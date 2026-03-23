import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Learn Simply Academy",
  description: "Get in touch with Learn Simply Academy for support, inquiries, or feedback. We're here to help you achieve your learning goals.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-7xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight gradient-text">Get in Touch</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Have questions or need assistance? Our team is dedicated to supporting your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Support Channels</h2>
            
            {[
                { label: "Phone Support", val: "+1 234 567 8901", desc: "Mon-Fri from 8am to 5pm (PST)", icon: "📞" },
                { label: "Email Support", val: "support@learnsimply.academy", desc: "Expect a response within 24 hours", icon: "📧" },
                { label: "Our Location", val: "123 Academy Lane, ED 45678", desc: "Visit our physical learning centers", icon: "📍" },
            ].map((channel, i) => (
                <div key={i} className="flex items-start space-x-6 p-8 glass rounded-3xl border border-slate-100 dark:border-white/5 hover:translate-x-2 transition-transform shadow-sm">
                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-lg shrink-0 border border-slate-50 dark:border-white/5">
                        {channel.icon}
                    </div>
                    <div className="space-y-2">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{channel.label}</div>
                        <div className="text-slate-900 dark:text-blue-400 font-semibold">{channel.val}</div>
                        <div className="text-sm text-slate-500">{channel.desc}</div>
                    </div>
                </div>
            ))}
        </div>

        {/* Contact Form */}
        <div className="glass p-12 lg:p-16 rounded-3xl border border-white/5 shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 -mr-12 -mt-12 rounded-full blur-3xl"></div>
             <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-300 ml-1 uppercase tracking-widest">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-300 ml-1 uppercase tracking-widest">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" />
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300 ml-1 uppercase tracking-widest">Subject</label>
                    <select className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none">
                        <option>General Inquiry</option>
                        <option>Support Request</option>
                        <option>Feedback</option>
                        <option>Course Access Issue</option>
                    </select>
                </div>
                <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300 ml-1 uppercase tracking-widest">Message</label>
                    <textarea rows={5} placeholder="How can we help you?" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl active:scale-95">
                    Send Message
                </button>
             </form>
        </div>
      </div>
    </div>
  );
}
