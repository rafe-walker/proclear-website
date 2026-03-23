'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Camera, Clock, DollarSign, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Bonded & Insured',
    description: 'Full liability coverage and bonding protects you and your properties. We meet all insurance requirements for government and REO contracts.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most jobs completed within 48 hours of approval. We understand that vacant properties cost money every day they sit — speed matters.',
  },
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'Every job includes before-and-after photo reports. Asset managers and servicers get the documentation they need for compliance and records.',
  },
  {
    icon: Leaf,
    title: 'Eco-Responsible Disposal',
    description: 'We donate usable items to local charities and recycle wherever possible. Items only go to waste management as a last resort.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. Volume discounts available for asset managers and property management companies with recurring needs.',
  },
  {
    icon: MapPin,
    title: 'Arizona Born & Based',
    description: 'Locally owned and operated. We know the Arizona market, climate challenges, and what it takes to keep properties in top shape across the state.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">Why ProClear</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto">
            We&apos;re not a faceless national chain. ProClear Solutions is a local Arizona
            company that takes personal pride in every property we touch.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">{reason.title}</h3>
                <p className="text-sm text-brand-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
