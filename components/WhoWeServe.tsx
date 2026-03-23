'use client';

import { motion } from 'framer-motion';
import { Building2, Landmark, Users, Home } from 'lucide-react';

const clients = [
  {
    icon: Landmark,
    title: 'Government & GSE',
    subtitle: 'Fannie Mae, Freddie Mac, HUD',
    description: 'We maintain compliance with strict agency guidelines for debris removal, property securing, and preservation standards on government-backed foreclosure properties.',
  },
  {
    icon: Building2,
    title: 'REO & Asset Managers',
    subtitle: 'Banks, Servicers, Private REO',
    description: 'Reliable vendor support for asset management companies handling bank-owned portfolios. Fast turnarounds, photo documentation, and consistent work order completion.',
  },
  {
    icon: Users,
    title: 'Land Management Companies',
    subtitle: 'Property Management Firms',
    description: 'Ongoing maintenance contracts for companies managing large property portfolios. Scheduled services, responsive emergency support, and volume pricing.',
  },
  {
    icon: Home,
    title: 'Individual Landlords',
    subtitle: 'Property Owners & Investors',
    description: 'Turnover services between tenants — cleanouts, repairs, yard work, and lock changes. We help landlords minimize vacancy time and maximize property value.',
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">Who We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Trusted by Asset Managers, Government Agencies & Property Owners
            </h2>
            <p className="text-lg text-brand-gray-500 mb-8">
              Whether you manage a portfolio of hundreds of REO properties or need a single rental
              unit turned over, ProClear Solutions delivers the same level of professionalism,
              speed, and accountability.
            </p>

            <div className="bg-brand-navy rounded-xl p-6">
              <p className="text-white/90 text-sm leading-relaxed">
                <span className="text-brand-orange font-semibold">&quot;We work with property managers and asset management
                companies to ensure properties meet Fannie Mae, Freddie Mac, and HUD standards
                for resale or rental.&quot;</span>
              </p>
              <p className="text-white/60 text-xs mt-3">— Our commitment to compliance and quality</p>
            </div>
          </motion.div>

          {/* Right - Client cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200 hover:border-brand-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-brand-sky rounded-lg flex items-center justify-center mb-3">
                  <client.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-brand-navy text-sm mb-0.5">{client.title}</h3>
                <p className="text-xs text-brand-orange font-medium mb-2">{client.subtitle}</p>
                <p className="text-xs text-brand-gray-500 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
