"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Star,
  Headphones,
  MapPin,
  Award,
  Users,
  Plane,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Licensed",
    description:
      "Fully licensed destination management company with years of proven excellence in Sri Lanka tourism.",
  },
  {
    icon: Star,
    title: "Luxury at Every Step",
    description:
      "Five-star hotels, private chauffeurs, and exclusive experiences — quality is never compromised.",
  },
  {
    icon: Headphones,
    title: "24/7 Guest Support",
    description:
      "Our dedicated team is available around the clock throughout your entire journey in Sri Lanka.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep-rooted local knowledge means access to hidden gems, authentic experiences, and insider connections.",
  },
  {
    icon: Award,
    title: "Curated for Indians",
    description:
      "Packages tailored specifically for Indian travellers — vegetarian dining, Hindi-speaking guides, and familiar touches.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every itinerary is crafted around your preferences, travel style, and special requirements.",
  },
  {
    icon: Plane,
    title: "Seamless Logistics",
    description:
      "Visa assistance, airport transfers, train bookings — every detail handled so you travel stress-free.",
  },
  {
    icon: Heart,
    title: "Memories That Last",
    description:
      "We don't just plan trips — we craft stories you'll be telling for years to come.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="why-ihv"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #16213E 0%, #1A1A2E 40%, #0F0F1A 100%)",
      }}
    >
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

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
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            The{" "}
            <span className="gold-gradient-text italic">IHV Difference</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just sell tours. We architect journeys that reflect
            your dreams — delivered with Sri Lankan warmth and world-class
            precision.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group p-6 border border-gold/15 hover:border-gold/40 bg-charcoal/40 hover:bg-charcoal/60 transition-all duration-400 text-center"
            >
              <div className="w-12 h-12 border border-gold/30 group-hover:border-gold flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <reason.icon
                  size={20}
                  className="text-gold/70 group-hover:text-gold transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-cream text-base mb-2 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-cream/55 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border border-gold/20 bg-charcoal/30 p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
          <blockquote className="font-serif text-xl sm:text-2xl text-cream/85 italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;International Hospitality Ventures transforms travel into
            exceptional experiences through personalized service, trusted
            partnerships, and authentic Sri Lankan hospitality.&rdquo;
          </blockquote>
          <div className="divider-gold mt-6" />
          <p className="text-gold/70 text-xs tracking-widest uppercase mt-4">
            International Hospitality Ventures (Pvt) Limited
          </p>
        </motion.div>
      </div>
    </section>
  );
}
