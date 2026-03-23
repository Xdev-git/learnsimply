"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, CheckCircle2, Lock, CreditCard, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Dr. Professional";
  const email = searchParams.get("email") || "doctor@hospital.com";
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSimulatePayment = () => {
     setIsProcessing(true);
     setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
     }, 2000);
  };

  if (isSuccess) {
     return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
           <div className="bg-white max-w-lg w-full rounded-[2.5rem] shadow-xl border border-slate-200 p-10 text-center animate-in zoom-in-95 duration-700">
               <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                   <CheckCircle2 className="w-12 h-12 text-emerald-600" />
               </div>
               <h1 className="text-3xl font-bold font-serif text-slate-900 mb-4">Payment Successful!</h1>
               <p className="text-[15px] font-semibold text-slate-600 leading-relaxed mb-8">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Your registration for the <strong className="text-primary">Vaginal Surgeries Online Course</strong> is complete. 
                  Receipt and access module credentials will be sent to <strong className="text-slate-900">{email}</strong> shortly.
               </p>
               <Link href="/" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg hover:bg-secondary transition-all">
                  Return to Dashboard
               </Link>
           </div>
        </div>
     );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
       <div className="max-w-6xl mx-auto px-6">
          <Link href="/#registration" className="inline-flex flex-row items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors mb-8">
             <ChevronLeft className="w-4 h-4" /> Back to Course
          </Link>

          <header className="mb-10 lg:mb-16">
             <h1 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight flex items-center gap-4">
                 Secure Checkout <ShieldCheck className="w-10 h-10 text-emerald-600 hidden md:block" />
             </h1>
          </header>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
             {/* Payment Information Form */}
             <div className="w-full lg:w-3/5 space-y-8 animate-in slide-in-from-left-8 duration-700">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                   <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold text-slate-900">Payment Details</h3>
                      <div className="flex gap-2">
                          <div className="w-12 h-8 bg-slate-100 rounded pt-1 text-center"><CreditCard className="w-5 h-5 mx-auto text-slate-600" /></div>
                          <div className="w-12 h-8 bg-slate-100 rounded pt-1 text-center"><Lock className="w-4 h-4 mx-auto text-slate-600 mt-0.5" /></div>
                      </div>
                   </div>

                   <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-slate-600">Cardholder Name</label>
                         <input type="text" className="w-full p-4 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-semibold text-slate-900 outline-none transition-all" defaultValue={name} />
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-slate-600">Card Number</label>
                         <div className="relative">
                            <input type="text" className="w-full p-4 pl-12 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-semibold tracking-[0.2em] text-slate-900 outline-none transition-all" placeholder="XXXX XXXX XXXX XXXX" />
                            <CreditCard className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-600">Expiry (MM/YY)</label>
                            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-semibold tracking-widest text-slate-900 outline-none transition-all text-center" placeholder="MM / YY" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-600">CVV</label>
                            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-semibold tracking-widest text-slate-900 outline-none transition-all text-center" placeholder="123" />
                         </div>
                      </div>

                      <div className="pt-6">
                         <button onClick={handleSimulatePayment} disabled={isProcessing} className={`w-full py-5 text-lg ${isProcessing ? 'bg-primary/70 cursor-wait' : 'bg-primary hover:bg-secondary hover:-translate-y-1 hover:shadow-xl'} text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3`}>
                             {isProcessing ? <Clock className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />}
                             {isProcessing ? "Processing Secure Payment..." : "Pay ₹18,000"}
                         </button>
                      </div>

                      <p className="text-[11px] font-bold text-slate-400 text-center uppercase tracking-widest mt-6">
                         Encrypted & Secured by PCI DSS Compliant Network
                      </p>
                   </form>
                </div>
             </div>

             {/* Order Summary Sidebar */}
             <div className="w-full lg:w-2/5 animate-in slide-in-from-right-8 duration-700">
                <div className="bg-slate-900 text-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Lock className="w-32 h-32" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-8 border-b border-white/20 pb-4 relative z-10">Order Summary</h3>
                    
                    <div className="space-y-6 relative z-10">
                       <div>
                          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Product</p>
                          <p className="text-[15px] font-bold leading-snug">Vaginal Surgeries Online Course Full Access</p>
                       </div>
                       <div>
                          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Purchaser</p>
                          <p className="text-[15px] font-bold leading-snug">{name}</p>
                          <p className="text-[12px] font-semibold text-slate-400">{email}</p>
                       </div>
                    </div>

                    <div className="border-t border-white/20 mt-8 pt-6 relative z-10">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-sm font-bold text-slate-300">Original Price</span>
                          <span className="text-sm font-bold text-slate-400 line-through">₹22,000</span>
                       </div>
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-sm font-bold text-slate-300">Launch Discount</span>
                          <span className="text-sm font-bold text-emerald-400">-₹4,000</span>
                       </div>
                       <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/20 text-xl">
                          <span className="font-bold font-serif">Total Due</span>
                          <span className="font-extrabold text-secondary">₹18,000</span>
                       </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}

export default function CheckoutPage() {
   return (
       <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-500 uppercase tracking-widest">Loading Secure Gateway...</div>}>
           <CheckoutContent />
       </Suspense>
   )
}
