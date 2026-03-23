import React from "react";

interface PolicyLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <article className="container mx-auto px-6 pt-40 pb-24 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="space-y-6 mb-16 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight gradient-text leading-tight">
          {title}
        </h1>
        {lastUpdated && (
          <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest flex items-center justify-center lg:justify-start space-x-2">
            <span className="w-8 h-px bg-slate-300 dark:bg-slate-700"></span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        )}
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed space-y-10 text-slate-700 dark:text-slate-300">
        {children}
      </div>
      
      <div className="mt-24 p-12 glass rounded-3xl border border-white/5 text-center space-y-6 shadow-xl">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Have questions about our policies?</h3>
        <p className="text-slate-600 dark:text-slate-400">If you need further clarification, our team is always ready to assist you. Your privacy and security are our top priorities.</p>
        <div className="pt-4">
            <a href="/contact" className="px-10 py-4 bg-slate-900 text-white dark:bg-white dark:text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl inline-block">
                Contact Support
            </a>
        </div>
      </div>
    </article>
  );
};
