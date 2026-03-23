'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const areas = [
  { city: 'Tucson', region: 'Southern Arizona' },
  { city: 'Phoenix', region: 'Central Arizona' },
  { city: 'Mesa', region: 'East Valley' },
  { city: 'Scottsdale', region: 'East Valley' },
  { city: 'Chandler', region: 'East Valley' },
  { city: 'Gilbert', region: 'East Valley' },
  { city: 'Tempe', region: 'East Valley' },
  { city: 'Glendale', region: 'West Valley' },
  { city: 'Peoria', region: 'West Valley' },
  { city: 'Surprise', region: 'West Valley' },
  { city: 'Casa Grande', region: 'Pinal County' },
  { city: 'Marana', region: 'Southern Arizona' },
  { city: 'Oro Valley', region: 'Southern Arizona' },
  { city: 'Sierra Vista', region: 'Cochise County' },
  { city: 'Flagstaff', region: 'Northern Arizona' },
  { city: 'Prescott', region: 'Central Highlands' },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 lg:p-12 text-center"
          >
            <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Serving All of Arizona</h3>
            <p className="text-white/70 mb-6">
              From Flagstaff to Sierra Vista, Phoenix metro to Tucson — we cover the entire state
              with reliable, fast property preservation services.
            </p>
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-brand-orange font-bold text-lg">Tucson</p>
                <p className="text-white/60 text-xs">HQ — Same-day available</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-brand-orange font-bold text-lg">Phoenix</p>
                <p className="text-white/60 text-xs">Full metro coverage</p>
              </div>
            </div>
          </motion.div>

          {/* Right - City list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">Coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                Service Areas
              </h2>
              <p className="text-lg text-brand-gray-500 mb-8">
                We maintain active crews across Arizona&apos;s major markets. Don&apos;t see your area?
                Contact us — we likely cover it or can arrange service.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-2">
              {areas.map((area, i) => (
                <motion.div
                  key={area.city}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.02 }}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-brand-navy">{area.city}</span>
                    <span className="text-xs text-brand-gray-500 ml-1.5">({area.region})</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6"
            >
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all text-sm"
              >
                View Full Service Area Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
