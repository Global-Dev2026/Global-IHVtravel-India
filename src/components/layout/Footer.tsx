"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const packages = [
  { label: "Grand Sri Lanka Discovery", href: "#packages" },
  { label: "Luxury Escape", href: "#packages" },
  { label: "Heritage & Cultural", href: "#packages" },
  { label: "Wildlife & Nature", href: "#packages" },
  { label: "Wellness & Ayurveda", href: "#packages" },
  { label: "Romance & Honeymoon", href: "#packages" },
];

const quickLinks = [
  { label: "Our Packages", href: "#packages" },
  { label: "Why Choose IHV", href: "#why-ihv" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Enquire Now", href: "#contact" },
  { label: "Main Website", href: "https://ihvtravel.com", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-gold/15">
      {/* Main Footer */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
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
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              International Hospitality Ventures — crafting extraordinary Sri
              Lanka journeys exclusively for Indian travellers since inception.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-serif text-gold text-base mb-5 tracking-wide">
              Our Journeys
            </h4>
            <ul className="space-y-2.5">
              {packages.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full transition-colors" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold text-base mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full transition-colors" />
                      {l.label}
                    </a>
                  ) : (
                    <a
                      href={l.href}
                      className="text-cream/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full transition-colors" />
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold text-base mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-cream/60">
                <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p>+94 XX XXX XXXX</p>
                  <p className="text-cream/40 text-xs mt-0.5">
                    Mon–Sat, 9am–6pm IST
                  </p>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-cream/60">
                <Mail size={15} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:reservations.india@ihvtravel.com"
                  className="hover:text-gold transition-colors"
                >
                  reservations.india@ihvtravel.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-cream/60">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span>Sri Lanka & India Operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10 py-5">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} International Hospitality Ventures (Pvt) Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-cream/40 hover:text-gold text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-cream/40 hover:text-gold text-xs transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
