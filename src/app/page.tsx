"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2, Award, Globe2, MonitorPlay,
  Check, PlayCircle, ShieldCheck, ChevronDown,
  BookOpen, Clock, FileCheck, XCircle, Shield,
  Mail, Phone, MapPin
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



// --- Main Sections ---

const Hero = () => (
  <section className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden bg-slate-900 rounded-b-[4rem] lg:rounded-b-[6rem] z-10">
    <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary inline-block border border-secondary/30 bg-secondary/10 px-3 py-1 rounded-none shadow-none backdrop-blur-sm">
              Professional Education
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif leading-tight text-white mb-2 drop-shadow-md">
              <span className="text-secondary drop-shadow-lg">Vaginal Surgeries</span> <span className="text-primary">Online Course</span>
            </h1>
            <p className="text-lg text-white leading-snug font-medium">
              Structured, Step-by-Step Surgical Training for Clinical Confidence.
            </p>
          </div>

          <p className="text-base text-slate-200 leading-relaxed max-w-xl">
            A 16-module online program designed for gynecologists and trainees to develop clear surgical understanding and practical decision-making in vaginal procedures.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 flex items-center gap-4 shadow-none">
            <div className="w-12 h-12 bg-white/20 rounded-none flex items-center justify-center text-white shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">Led by <strong className="font-bold tracking-wide">Dr. Kawita Bapat</strong></p>
              <p className="text-xs text-secondary mt-0.5 font-medium">38+ years experience, 15,000+ procedures</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Step-by-step techniques",
              "Real operative insights",
              "Complication management",
              "Designed for busy clinicians"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-100 font-medium drop-shadow-sm">
                <Check className="w-4 h-4 text-secondary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
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
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" /> Lifetime access</span>
              <span className="flex items-center gap-1"><Award className="w-3 h-3 text-secondary" /> Certificate included</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-end pt-10 animate-in fade-in zoom-in duration-1000 delay-150">
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
            <div className="absolute bottom-8 -right-4 lg:-right-8 z-20 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 transform hover:-translate-y-1 transition-transform">
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
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Structured Approach</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">A Structured Approach to Vaginal Surgery</h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              This program delivers a step-by-step understanding of vaginal surgery, starting from foundational anatomy to complete surgical execution and complication management.
            </p>
            <div className="p-6 bg-white rounded-none border-l-4 border-primary shadow-none space-y-4 hover:bg-slate-50 transition-colors">
              <p className="text-sm font-semibold text-slate-800">The course focuses on practical clinical application, not theoretical discussion. Participants will learn:</p>
              <ul className="space-y-3">
                {[
                  "How to select appropriate cases",
                  "How to perform procedures with clarity",
                  "How to manage intra-operative challenges confidently"
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
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
            {/* Inline video player, no autoplay */}
            <div className="w-full bg-black border border-slate-200 aspect-video relative group flex items-center justify-center p-1 shadow-sm">
              <video
                src="/course_glance.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
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
                  "Lifetime access included",
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
            <div className="p-8 bg-white rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border-none flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
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
          <div className="h-full p-10 bg-slate-50 border border-slate-200 rounded-none space-y-8 relative hover:bg-white hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="text-xl font-bold text-slate-900">Professional Audience</h4>
            </div>
            <ul className="space-y-4 text-sm font-medium text-slate-800">
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
        <div className="space-y-6">
          <span className="text-secondary text-xs font-bold uppercase tracking-widest block bg-secondary/10 inline-block px-4 py-1.5 rounded-none border border-secondary/20">The Foundation</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif !text-white drop-shadow-lg" style={{ color: '#ffffff' }}>
            About Learn Simply Academy
          </h2>
          <p className="text-base leading-relaxed font-medium !text-slate-200" style={{ color: '#e2e8f0' }}>
            Founded by Dr. Kawita Bapat, the academy is dedicated to bridging the gap between theoretical knowledge and practical, safe surgical execution. We train the next generation of surgeons through structured clarity.
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
        <div className="w-full bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative p-2 ring-1 ring-slate-800">
          <video
            src="/learn_simply_academy.mp4"
            controls
            className="w-full h-full object-cover rounded-[1.5rem]"
            poster="/learnsimply_logo.jpeg"
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
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block">Trust & Verification</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900">Certification</h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">Participants who complete the course and assessment will receive a primary digital Certificate of Completion to validate their learning.</p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-none shadow-none space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">Minimum Requirements</h4>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3"><FileCheck className="w-4 h-4 text-primary shrink-0" /> Completion of all 16 modules</li>
                <li className="flex items-center gap-3"><FileCheck className="w-4 h-4 text-primary shrink-0" /> Participation in final assessment</li>
              </ul>
            </div>
            {/* Real certificate image injected here */}
            <div className="w-full relative rounded-none border border-slate-300 overflow-hidden aspect-[4/3] bg-white">
              <Image src="/certificate-preview.png" alt="Certificate Preview" fill className="object-cover" />
            </div>
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
              { q: "How long will I have access?", a: "You get lifetime access to all 16 modules immediately upon registration." },
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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", phone: "" };
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

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      // Simulate API handshake before routing to secure payment gateway
      setTimeout(() => {
        window.location.href = `/checkout?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;
      }, 1000);
    }
  };

  return (
    <section id="registration" className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <FadeInWhenVisible>
          <div className="space-y-10 text-slate-900">
            <div className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-widest block border border-primary/20 inline-block px-4 py-2 bg-white shadow-sm">Secure Enrollment</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif leading-tight tracking-wide text-slate-900 drop-shadow-sm">
                Enroll in the <span className="text-primary">Vaginal Surgeries Online Course</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-slate-200 p-8 shadow-lg w-full max-w-sm flex flex-col justify-center">
                <p className="text-slate-500 font-bold text-xs mb-3 uppercase tracking-widest flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Launch Offer</p>
                <div className="flex items-baseline gap-4">
                  <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">₹18,000</h2>
                  <p className="text-slate-400 font-bold line-through text-lg">₹22,000</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> What Your Registration Includes
                </h4>
                <ul className="space-y-4 text-sm text-slate-700 font-semibold max-w-md pl-1">
                  {[
                    "Access to 16 structured video modules",
                    "Lifetime access to all course recordings",
                    "Practical surgical learning and operative insights",
                    "Access to optional live Q&A sessions",
                    "Certificate of completion after course assessment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 -mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <div className="bg-white rounded-none shadow-xl p-8 lg:p-12 border border-slate-200 relative">
            <div className="space-y-2 mb-8 text-center text-slate-900">
              <h3 className="text-2xl font-bold font-serif">Register & Pay Securely</h3>
              <p className="text-sm font-medium text-slate-600">Fast, secure online checkout</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-primary text-white font-bold rounded-none text-base border-none ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'} transition-colors flex justify-center items-center gap-2`}
                >
                  <Shield className="w-4 h-4" />
                  {isSubmitting ? "Processing secure link..." : "Proceed to Pay ₹18,000"}
                </button>
              </div>

              <div className="flex flex-col items-center gap-3 text-center pt-2">
                <p className="text-[10px] text-slate-600 max-w-xs font-semibold leading-relaxed bg-slate-100 p-2 border border-slate-200 rounded-none w-full">
                  Access provided immediately after successful payment. Login details will be emailed.
                </p>
              </div>
            </form>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 font-sans border-t-2 border-slate-900">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* About Section */}
        <div className="space-y-6">
          <Link href="/" className="inline-block bg-white p-2 rounded-none">
            <Image src="/learnsimply_logo.jpeg" alt="Learn Simply Logo" width={160} height={48} className="h-10 w-auto rounded-none brightness-105" />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md font-medium">
            Learn Simply Academy is a dedicated educational platform committed to bridging the gap between theoretical knowledge and practical surgical execution for gynecologists and medical professionals.
          </p>
          <ul className="space-y-2 text-sm text-slate-300 font-semibold">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Expert-led curated curriculum</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Focus on clinical safety & efficiency</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Trusted by practitioners globally</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-white font-serif tracking-wide mb-4">Contact Information</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-none hover:bg-slate-800 transition-colors">
              <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Support</p>
                <p className="text-sm text-slate-200 font-medium">support@learnsimplyacademy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-none hover:bg-slate-800 transition-colors">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">WhatsApp / Phone</p>
                <p className="text-sm text-slate-200 font-medium">+91-98260 55666</p>
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
        <p>© {new Date().getFullYear()} Learn Simply Academy. All rights reserved.</p>
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
