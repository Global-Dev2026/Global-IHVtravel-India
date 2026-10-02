"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Listen",
    desc: "We begin by understanding your travel style, preferences, and desires for this specific getaway.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our local experts craft a bespoke itinerary, selecting boutique stays and exclusive experiences.",
  },
  {
    num: "03",
    title: "Journey",
    desc: "You arrive to seamless logistics, 24/7 concierge support, and a journey that unfolds flawlessly.",
  },
];

const slideshowImages = [
  "/images/slideshow/leopard.jpg",
  "/images/slideshow/sigiriya.jpg",
  "/images/slideshow/beach.jpg",
  "/images/slideshow/tea-estate.jpg",
];

export default function HowWeWorkSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#0F0F10] text-white overflow-hidden" id="how-we-work">
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] tracking-[0.3em] text-xs font-semibold uppercase mb-6 block"
            >
              How We Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-serif text-white/90 leading-tight mb-14"
            >
              A journey that feels inevitable,<br />not improvised.
            </motion.h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-[#E2C08D]/60 font-serif text-2xl pt-1">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xl font-serif mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#D1D5DB] text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Slideshow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-900"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slideshowImages[currentImage]}
                  alt="Luxury Travel Experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
              <div className="backdrop-blur-md bg-black/40 border border-white/10 p-6 rounded-2xl shadow-xl">
                <p className="font-serif italic text-white/90 text-lg md:text-xl text-center">
                  &quot;Three regions. Two flights. Zero rush.&quot;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
