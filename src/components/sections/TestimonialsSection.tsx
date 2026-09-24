"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-gold fill-gold" : "text-gold/20"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding bg-charcoal-dark relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-8.jpg"
          alt="Sri Lanka background"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal-dark/90" />
      </div>

      <div className="container-max mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Traveller Stories
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            What Our Guests{" "}
            <span className="gold-gradient-text italic">Are Saying</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Real experiences from Indian travellers who discovered Sri Lanka
            with IHV Travel.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="border border-gold/20 bg-charcoal-light/60 backdrop-blur-sm p-8 sm:p-10 relative">
                  {/* Quote icon */}
                  <Quote
                    size={40}
                    className="text-gold/15 absolute top-6 right-8"
                    fill="currentColor"
                  />

                  <StarRating rating={t.rating} />

                  <blockquote className="font-serif text-lg sm:text-xl text-cream/85 italic leading-relaxed mt-5 mb-7">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="text-cream font-medium text-sm">{t.name}</p>
                      <p className="text-cream/50 text-xs">{t.location}</p>
                      <p className="text-gold/70 text-xs mt-0.5">
                        {t.package}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 ${
                    i === current
                      ? "w-8 h-1.5 bg-gold"
                      : "w-1.5 h-1.5 bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini grid of remaining */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="border border-gold/10 bg-charcoal/30 p-4 text-center hidden sm:block"
            >
              <StarRating rating={t.rating} />
              <p className="text-cream/60 text-xs leading-relaxed mt-2 line-clamp-2 italic">
                &ldquo;{t.review}&rdquo;
              </p>
              <p className="text-gold/70 text-xs mt-2 font-medium">{t.name}</p>
              <p className="text-cream/40 text-xs">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
