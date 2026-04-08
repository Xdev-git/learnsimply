"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  if (isAdminPage) return null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "overview" },
    { name: "Curriculum", href: "curriculum" },
    { name: "What to Learn", href: "what-to-learn" },
    { name: "FAQ", href: "faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
          <Image 
            src="/learnsimply_logo.jpeg" 
            alt="Learn Simply Logo" 
            width={200} 
            height={60} 
            className="h-16 w-auto rounded shadow-sm brightness-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors hover:text-primary cursor-pointer ${
                pathname === `/#${link.href}` ? "text-primary border-b-2 border-primary" : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#registration" 
            onClick={(e) => handleNavClick(e, "registration")}
            className="px-8 py-3 bg-primary text-white font-extrabold rounded-xl shadow-lg hover:bg-secondary transition-all hover:-translate-y-1 text-xs uppercase tracking-widest cursor-pointer"
          >
            Register Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-colors ${isScrolled ? "bg-slate-800" : "bg-white"}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-colors ${isScrolled ? "bg-slate-800" : "bg-white"}`}></div>
          <div className={`w-6 h-0.5 transition-colors ${isScrolled ? "bg-slate-800" : "bg-white"}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 absolute top-full left-0 w-full p-8 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-bold text-slate-700 hover:text-primary cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/#registration" 
              onClick={(e) => handleNavClick(e, "registration")}
              className="w-full text-center px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
