'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Recycle, Award } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Bonded & Insured', value: 'Fully Licensed' },
  { icon: Clock, label: 'Response Time', value: '24-48 Hours' },
  { icon: Recycle, label: 'Eco-Friendly', value: 'Donate & Recycle' },
  { icon: Award, label: 'Service Area', value: 'All of Arizona' },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border border-brand-gray-200 p-6 lg:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray-500 uppercase tracking-wider font-medium">{item.label}</p>
                  <p className="text-sm font-bold text-brand-navy">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
