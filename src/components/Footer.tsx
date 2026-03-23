"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-48 lg:pb-32 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full -ml-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12 mb-24">
          
          <div className="space-y-10 lg:col-span-1 border-r border-white/5 pr-12">
            <Link href="/" className="block">
              <Image 
                src="/learnsimply_logo.jpeg" 
                alt="Learn Simply Logo" 
                width={200} 
                height={60} 
                className="h-14 w-auto rounded shadow-sm brightness-110"
              />
            </Link>
            <p className="text-sm font-medium leading-relaxed text-slate-400">
              Founded by <strong>Dr. Kawita Bapat</strong>, Learn Simply Academy aims to make complex surgical knowledge simple, practical, and accessible for gynecologists worldwide.
            </p>
            <div className="flex gap-6">
                {/* Social icons could go here */}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-lg font-bold font-serif text-white uppercase tracking-widest border-b border-primary w-24 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              {["Course Program", "Bootcamp", "Community", "About Us"].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-lg font-bold font-serif text-white uppercase tracking-widest border-b border-primary w-24 pb-2">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Use", href: "/terms-of-use" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "Contact Support", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-lg font-bold font-serif text-white uppercase tracking-widest border-b border-primary w-24 pb-2">Contact</h4>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <span className="text-primary text-xl">📧</span>
                    <p className="text-sm font-bold text-slate-400">support@learnsimplyacademy.com</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-primary text-xl">📱</span>
                    <p className="text-sm font-bold text-slate-400">+91-9826055666, 9826657666</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#c5a367] mb-2">Organization</p>
                    <p className="text-xs font-bold text-white">Learn Simply Academy</p>
                </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()}, Dr. Kawita Bapat. All rights reserved.
          </p>
          <div className="flex gap-10">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Built with Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
