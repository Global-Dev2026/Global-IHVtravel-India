"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const slideshowImages = [
  { src: "/images/image-7.jpg", alt: "Scenic View 1" },
  { src: "/images/image-8.jpg", alt: "Scenic View 2" },
  { src: "/images/image-9.jpg", alt: "Scenic View 3" },
  { src: "/images/image-10.jpg", alt: "Scenic View 4" },
  { src: "/images/image-11.jpg", alt: "Scenic View 5" },
  { src: "/images/image-12.jpg", alt: "Scenic View 6" },
  { src: "/images/image-13.jpg", alt: "Scenic View 7" },
  { src: "/images/image-14.jpg", alt: "Scenic View 8" },
  { src: "/images/image-15.jpg", alt: "Scenic View 9" },
];

export default function SlideshowSection() {
  return (
    <section className="py-20 bg-charcoal-light overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="text-center mb-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Discover
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
          Unforgettable <span className="gold-gradient-text italic">Moments</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* Double the images to create a seamless loop */}
          {[...slideshowImages, ...slideshowImages].map((img, i) => (
            <div
              key={i}
              className="relative w-[300px] sm:w-[400px] h-[400px] sm:h-[500px] overflow-hidden rounded-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-charcoal/20 transition-opacity duration-300 group-hover:bg-transparent" />
              <div className="absolute inset-0 border border-gold/0 hover:border-gold/30 transition-colors duration-400" />
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
