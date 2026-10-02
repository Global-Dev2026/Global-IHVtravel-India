"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "trincomalee",
    name: "Koneswaram Temple",
    city: "Trincomalee",
    description: "Built by King Ravana, this magnificent temple offers breathtaking views of the Indian Ocean.",
    top: "36%",
    left: "60%",
  },
  {
    id: "chilaw",
    name: "Munneswaram Temple",
    city: "Chilaw",
    description: "An ancient Hindu temple where Lord Rama prayed to Lord Shiva after defeating Ravana.",
    top: "53%",
    left: "34%",
  },
  {
    id: "sigiriya",
    name: "Sigiriya Rock Fortress",
    city: "Sigiriya",
    description: "Historically believed to be one of the majestic palaces of King Ravana, known for its advanced architecture.",
    top: "45%",
    left: "52%",
  },
  {
    id: "nuwara-eliya",
    name: "Sita Amman Temple",
    city: "Nuwara Eliya",
    description: "The exact place where Goddess Sita was held captive in the Ashoka Vatika.",
    top: "65%",
    left: "50%",
  },
  {
    id: "ella",
    name: "Ravana Falls & Caves",
    city: "Ella",
    description: "A spectacular waterfall named after King Ravana, who reportedly hid Sita in the caves behind it.",
    top: "70%",
    left: "58%",
  },
  {
    id: "galle",
    name: "Rumassala Mountain",
    city: "Galle",
    description: "A piece of the Himalayas dropped by Hanuman while carrying the Sanjeevani mountain.",
    top: "79%",
    left: "39%",
  },
];

export default function RamayanaMapSection() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="section-padding bg-charcoal-dark border-t border-gold/10 relative overflow-hidden" id="ramayana-trail">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Legendary Journeys</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory">The Ramayana Trail</h2>
          <p className="text-muted mt-6 max-w-2xl mx-auto">
            Retrace the epic journey of the Ramayana across Sri Lanka. From ancient temples to mystical mountains,
            experience the luxury of history intertwined with breathtaking landscapes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Map Side */}
          <div className="relative w-full max-w-[600px] mx-auto aspect-square bg-surface rounded-2xl overflow-hidden border border-gold/10">
            <Image
              src="/images/sri-lanka-map.jpg"
              alt="Sri Lanka Map"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 to-transparent pointer-events-none" />

            {/* Interactive Points */}
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Ping Animation */}
                <span className={`absolute inline-flex h-full w-full rounded-full bg-gold opacity-40 transition-transform duration-500 ${activeLocation === loc.id ? 'scale-150 animate-ping' : 'animate-pulse'}`}></span>
                {/* Point */}
                <span className={`relative inline-flex rounded-full h-4 w-4 transition-colors duration-300 ${activeLocation === loc.id ? 'bg-white' : 'bg-gold'}`}></span>

                {/* Tooltip on Map */}
                <AnimatePresence>
                  {activeLocation === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 bg-charcoal border border-gold/30 p-3 rounded-lg shadow-xl pointer-events-none"
                    >
                      <h4 className="text-gold font-serif text-sm mb-1">{loc.name}</h4>
                      <p className="text-xs text-ivory/70">{loc.city}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* List Side */}
          <div className="flex flex-col gap-4">
            {locations.map((loc) => (
              <div
                key={loc.id}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${activeLocation === loc.id
                  ? 'border-gold bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                  : 'border-white/5 bg-surface hover:border-gold/30'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-full transition-colors ${activeLocation === loc.id ? 'bg-gold text-charcoal' : 'bg-charcoal text-gold'}`}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl text-ivory">{loc.name}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-gold px-2 py-1 rounded bg-gold/10">{loc.city}</span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${activeLocation === loc.id ? 'text-ivory/90' : 'text-muted'}`}>
                      {loc.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
