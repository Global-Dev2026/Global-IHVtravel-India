"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Users, Check, ArrowRight, X } from "lucide-react";
import { packages } from "@/data/packages";
import { TourPackage, PackageCategory } from "@/types";

const categories: { label: string; value: PackageCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Discovery", value: "discovery" },
  { label: "Luxury", value: "luxury" },
  { label: "Heritage", value: "heritage" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Wellness", value: "wellness" },
  { label: "Romance", value: "romance" },
  { label: "Adventure", value: "adventure" },
  { label: "Family", value: "family" },
  { label: "Senior", value: "senior" },
  { label: "Corporate", value: "corporate" },
];

function PackageCard({
  pkg,
  index,
  onSelect,
}: {
  pkg: TourPackage;
  index: number;
  onSelect: (pkg: TourPackage) => void;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card-luxury group cursor-pointer"
      onClick={() => onSelect(pkg)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        {pkg.badge && (
          <div className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-semibold px-3 py-1 tracking-wider uppercase">
            {pkg.badge}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-4 text-cream/80 text-xs">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {pkg.duration} / {pkg.nights}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors duration-300 mb-2 leading-snug">
          {pkg.title}
        </h3>
        <p className="text-cream/55 text-sm leading-relaxed line-clamp-2 mb-4">
          {pkg.tagline}
        </p>

        {/* Includes preview */}
        <ul className="space-y-1.5 mb-5">
          {pkg.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-cream/70 text-xs">
              <Check size={11} className="text-gold shrink-0" />
              {item}
            </li>
          ))}
          {pkg.includes.length > 3 && (
            <li className="text-gold/70 text-xs pl-4">
              +{pkg.includes.length - 3} more included
            </li>
          )}
        </ul>

        {/* Ideal for */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.idealFor.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 border border-gold/25 text-gold/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-200">
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

function PackageModal({
  pkg,
  onClose,
}: {
  pkg: TourPackage;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-dark/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-charcoal-light border border-gold/25 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-64">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            sizes="672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-charcoal/80 border border-gold/30 flex items-center justify-center text-cream hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {pkg.badge && (
            <span className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-semibold px-3 py-1 tracking-wider uppercase">
              {pkg.badge}
            </span>
          )}
        </div>

        <div className="p-8">
          {/* Duration */}
          <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-3">
            <Clock size={12} />
            {pkg.duration} · {pkg.nights}
          </div>

          <h2 className="font-serif text-2xl text-cream mb-2">{pkg.title}</h2>
          <p className="text-gold/80 italic text-sm mb-4">{pkg.tagline}</p>
          <p className="text-cream/65 text-sm leading-relaxed mb-6">
            {pkg.description}
          </p>

          {/* Includes */}
          <h4 className="font-serif text-gold text-base mb-3">Journey Includes</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {pkg.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cream/75 text-sm">
                <Check size={13} className="text-gold shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* Ideal for */}
          <div className="mb-6">
            <span className="text-cream/50 text-xs uppercase tracking-widest mr-2">Ideal for:</span>
            {pkg.idealFor.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs px-3 py-1 border border-gold/30 text-gold/80 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold w-full text-center"
          >
            Enquire About This Package
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory | "all">("all");
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "all"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  return (
    <section id="packages" className="section-padding bg-charcoal">
      <div className="container-max mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Curated for India
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            Our Signature{" "}
            <span className="gold-gradient-text italic">Journeys</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Ten meticulously crafted experiences — from luxury escapes to
            wildlife adventures — each delivering the very best of Sri Lanka.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-xs px-4 py-2 tracking-wider uppercase font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-gold text-charcoal"
                  : "border border-gold/30 text-cream/60 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((pkg, i) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                index={i}
                onSelect={setSelectedPackage}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-cream/50 text-sm mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline-gold"
          >
            Request a Tailor-Made Journey
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <PackageModal
            pkg={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
