"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { packages } from "@/data/packages";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  city: z.string().min(2, "Please enter your city"),
  packageInterest: z.string().min(1, "Please select a package"),
  travelDates: z.string().min(1, "Please enter preferred travel dates"),
  groupSize: z.string().min(1, "Please select group size"),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const groupSizes = [
  "Solo",
  "Couple (2)",
  "Small Group (3–5)",
  "Family (6–10)",
  "Large Group (10+)",
  "Corporate Group",
];

const budgets = [
  "Budget Friendly",
  "Mid-Range (₹50k–₹1L pp)",
  "Luxury (₹1L–₹2L pp)",
  "Ultra Luxury (₹2L+ pp)",
  "Not Sure Yet",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+94 XX XXX XXXX",
    sub: "Mon–Sat, 9am–6pm IST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "reservations.india@ihvtravel.com",
    sub: "Reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Operations",
    value: "Sri Lanka & India",
    sub: "Colombo Headquarters",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    sub: "Guaranteed response",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // EmailJS integration — replace with your IDs
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
      console.log("Form data:", data);
      await new Promise((r) => setTimeout(r, 1500)); // simulate API call
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "32px 32px",
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
              Start Your Journey
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            Plan Your{" "}
            <span className="gold-gradient-text italic">Sri Lanka Trip</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Tell us about your dream journey and our specialist will craft a
            bespoke itinerary just for you — at no obligation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex gap-4 p-5 border border-gold/15 hover:border-gold/35 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center shrink-0 transition-colors">
                  <c.icon
                    size={16}
                    className="text-gold/70 group-hover:text-gold transition-colors"
                  />
                </div>
                <div>
                  <p className="text-cream/50 text-xs uppercase tracking-widest">
                    {c.label}
                  </p>
                  <p className="text-cream text-sm font-medium mt-0.5">
                    {c.value}
                  </p>
                  <p className="text-cream/40 text-xs mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Main site link */}
            <div className="p-5 border border-gold/15 text-center">
              <p className="text-cream/50 text-xs mb-2">
                Visit our main website
              </p>
              <a
                href="https://ihvtravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light text-sm font-medium transition-colors"
              >
                ihvtravel.com →
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-gold/30 bg-charcoal-light p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
              >
                <CheckCircle size={56} className="text-gold mb-5" />
                <h3 className="font-serif text-2xl text-cream mb-3">
                  Enquiry Received!
                </h3>
                <p className="text-cream/60 leading-relaxed max-w-sm text-sm">
                  Thank you for reaching out. Our Sri Lanka travel specialist
                  will contact you within 24 hours to begin crafting your
                  perfect journey.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold mt-8 text-sm py-2"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-gold/15 bg-charcoal-light p-8 space-y-5"
                noValidate
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="input-luxury"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="input-luxury"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      Phone *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="input-luxury"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      City *
                    </label>
                    <input
                      {...register("city")}
                      placeholder="Mumbai, Delhi, Bangalore..."
                      className="input-luxury"
                    />
                    {errors.city && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Package Interest */}
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                    Package of Interest *
                  </label>
                  <select {...register("packageInterest")} className="input-luxury">
                    <option value="">Select a package...</option>
                    {packages.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                    <option value="Tailor-Made Journey">
                      Tailor-Made Journey
                    </option>
                  </select>
                  {errors.packageInterest && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.packageInterest.message}
                    </p>
                  )}
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      Travel Dates *
                    </label>
                    <input
                      {...register("travelDates")}
                      placeholder="e.g. Dec 2026 or flexible"
                      className="input-luxury"
                    />
                    {errors.travelDates && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.travelDates.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                      Group Size *
                    </label>
                    <select {...register("groupSize")} className="input-luxury">
                      <option value="">Select...</option>
                      {groupSizes.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    {errors.groupSize && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.groupSize.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                    Budget Range
                  </label>
                  <select {...register("budget")} className="input-luxury">
                    <option value="">Select budget range (optional)...</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-widest block mb-1.5">
                    Special Requirements or Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Vegetarian meals, anniversary celebration, specific sites to visit..."
                    className="input-luxury resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send My Enquiry
                    </>
                  )}
                </button>

                <p className="text-cream/35 text-xs text-center">
                  No spam, ever. Your details are kept private and secure.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
