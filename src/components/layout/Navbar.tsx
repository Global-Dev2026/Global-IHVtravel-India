"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Why IHV", href: "#why-ihv" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-charcoal-dark/95 backdrop-blur-md shadow-luxury border-b border-gold/10"
            : "bg-transparent"
        )}
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="IHV Travel"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold gold-gradient-text leading-none block">
                  IHV Travel
                </span>
                <span className="text-cream/50 text-xs tracking-widest uppercase">
                  India
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-cream/80 hover:text-gold text-sm tracking-wide uppercase font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+94XXXXXXXXX"
                className="hidden md:flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors"
              >
                <Phone size={14} />
                <span>+94 XX XXX XXXX</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="hidden lg:block btn-gold text-xs py-2 px-6"
              >
                Enquire Now
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-cream hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal-dark/98 backdrop-blur-lg pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-cream/80 hover:text-gold text-2xl font-serif text-left border-b border-gold/10 pb-4 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="btn-gold mt-4 text-center"
              >
                Enquire Now
              </motion.button>
              <a
                href="tel:+94XXXXXXXXX"
                className="flex items-center gap-2 text-gold text-base font-medium justify-center mt-2"
              >
                <Phone size={16} />
                <span>+94 XX XXX XXXX</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
