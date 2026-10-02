"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, ArrowRight, MapPin, Calendar, Users, Compass, CheckCircle, ArrowUpRight, Play, X, Menu, Phone, Mail } from "lucide-react";

// GSAP registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------
// 3D MODELS & HERO
// -------------------------------------------------------------

// Removed GoldLotus 3D Component

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video/background-video-remake.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/40 to-background/95" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
          className="text-gold tracking-[0.4em] uppercase text-xl md:text-3xl font-semibold mb-6"
        >
          Timeless Splendor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-6 leading-tight"
        >
          Crafted journeys for <br /><span className="gold-gradient-text italic">modern explorers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }}
          className="text-muted max-w-2xl text-sm md:text-base font-light leading-relaxed mb-10"
        >
          Discover unforgettable journeys where nature, culture, and adventure come together in perfect harmony. Turn every trip into a timeless story worth remembering. <br className="hidden md:block" /><span className="text-ivory mt-2 inline-block">India to Sri Lanka, effortlessly.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a href="https://ihvtravel.com" target="_blank" rel="noopener noreferrer" className="btn-gold group flex items-center gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gold text-[10px] tracking-widest uppercase rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// NAVBAR
// -------------------------------------------------------------

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    "Home",
    "Lifestyle Experiences",
    "About",
    "Services",
    "Our Signature Journey",
    "Partnerships"
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "-translate-y-[40px]" : "translate-y-0"}`}>
        {/* Top Bar - Contact & Utility */}
        <div className="h-[40px] w-full bg-background/90 border-b border-gold/10 hidden lg:flex items-center justify-end px-8">
          <div className="flex items-center gap-6 text-[9px] uppercase tracking-[0.25em] text-muted">
            <Link href="https://www.ihvtravel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2 text-gold">
              <Compass size={10} /> Visit Main Website
            </Link>
            <div className="w-px h-3 bg-gold/30" />
            <Link href="#contact-us" className="hover:text-gold transition-colors flex items-center gap-2">
              <Phone size={10} /> +94 112 2160252
            </Link>
            <div className="w-px h-3 bg-gold/30" />
            <Link href="#contact-us" className="hover:text-gold transition-colors">Contact Us</Link>
            <div className="w-px h-3 bg-gold/30" />
            <div className="flex items-center gap-2 text-gold">
              <button className="hover:text-ivory transition-colors">EN</button>
              <span>/</span>
              <button className="hover:text-ivory transition-colors">HI</button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-500 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-b border-gold/10 shadow-luxury py-3" : "bg-gradient-to-b from-background/80 to-transparent py-5"}`}>
          <div className="container-max px-6 lg:px-8 flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 relative z-50 group">
              <div className="w-12 h-12 md:w-16 md:h-16 relative transition-transform duration-500 group-hover:scale-105">
                <Image src="https://www.ihvtravel.com/header-logo/1.png" alt="IHV Travel Logo" fill className="object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif text-ivory tracking-[0.15em] leading-none mb-1 group-hover:text-gold transition-colors duration-500">IHV</span>
                <span className="text-[8px] md:text-[9px] text-gold tracking-[0.4em] uppercase leading-none">Travel</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {mainLinks.map((link) => (
                <Link key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="relative group text-[10px] text-ivory/90 hover:text-gold transition-colors tracking-[0.2em] uppercase py-2">
                  {link}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
              <div className="w-px h-5 bg-gold/20 mx-2" />
              <Link href="https://www.ihvtravel.com/login" target="_blank" rel="noopener noreferrer" className="relative px-6 py-2.5 overflow-hidden group border border-gold/50 rounded-sm inline-block">
                <span className="absolute inset-0 bg-gold/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative text-[10px] uppercase tracking-[0.2em] text-gold group-hover:text-ivory transition-colors duration-300">
                  Sign Up
                </span>
              </Link>
            </nav>

            {/* Mobile Nav Toggle */}
            <button className="xl:hidden relative z-50 text-gold p-2 hover:bg-gold/10 rounded-full transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background/95 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-xl md:text-2xl font-serif text-ivory hover:text-gold transition-colors tracking-widest text-center block">
                    {link}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex flex-col items-center gap-6 w-full max-w-xs"
              >
                <Link href="https://www.ihvtravel.com/" target="_blank" rel="noopener noreferrer" className="text-gold text-xs tracking-widest uppercase hover:text-ivory transition-colors flex items-center gap-2 border-b border-gold/30 pb-1">
                  <Compass size={12} /> Visit Main Website
                </Link>
                <Link href="https://www.ihvtravel.com/login" target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center py-4 inline-block">
                  Sign Up
                </Link>
                <div className="flex items-center gap-4 text-gold text-xs tracking-widest">
                  <button className="hover:text-ivory transition-colors">EN</button>
                  <span className="text-muted">|</span>
                  <button className="hover:text-ivory transition-colors">HI</button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// -------------------------------------------------------------
// VALUE DIFFERENCE
// -------------------------------------------------------------

function ValueDifference() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".val-card", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: "Authentic Local Experiences", icon: Compass },
    { title: "Verified Luxury Stays", icon: CheckCircle },
    { title: "Personalized Itineraries", icon: MapPin },
    { title: "Local Expert Guides", icon: Users },
    { title: "Sustainable Tourism", icon: CheckCircle },
    { title: "24/7 Support", icon: Phone },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-background relative overflow-hidden" id="about">
      <div className="container-max relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">The Value Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">Why modern explorers trust our curated escapes.</h2>
          <p className="text-muted text-lg">We bridge the gap between pure raw nature and refined premium luxury. Every detail of your journey is crafted with meticulous local expertise and verified to exceed global design standards.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gold/10 py-12">
          {[
            { value: "10k+", label: "Travelers Hooked" },
            { value: "500+", label: "Bespoke Tours" },
            { value: "150+", label: "Partner Boutiques" },
            { value: "99%", label: "Guest Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-serif text-gold mb-2">{stat.value}</div>
              <div className="text-xs text-muted uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

// -------------------------------------------------------------
// SIGNATURE JOURNEYS
// -------------------------------------------------------------

const PACKAGES = [
  { title: "The Grand Sri Lanka Discovery", duration: "8 Days | 7 Nights", desc: "Experience the very best of Sri Lanka in one unforgettable journey.", ideal: "First-time visitors, couples, families" },
  { title: "Luxury Escape Sri Lanka", duration: "7 Days | 6 Nights", desc: "Experience Sri Lanka through elegance, exclusivity, and personalized service.", ideal: "Luxury travellers, VIP guests, honeymooners" },
  { title: "Heritage & Cultural Discovery", duration: "6 Days | 5 Nights", desc: "Travel through over 2,500 years of Sri Lankan civilization.", ideal: "History enthusiasts, cultural explorers" },
  { title: "Wildlife & Nature Adventure", duration: "7 Days | 6 Nights", desc: "Explore one of the world's richest biodiversity destinations.", ideal: "Wildlife lovers and photographers" },
  { title: "Wellness & Ayurveda Retreat", duration: "10 Days | 9 Nights", desc: "A journey designed to restore balance, health, and inner peace.", ideal: "Wellness seekers, stress recovery" },
  { title: "Romance & Honeymoon Collection", duration: "8 Days | 7 Nights", desc: "Celebrate love in one of the world's most romantic island destinations.", ideal: "Honeymooners, anniversaries, proposals" },
  { title: "Adventure Sri Lanka", duration: "8 Days | 7 Nights", desc: "Designed for travellers seeking excitement and unforgettable outdoor experiences.", ideal: "Adventure enthusiasts and young travellers" },
  { title: "Family Holiday Experience", duration: "7 Days | 6 Nights", desc: "Create lifelong memories with experiences designed for every generation.", ideal: "Families with children, multi-generational" },
  { title: "Silver Horizons", duration: "14–30 Days", desc: "Luxury Senior Living Experience. Wellness, relaxation, and healthcare access.", ideal: "Active retirees, long-stay guests (55+)" },
  { title: "MICE & Corporate Excellence", duration: "Tailor-Made", desc: "Professional destination management solutions for businesses.", ideal: "Corporate teams, exhibitions, retreats" },
];

function SignatureJourneys() {
  return (
    <section className="section-padding bg-surface border-y border-gold/10" id="our-signature-journey">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Tailor-Made Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">Our Signature Journeys</h2>
          <p className="text-muted text-lg">Every traveler is unique. Discover our expertly crafted itineraries designed to inspire, connect, and create lasting memories.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className="card-luxury p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
              <div className="text-gold text-xs tracking-widest uppercase mb-4 font-semibold">{pkg.duration}</div>
              <h3 className="text-2xl font-serif text-ivory mb-4 group-hover:text-gold transition-colors">{pkg.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{pkg.desc}</p>

              <div className="mt-auto pt-6 border-t border-gold/10">
                <span className="text-[10px] text-ivory/50 uppercase tracking-widest block mb-2">Ideal For</span>
                <span className="text-xs text-ivory/80">{pkg.ideal}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-gold group inline-flex items-center gap-2">
            Request Custom Itinerary <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// MAIN PAGE EXPORT
// -------------------------------------------------------------

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial Loading
    const timer = setTimeout(() => setLoading(false), 2000);

    // Custom Cursor
    const moveCursor = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Logo outline draw simulation */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M50 10 L90 90 L10 90 Z"
              stroke="#D4AF37" strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-ivory overflow-hidden selection:bg-gold selection:text-background"
      onMouseOver={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('button, a, input, select, .interactive')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }}
    >
      <div
        className={`custom-cursor ${isHovering ? 'active' : ''} hidden md:block`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <Navbar />
      <Hero />
      <ValueDifference />

      {/* 4. HOW WE WORK */}
      <section className="section-padding bg-surface" id="services">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">A journey that feels inevitable, not improvised.</h2>

            <div className="space-y-12">
              {[
                { step: "01", title: "Listen", desc: "We begin by understanding your travel style, preferences, and desires for this specific getaway." },
                { step: "02", title: "Design", desc: "Our local experts craft a bespoke itinerary, selecting boutique stays and exclusive experiences." },
                { step: "03", title: "Journey", desc: "You arrive to seamless logistics, 24/7 concierge support, and a journey that unfolds flawlessly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-3xl font-serif text-gold/30 pt-1">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-serif text-gold mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80" alt="Sri Lanka Tea Plantation" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="backdrop-blur-md bg-surface/80 border border-gold/30 p-6 rounded-xl">
                <p className="text-lg font-serif italic text-ivory">&quot;Three regions. Two flights. Zero rush.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIFESTYLE EXPERIENCES */}
      <section className="section-padding bg-background relative" id="lifestyle-experiences">
        <div className="container-max">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Curated Moments</span>
              <h2 className="text-4xl md:text-5xl font-serif">Lifestyle Experiences</h2>
            </div>
            <button className="btn-outline-gold hidden md:block">View All Experiences</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Kitchen Dining", tag: "Culinary Series", img: "/images/food" },
              { title: "Hiriketiya Sunset Surf", tag: "Active Luxury", img: "/images/hirikatiya" },
              { title: "Dandeniya Sanctuary", tag: "Lake Retreat", img: "/images/lake" },
              { title: "Zen Garden Pavilion", tag: "Wellness & Spa", img: "/images/yoga" }
            ].map((exp, i) => (
              <div key={i} className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer">
                {/* 3D hover tilt simulation using framer motion would go here, simplified to CSS for brevity */}
                <div className="absolute inset-0 bg-surface transition-transform duration-700 group-hover:scale-110">
                  <div className="w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80)` }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 rounded-xl transition-all duration-500 shadow-[inset_0_0_0_rgba(212,175,55,0)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.3)]" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-[10px] tracking-widest uppercase mb-2 block">{exp.tag}</span>
                  <h3 className="text-xl font-serif text-ivory group-hover:text-gold transition-colors">{exp.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <button className="btn-outline-gold w-full">View All</button>
          </div>
        </div>
      </section>

      <SignatureJourneys />

      {/* 9. INDIA CONNECTION */}
      <section className="py-24 relative overflow-hidden bg-surface" id="partnerships">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1582650824249-14396b2cdbd8?auto=format&fit=crop&q=80" alt="Texture" fill className="object-cover opacity-10 mix-blend-overlay" />
        </div>
        <div className="container-max relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="order-1">
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">India to Sri Lanka</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Closer than you think.<br />More luxurious than you imagined.</h2>
            <p className="text-muted mb-10 leading-relaxed text-lg">With direct short flights from major Indian cities, Sri Lanka is the ultimate quick-escape destination. We cater specifically to our Indian guests with tailored services.</p>

            <ul className="space-y-4 mb-12 flex flex-col items-center">
              {["100% Vegetarian & Jain-friendly dining options", "Curated Ramayana Trail heritage tours", "Hassle-free ETA Visa guidance", "Quotes provided in INR"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base text-ivory/80">
                  <CheckCircle className="text-gold w-5 h-5" /> {item}
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="card-luxury p-8 flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/50 overflow-hidden relative shrink-0">
                  <Image src="/images/shivkumar.jpg" alt="V. Shivakumar" fill className="object-cover object-top" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-lg text-gold">V. Shivakumar</h4>
                  <p className="text-xs text-muted uppercase tracking-widest mb-2">IHV Representative, India</p>
                  <Link href="#" className="text-gold text-xs underline hover:text-ivory transition-colors">Connect on LinkedIn</Link>
                </div>
              </div>
              <div className="card-luxury p-8 flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/50 overflow-hidden relative shrink-0">
                  <Image src="/images/geet1.png" alt="Shabnam Raza (Geeta)" fill className="object-cover object-top" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">Deputy Director</p>
                  <h4 className="font-serif text-lg text-ivory">Shabnam Raza (Geeta)</h4>
                  <p className="text-xs text-muted mb-2">Business Networking Professional</p>
                  <Link href="#" className="text-gold text-xs underline hover:text-ivory transition-colors">Connect on LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-gold/20" id="contact-us">
        <div className="container-max px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-serif text-ivory tracking-widest leading-none">IHV</span>
                <span className="text-xs text-gold tracking-[0.3em] uppercase leading-none mt-2">Travel</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Sri Lanka&apos;s premier luxury tourism partner. Crafting bespoke itineraries, curated experiences, and seamless journeys for discerning travellers since 2018.
              </p>
              <div className="flex gap-4">
                {/* Badges Placeholder */}
                <div className="w-16 h-16 border border-gold/30 rounded flex items-center justify-center text-[10px] text-gold uppercase text-center bg-surface/50">IATA<br />Cert</div>
                <div className="w-16 h-16 border border-gold/30 rounded flex items-center justify-center text-[10px] text-gold uppercase text-center bg-surface/50">SLTDA<br />Valid</div>
              </div>
            </div>

            <div>
              <h4 className="text-gold text-sm tracking-widest uppercase mb-6">Explore</h4>
              <ul className="space-y-3">
                {["Home", "Destinations", "Experiences", "Offers", "Gallery"].map(link => (
                  <li key={link}><Link href="#" className="text-muted hover:text-gold text-sm transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-sm tracking-widest uppercase mb-6">Get In Touch</h4>
              <ul className="space-y-4 text-sm text-muted">
                <li className="flex gap-3"><MapPin className="text-gold shrink-0 w-5 h-5" /> 22/20, Sepali Place, Yahampath Mawatha, Maharagama, Sri Lanka</li>
                <li className="flex gap-3"><Phone className="text-gold shrink-0 w-5 h-5" /> +94 112 2160252</li>
                <li className="flex gap-3"><Mail className="text-gold shrink-0 w-5 h-5" /> info@ihvtravel.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-sm tracking-widest uppercase mb-6">Newsletter</h4>
              <p className="text-muted text-sm mb-4">Curated travel insights, delivered.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-surface border border-gold/20 px-4 py-2 text-sm text-ivory focus:outline-none focus:border-gold w-full" />
                <button className="bg-gold text-background px-4 py-2 hover:bg-gold-highlight transition-colors"><ArrowRight size={16} /></button>
              </div>
            </div>
          </div>

          <div className="divider-gold w-full max-w-none opacity-30" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <p>© 2026 International Hospitality Ventures (Private) Limited. A Subsidiary of Global Cooperation (Private) Limited. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
              <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/94771522718" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
        <Phone size={24} />
      </a>
    </main>
  );
}
