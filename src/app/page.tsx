"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  CheckCircle2, Award, Globe2, MonitorPlay,
  Check, PlayCircle, ShieldCheck, ChevronDown,
  BookOpen, Clock, FileCheck, XCircle, Shield,
  Mail, Phone, MapPin, ArrowRight
} from "lucide-react";

// --- Sub-components ---

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      {children}
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-none overflow-hidden mb-3 bg-white transition-all hover:border-primary/30 shadow-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors hover:bg-slate-50"
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
          {a}
        </div>
      </div>
    </div>
  );
};

const VideoThumbnailPlayer = ({ videoSrc, thumbnailSrc, title }: { videoSrc: string, thumbnailSrc: string, title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative w-full h-full cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
            <PlayCircle className="w-12 h-12 text-white fill-white/10" />
          </div>
        </div>

        {/* Play Label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <span className="px-5 py-2 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
            Watch Preview
          </span>
        </div>
      </div>

      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[5000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-md border border-white/10"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <div className="w-full h-full">
              <video
                src={videoSrc}
                autoPlay
                playsInline
                controls
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};



// --- Main Sections ---

const Hero = () => (
  <section className="relative pt-12 lg:pt-40 pb-24 lg:pb-32 overflow-hidden bg-slate-900 rounded-b-[4rem] lg:rounded-b-[6rem] z-10">
    <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        <div className="space-y-8 animate-in fade-in duration-1000 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary inline-block border border-secondary/30 bg-secondary/10 px-3 py-1 rounded-none shadow-none backdrop-blur-sm">
              Professional Education
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-white mb-2 drop-shadow-md">
              <span className="text-secondary drop-shadow-lg">Vaginal Surgeries</span><br /> <span className="text-primary">Online Course</span>
            </h1>
            <p className="text-lg text-white leading-snug font-medium">
              Step-by-Step Surgical Clarity.
            </p>
          </div>

          <p className="text-base text-slate-200 leading-relaxed max-w-xl">
            A structured 16-module online masterclass designed to help practicing gynecologists,graduate and postgraduate students perform safe, efficient vaginal surgery with confidence.

          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 flex items-center justify-center lg:justify-start gap-4 shadow-none w-full max-w-md mx-auto lg:mx-0">
            <div className="w-12 h-12 bg-white/20 rounded-none flex items-center justify-center text-white shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">Led by <a href="https://www.kawitabapat.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-all"><strong className="font-bold tracking-wide">Dr. Kawita Bapat</strong></a></p>
              <p className="text-xs text-secondary mt-0.5 font-medium">38+ years experience, 15,000+ procedures</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit mx-auto lg:mx-0 text-left">
            {[
              "Learn step-by-step vaginal surgeries  techniques",
              "Practical tips, tricks and complication management",
              "Real surgical insights from decades of experience",
              "Short, focused modules designed for busy clinicians"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-start gap-3 text-sm text-slate-100 font-medium drop-shadow-sm">
                <Check className="w-4 h-4 text-secondary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-4 pt-4">
            <a
              href="#registration"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-4 bg-white text-black font-bold text-lg rounded-none hover:bg-slate-200 transition-colors shadow-none cursor-pointer"
            >
              Register Now – ₹18,000
            </a>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" /> 1-Year Access from Date of Registration</span>
              <span className="flex items-center gap-1"><Award className="w-3 h-3 text-secondary" /> Certificate included</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-end pt-0 lg:pt-10 animate-in fade-in zoom-in duration-1000 delay-150 order-first lg:order-last">
          <div className="relative w-full max-w-[400px] aspect-[3/4] z-10">
            <Image
              src="/profile.webp"
              alt="Dr. Kawita Bapat"
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
            />

            {/* Floating Badge overlay for premium feel */}
            <div className="absolute bottom-8 right-0 lg:-right-8 z-20 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Expert Educator</h4>
                <p className="text-xs text-slate-500 font-medium">38+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CredibilityStrip = () => (
  <div className="bg-white py-6 border-b border-slate-100 shadow-none relative z-20">
    <FadeInWhenVisible>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-10">
            <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-600 shadow-none">
              <Globe2 className="w-5 h-5" />
            </div>
            <p className="text-slate-700 text-sm font-semibold tracking-wide">
              Trusted by practicing gynecologists across India
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:pl-10">
            <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-600 shadow-none">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-slate-700 text-sm font-semibold tracking-wide">
              Structured learning based on real surgical experience
            </p>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  </div>
);

const CourseOverviewMerged = () => (
  <section id="overview" className="bg-slate-50 border-b border-slate-200 py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <FadeInWhenVisible>
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-4">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Structured Approach</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">A Structured Approach to Vaginal Surgery</h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              This program delivers a step-by-step understanding of vaginal surgery, starting from foundational anatomy to complete surgical execution and complication management.
            </p>
            <div className="p-6 bg-white rounded-none border-l-4 border-primary shadow-none space-y-4 hover:bg-slate-50 transition-colors">
              <p className="text-sm font-semibold text-slate-800">The course focuses on practical clinical application, not theoretical discussion. Participants will learn:</p>
              <ul className="space-y-3 w-fit mx-auto lg:mx-0 text-left">
                {[
                  "How to select appropriate cases",
                  "How to perform procedures with clarity",
                  "How to manage intra-operative challenges confidently"
                ].map((it, i) => (
                  <li key={i} className="flex items-start justify-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <div className="flex flex-col gap-8">
            {/* Inline video player transformed into thumbnail-popup */}
            <div className="w-full bg-slate-100 border border-slate-200 aspect-video relative group rounded-[2.5rem] overflow-hidden shadow-lg">
              <VideoThumbnailPlayer
                videoSrc="/course_glance.mp4"
                thumbnailSrc="/videothumb_1.jpg"
                title="Course Overview Preview"
              />
            </div>

            <div className="p-8 bg-white rounded-none shadow-none border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <BookOpen className="w-5 h-5 text-secondary" />
                <h4 className="text-lg font-bold text-slate-800">Course Highlights & Format</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                {[
                  "16 structured video modules",
                  "Practical tips from experience",
                  "100% online, self-paced",
                  "Short, focused modules",
                  "1-Year Access from Date of Registration",
                  "Optional live Q&A sessions"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 w-4 h-4 text-secondary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>
);

const ModulesSection = () => (
  <section id="curriculum" className="py-16 md:py-24 bg-white border-y border-slate-100 relative overflow-hidden">
    {/* Decorative light gradient */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div className="max-w-6xl mx-auto px-6 w-full">
      <FadeInWhenVisible>
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary text-xs font-bold uppercase tracking-widest block bg-secondary/10 inline-block px-4 py-1.5 rounded-full">Detailed Curriculum</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">16 Structured Learning Modules</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium">Each module is designed to build progressive clarity and surgical confidence without overwhelming you.</p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={150}>
        {/* Interactive 2-Column Curriculum List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          {[
            "Principles of Vaginal Surgery", "Patient Selection & Pre-op", "OT Setup & Instruments", "Surgical Anatomy Overview",
            "Vaginal Hysterectomy – Part 1", "Vaginal Hysterectomy – Part 2", "Managing Difficult Cases", "Advanced Vaginal Surgeries",
            "Intra-op Complications", "Vaginal Vault Closure", "Basics of Prolapse Surgery", "Vaginal Repair Techniques",
            "Combined Vaginal Procedures", "Case-Based Clinical Learning", "Surgical Tips & Pearls", "Final Review & Integration"
          ].map((title, i) => (
            <div key={i} className="group relative flex items-center justify-between p-4 px-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-primary/50 hover:shadow-[0_15px_40px_-15px_rgba(169,59,112,0.3)] transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-0.5">
              {/* Interactive Left Highlighter */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-primary transition-colors duration-300"></div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary/30 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm shrink-0">
                  <PlayCircle className="w-6 h-6 ml-0.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Module {String(i + 1).padStart(2, '0')}</div>
                  <h4 className="text-[15px] font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">{title}</h4>
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4 shrink-0 hidden sm:block">
                <MonitorPlay className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

const OutcomeSection = () => (
  <section id="what-to-learn" className="py-16 md:py-24 bg-slate-50 relative">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <FadeInWhenVisible>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block bg-primary/10 inline-block px-4 py-1.5 rounded-full">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">What You Will Learn</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium">This course focuses on practical surgical clarity and decision-making in real clinical settings.</p>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {[
          { title: "Surgical Foundations", desc: "Select appropriate patients, perform pre-evaluations and optimize OT workflow.", icon: BookOpen, color: "bg-orange-500", shadow: "shadow-orange-500/30" },
          { title: "Operative Skills", desc: "Execute step-by-step vaginal hysterectomy and safely secure hemostasis.", icon: CheckCircle2, color: "bg-blue-500", shadow: "shadow-blue-500/30" },
          { title: "Managing Complexity", desc: "Handle large anatomy and resolve intra-operative challenges confidently.", icon: ShieldCheck, color: "bg-emerald-500", shadow: "shadow-emerald-500/30" },
          { title: "Practical Insights", desc: "Avoid common mistakes, improve efficiency, and learn real surgical pearls.", icon: Award, color: "bg-primary", shadow: "shadow-primary/30" }
        ].map((box, i) => (
          <FadeInWhenVisible delay={i * 100} key={i}>
            <div className="p-8 bg-white rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border-none flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg ${box.color} ${box.shadow}`}>
                <box.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900">{box.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{box.desc}</p>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  </section>
);

const AudienceSection = () => (
  <section className="py-16 md:py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <FadeInWhenVisible>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest block">Compliance First</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">Who This Course Is For</h2>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FadeInWhenVisible delay={100}>
          <div className="h-full p-10 bg-slate-50 border border-slate-200 rounded-none space-y-8 relative hover:bg-white hover:border-slate-300 transition-colors text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="text-xl font-bold text-slate-900">Professional Audience</h4>
            </div>
            <ul className="space-y-4 text-sm font-medium text-slate-800 w-fit mx-auto lg:mx-0 text-left">
              {[
                "Practicing Obstetricians & Gynecologists",
                "DGO / MS / DNB Residents",
                "Young Consultants in Gynecology",
                "Surgeons interested in vaginal techniques"
              ].map((it, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="text-emerald-600 w-5 h-5 shrink-0" />
                  <span className="pt-0.5">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <div className="h-full p-10 border border-red-200 bg-red-50/50 rounded-none space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-red-200 pb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h4 className="text-xl font-bold text-slate-900">Not Intended For</h4>
              </div>
              <ul className="space-y-4 text-sm font-medium text-slate-800">
                <li className="flex gap-3 items-start"><XCircle className="w-5 h-5 text-red-500 shrink-0" /> <span className="pt-0.5">Non-medical individuals</span></li>
                <li className="flex gap-3 items-start"><XCircle className="w-5 h-5 text-red-500 shrink-0" /> <span className="pt-0.5">General public</span></li>
              </ul>
            </div>
            <div className="p-4 bg-red-100/50 rounded-none border border-red-200 mt-6">
              <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-1">Important Note:</p>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">This is a professional medical education program intended only for qualified or training medical practitioners.</p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>
);

const AboutAcademySection = () => (
  <section className="py-16 md:py-24 bg-slate-950 border-y-[6px] border-primary relative">
    <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <FadeInWhenVisible>
        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-secondary text-xs font-bold uppercase tracking-widest block bg-secondary/10 inline-block px-4 py-1.5 rounded-none border border-secondary/20">The Foundation</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif !text-white drop-shadow-lg" style={{ color: '#ffffff' }}>
            About Learn Simply Academy
          </h2>
          <p className="text-base leading-relaxed font-medium !text-slate-200" style={{ color: '#e2e8f0' }}>
            Founded by <a href="https://www.kawitabapat.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary underline underline-offset-4 decoration-secondary/60 hover:decoration-secondary transition-all font-bold">Dr. Kawita Bapat</a>, the academy is dedicated to bridging the gap between theoretical knowledge and practical, safe surgical execution. We train the next generation of surgeons through structured clarity.
          </p>
          <ul className="space-y-4 pt-4 text-sm font-bold">
            <li className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg transition-colors hover:border-secondary/50 !text-white" style={{ color: '#ffffff' }}>
              <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
              <span>Expert-led curated curriculum</span>
            </li>
            <li className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg transition-colors hover:border-secondary/50 !text-white" style={{ color: '#ffffff' }}>
              <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
              <span>Focus on clinical safety & efficiency</span>
            </li>
          </ul>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={200}>
        <div className="w-full bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] relative aspect-video group">
          <VideoThumbnailPlayer
            videoSrc="/learn_simply_academy.mp4"
            thumbnailSrc="/videothumb_2.jpg"
            title="Learn Simply Academy Story"
          />
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

const TrustAndObjection = () => (
  <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      <FadeInWhenVisible>
        <div className="space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block">Trust & Verification</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">Certification</h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">Participants who complete the course and assessment will receive a primary digital Certificate of Completion to validate their learning.</p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-none shadow-none space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">Minimum Requirements</h4>
              <ul className="space-y-3 text-sm text-slate-700 font-medium w-fit mx-auto lg:mx-0 text-left">
                <li className="flex items-center justify-start gap-3"><FileCheck className="w-4 h-4 text-primary shrink-0" /> Completion of all 16 modules</li>
                <li className="flex items-center justify-start gap-3"><FileCheck className="w-4 h-4 text-primary shrink-0" /> Participation in final assessment</li>
              </ul>
            </div>
            {/* Real certificate image injected here */}
            <div className="w-full relative rounded-none border border-slate-200 overflow-hidden aspect-[1.414/1] bg-white shadow-xl mb-3">
              <Image src="/istockphoto-471143990-612x612.jpg" alt="Certificate Excellence" fill className="object-cover transition-transform hover:scale-105 duration-700" />
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">sample certificate</p>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={200}>
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block">Frequently Asked Questions</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">Clarifications</h2>
          </div>
          <div className="space-y-2">
            {[
              { q: "Is the course live or recorded?", a: "Primarily recorded and self-paced, allowing you to learn at your convenience. Optional live Q&A sessions are conducted." },
              { q: "How long will I have access?", a: "You get 1-Year Access from Date of Registration." },
              { q: "Will I receive a certificate?", a: "Yes, after completing the modules and a brief assessment, you will receive a digital certificate." },
              { q: "Can I access it on mobile?", a: "Yes, the platform is fully responsive and compatible across mobile devices, tablets, and desktops." },
              { q: "How do I register?", a: "Click 'Register Now' to complete your secure payment. Access details are automatically shared post-payment via email." },
              { q: "Is this course for non-medical users?", a: "No. This program is strictly built for and restricted to medical professionals and students." }
            ].map((it, i) => <FAQItem key={i} q={it.q} a={it.a} />)}
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

const RegistrationSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", confirm_email: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", screenshot: "" });
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isPreview) {
       handleFinalSubmit();
       return;
    }

    let newErrors = { name: "", email: "", phone: "", screenshot: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp Number is required";
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!screenshot) {
      newErrors.screenshot = "Payment screenshot is required";
      isValid = false;
    } else if (screenshot.size > 1024 * 1024) {
      newErrors.screenshot = "Screenshot size must be less than 1MB";
      isValid = false;
    } else if (!['image/jpeg', 'image/png', 'application/pdf', 'image/webp', 'image/gif'].includes(screenshot.type)) {
      newErrors.screenshot = "File must be jpeg, png, pdf, webp, or gif";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid && screenshot) {
      setIsPreview(true);
    }
  };

  const handleFinalSubmit = () => {
    if (!screenshot) return;
    setIsSubmitting(true);
    
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("confirm_email", formData.confirm_email); // Honeypot
    submitData.append("screenshot", screenshot);

    fetch("/api/register", {
      method: "POST",
      body: submitData,
    })
      .then(async (res) => {
        setIsSubmitting(false);
        if (res.ok) {
          setSuccessMessage("Registration submitted! We will email you the access link within 24-48 hours after payment confirmation.");
          setFormData({ name: "", email: "", phone: "", confirm_email: "" });
          setScreenshot(null);
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          setPreviewUrl(null);
          setIsPreview(false);
        } else {
          const errorData = await res.json().catch(() => ({}));
          alert(`Error: ${errorData.error || "Submission failed. Please try again."}`);
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error(err);
        alert("Network error. Please try again later.");
      });
  };

  return (
    <section id="registration" className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {isImageModalOpen && previewUrl && (
         createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 animate-in fade-in duration-300">
               <div className="relative max-w-4xl w-full h-full flex flex-col justify-center">
                  <button 
                     onClick={() => setIsImageModalOpen(false)}
                     className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white transition-colors rounded-none outline-none"
                  >
                     <XCircle className="w-8 h-8" />
                  </button>
                  <div className="w-full h-full flex items-center justify-center p-4">
                     <img 
                       src={previewUrl} 
                       alt="Payment Confirmation Full Preview" 
                       className="max-w-full max-h-full object-contain shadow-2xl" 
                     />
                  </div>
                  <p className="text-center text-white/60 text-xs font-bold uppercase tracking-widest mt-4">
                    Click anywhere outside or the close button to return
                  </p>
               </div>
               <div className="absolute inset-0 -z-10" onClick={() => setIsImageModalOpen(false)} />
            </div>,
            document.body
         )
      )}
 

 
       <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block border border-primary/20 inline-block px-4 py-2 bg-white shadow-sm">Secure Enrollment</span>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif leading-tight tracking-wide text-slate-900 drop-shadow-sm">
            Enroll in the <span className="text-primary">Vaginal Surgeries Online Course</span>
          </h2>
          <div className="bg-slate-50 p-6 mb-8 flex flex-col items-center justify-center">
            <p className="text-slate-500 font-bold text-xs mb-3 uppercase tracking-widest flex items-center gap-2 justify-center"><Award className="w-4 h-4 text-primary" /> Launch Offer</p>
            <div className="flex items-baseline justify-center gap-4 w-full">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">₹18,000</h2>
              <p className="text-slate-400 font-bold line-through text-lg">₹22,000</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Payment Instructions & Details */}
          <FadeInWhenVisible>
            <div className="bg-white rounded-none shadow-xl p-8 lg:p-12 border border-slate-200">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6 border-b border-slate-200 pb-4">1. Complete Payment</h3>



              <div className="flex flex-col items-center gap-8 w-full">
                <div className="w-full flex justify-center bg-white p-6 border border-slate-200 shadow-sm rounded-xl">
                  <Image src="/kb_scanner.jpeg" alt="Payment QR Code" width={380} height={380} className="w-full h-auto max-w-[380px] object-contain rounded-md" />
                </div>
                <div className="w-full bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <ol className="text-base font-medium text-slate-700 space-y-4 list-decimal pl-6 marker:font-bold marker:text-primary">
                    <li>Scan the QR code to securely pay <strong className="text-slate-900">₹18,000</strong>.</li>
                    <li>Save a screenshot of the successful transaction.</li>
                    <li>Proceed to Step 2 to submit your details.</li>
                  </ol>
                </div>
              </div>


            </div>
          </FadeInWhenVisible>

          {/* Right Column: Registration Form */}
          <FadeInWhenVisible delay={200}>
            <div className="bg-white rounded-none shadow-xl p-8 lg:p-12 border border-slate-200 h-full flex flex-col justify-between">
              {successMessage ? (
                <div className="text-center py-16 flex flex-col justify-center h-full my-auto">
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">Registration Successful</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{successMessage}</p>
                </div>
              ) : isPreview ? (
                <>
                  <div className="flex flex-col h-full">
                  <div className="mb-6 border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold font-serif text-slate-900 mb-2">Review Your Details</h3>
                    <p className="text-sm font-medium text-slate-600">Please confirm your information before final submission.</p>
                  </div>

                  <div className="space-y-6 flex-grow">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                           <div className="flex-grow space-y-4">
                              <div>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</p>
                                 <p className="text-base font-bold text-slate-900">{formData.name}</p>
                              </div>
                              <div>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">WhatsApp</p>
                                 <p className="text-base font-bold text-slate-900">{formData.phone}</p>
                              </div>
                           </div>
                           {previewUrl && screenshot?.type.startsWith('image/') && (
                              <div className="shrink-0">
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Payment Screenshot</p>
                                 <button 
                                   type="button"
                                   onClick={() => setIsImageModalOpen(true)}
                                   className="group relative w-24 h-24 border-2 border-slate-200 hover:border-primary transition-colors overflow-hidden bg-slate-100"
                                 >
                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                       <PlayCircle className="w-6 h-6 text-white rotate-90" />
                                    </div>
                                 </button>
                              </div>
                           )}
                        </div>
                        <div className="pt-2 border-t border-slate-200">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</p>
                           <p className="text-base font-bold text-slate-900">{formData.email}</p>
                        </div>
                     </div>

                  </div>
 


                  <div className="pt-8 space-y-4 border-t border-slate-100 mt-6">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleFinalSubmit}
                      className={`w-full py-4 bg-primary text-white font-bold rounded-none text-base border-none ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'} transition-colors flex justify-center items-center gap-2`}
                    >
                      <ShieldCheck className="w-5 h-5" />
                      {isSubmitting ? "Finalizing..." : "Confirm & Submit"}
                    </button>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsPreview(false)}
                      className="w-full py-3 bg-white text-slate-600 font-bold rounded-none text-sm border border-slate-200 hover:bg-slate-50 transition-colors uppercase tracking-widest"
                    >
                      Edit Information
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8 border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold font-serif text-slate-900 mb-2">2. Submit Registration</h3>
                    <p className="text-sm font-medium text-slate-600">Please provide your details and attach payment proof.</p>
                  </div>

                  <form className="space-y-5 flex-grow" onSubmit={handleSubmit}>
                    {/* Honeypot field - hidden from users */}
                    <div className="hidden" aria-hidden="true">
                       <input 
                         type="text" 
                         name="confirm_email" 
                         value={formData.confirm_email}
                         onChange={(e) => setFormData({...formData, confirm_email: e.target.value})}
                         tabIndex={-1} 
                         autoComplete="off" 
                       />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">Full Name</label>
                      <input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full p-3.5 bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-300'} rounded-none text-sm font-semibold text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-none`}
                        placeholder="Dr. First Last Name"
                      />
                      {errors.name && <p className="text-xs text-red-500 font-bold ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">Email Address</label>
                      <input
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full p-3.5 bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-300'} rounded-none text-sm font-semibold text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-none`}
                        placeholder="dr.name@hospital.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 font-bold ml-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">WhatsApp Number</label>
                      <input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full p-3.5 bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-300'} rounded-none text-sm font-semibold text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-none`}
                        placeholder="+91 XXXX XXXX XX"
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-bold ml-1">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">Payment Screenshot (Max 1MB)</label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf,.webp,.gif"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setScreenshot(file);
                          if (previewUrl) URL.revokeObjectURL(previewUrl);
                          if (file && file.type.startsWith('image/')) {
                             setPreviewUrl(URL.createObjectURL(file));
                          } else {
                             setPreviewUrl(null);
                          }
                          setErrors(prev => ({ ...prev, screenshot: "" }));
                        }}
                        className={`w-full bg-slate-50 border ${errors.screenshot ? 'border-red-400' : 'border-slate-300'} rounded-none text-sm font-medium text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-none file:mr-4 file:py-3.5 file:px-4 file:border-0 file:border-r file:border-slate-300 file:text-xs file:font-bold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300 cursor-pointer p-0`}
                      />
                      {errors.screenshot && <p className="text-xs text-red-500 font-bold ml-1">{errors.screenshot}</p>}
                    </div>
 
                    {previewUrl && screenshot?.type.startsWith('image/') && (
                       <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-2 group transition-all hover:bg-white hover:shadow-sm">
                          <button 
                            type="button"
                            onClick={() => setIsImageModalOpen(true)}
                            className="relative w-14 h-14 border border-slate-300 overflow-hidden shrink-0"
                          >
                             <img src={previewUrl} alt="Upload Preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                             <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors hover:bg-black/20">
                                <MonitorPlay className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                          </button>
                          <div className="flex-grow overflow-hidden">
                             <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">File Selected</p>
                             <p className="text-xs font-bold text-slate-900 truncate">{screenshot.name}</p>
                             <button 
                               type="button"
                               onClick={() => {
                                 setScreenshot(null);
                                 if (previewUrl) URL.revokeObjectURL(previewUrl);
                                 setPreviewUrl(null);
                               }}
                               className="text-[9px] font-bold text-red-500 uppercase tracking-widest hover:underline mt-0.5"
                             >
                               Remove & Replace
                             </button>
                          </div>
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                       </div>
                    )}

                    <div className="pt-6 mt-auto border-t border-slate-100 pb-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 bg-primary text-white font-bold rounded-none text-base border-none ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'} transition-colors flex justify-center items-center gap-2`}
                      >
                        <ArrowRight className="w-5 h-5" />
                        Proceed to Preview
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 font-semibold leading-relaxed text-center mt-2">
                      Access will be provided via email within <br /><strong className="text-slate-700">24-48 hours</strong> after verification.
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 font-sans border-t-2 border-slate-900">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* About Section */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <Link href="/" className="inline-block bg-white p-2 rounded-none">
            <Image src="/learnsimply_logo.jpeg" alt="Learn Simply Logo" width={160} height={48} className="h-10 w-auto rounded-none brightness-105" />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md font-medium">
            Learn Simply Academy is a dedicated educational platform committed to bridging the gap between theoretical knowledge and practical surgical execution for gynecologists and medical professionals.
          </p>
          <ul className="space-y-2 text-sm text-slate-300 font-semibold w-fit mx-auto md:mx-0 text-left">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Expert-led curated curriculum</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Focus on clinical safety & efficiency</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Trusted by practitioners globally</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold text-white font-serif tracking-wide mb-4">Contact Information</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-none hover:bg-slate-800 transition-colors">
              <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Support</p>
                <p className="text-sm text-slate-200 font-medium">learnsimplyacademy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-none hover:bg-slate-800 transition-colors">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">WhatsApp / Phone</p>
                <p className="text-sm text-slate-200 font-medium">+9198260 55666, +91 79873 82998</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-none hover:bg-slate-800 transition-colors">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Location</p>
                <p className="text-sm text-slate-200 font-medium">Indore, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
        <p>© {new Date().getFullYear()}, <a href="https://www.kawitabapat.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-all font-bold">Dr. Kawita Bapat</a>. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
          <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          <Link href="/legal/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link>
          <Link href="/legal/refund" className="hover:text-primary transition-colors">Cancellation & Refund</Link>
          <Link href="/legal/cookies" className="hover:text-primary transition-colors">Cookies Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-slate-50 font-sans text-slate-900">
      <Hero />
      <CredibilityStrip />
      <CourseOverviewMerged />
      <ModulesSection />
      <OutcomeSection />
      <AudienceSection />
      <AboutAcademySection />
      <TrustAndObjection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
