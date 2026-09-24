"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const galleryImages = [
  {
    src: "/images/image-1.jpg",
    alt: "Sigiriya Rock Fortress",
    label: "Sigiriya",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/image-2.jpg",
    alt: "Ancient Temples",
    label: "Heritage Sites",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-3.jpg",
    alt: "Luxury Resort",
    label: "Luxury Stays",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-4.jpg",
    alt: "Elephant Safari",
    label: "Wildlife Safari",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-5.jpg",
    alt: "Wellness Retreat",
    label: "Wellness",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-16.jpg",
    alt: "Cultural Dance",
    label: "Culture",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-17.jpg",
    alt: "Tea Plantations",
    label: "Nature",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/image-18.jpg",
    alt: "Local Cuisine",
    label: "Gastronomy",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-20.jpg",
    alt: "Train Journey",
    label: "Scenic Routes",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/image-6.jpg",
    alt: "Beach Sunset",
    label: "Beach Paradise",
    span: "col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-charcoal-light overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-max mx-auto">
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
              Visual Journey
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            Sri Lanka Through{" "}
            <span className="gold-gradient-text italic">Our Lens</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            A glimpse of the extraordinary experiences that await you.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-cream font-serif text-sm tracking-wide">
                  {img.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* India-specific note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {[
            {
              title: "✈️ Easy Access from India",
              body: "Direct flights from Mumbai, Delhi, Chennai, Hyderabad & Bengaluru to Colombo.",
            },
            {
              title: "🇮🇳 Indian-Friendly Services",
              body: "Vegetarian menus, Hindi-speaking guides, and currency exchange support.",
            },
            {
              title: "🛂 Visa Made Simple",
              body: "Indians get Sri Lanka e-Visa online in minutes. We guide you through it.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gold/15 bg-charcoal/40 p-6"
            >
              <h4 className="font-serif text-cream text-base mb-2">
                {item.title}
              </h4>
              <p className="text-cream/55 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
