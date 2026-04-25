'use client';

import { motion } from 'framer-motion';
import {
  Trash2, Lock, Wrench, Trees, Truck, Home, Paintbrush, Droplets, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Trash2,
    title: 'Foreclosure Cleanouts',
    href: '/services/foreclosure-cleanouts',
    description: 'Complete property clearing including all debris, personal belongings, and abandoned items. We leave units broom-clean and list-ready for agents and asset managers.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Truck,
    title: 'Trash-Out Services',
    href: '/services/trash-out-services',
    description: 'Full junk removal and haul-away for REO properties. We handle bulk items, appliances, furniture, and general waste — donating reusable items whenever possible.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Trees,
    title: 'Yard & Landscape Maintenance',
    href: '/services/yard-maintenance',
    description: 'Mowing, edging, trimming, weed removal, and desert landscaping cleanup. We bring curb appeal back to neglected properties in the Arizona heat.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Lock,
    title: 'Lock Changes & Securing',
    href: '/services/lock-changes',
    description: 'Deadbolt installs, re-keys, padlocks, and full property securing. We ensure vacant properties are safe and compliant with lender requirements.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Handyman & Repairs',
    href: '/services/handyman-repairs',
    description: 'Minor plumbing, electrical, drywall patches, fixture replacements, and general maintenance to get properties up to code and market-ready.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Home,
    title: 'Property Inspections',
    href: '/services/property-inspections',
    description: 'Detailed photo-documented inspections for asset managers and servicers. We report property condition, occupancy status, and maintenance needs.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Paintbrush,
    title: 'Paint & Touch-Ups',
    href: '/services/paint-touch-ups',
    description: 'Interior and exterior touch-up painting, wall patching, and cosmetic repairs that maximize property appeal for listing and resale.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Droplets,
    title: 'Winterization & De-Winterization',
    href: '/services/winterization',
    description: 'Protect plumbing and HVAC systems from damage during vacancy. We handle full winterization and seasonal preparation for Arizona properties.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            Comprehensive Property Preservation
          </h2>
          <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto">
            From initial cleanout to final turnover, we handle every step of preparing
            your property for market — quickly, professionally, and at competitive rates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="card-service group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-brand-gray-500 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all text-sm mt-4"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
