'use client';

import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Contact Us',
    description: 'Call, email, or fill out our online form. Tell us about the property, location, and what services you need. We respond within 24 hours.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Free Estimate',
    description: 'We assess the scope of work and provide a detailed, no-obligation quote. For REO clients, we can work directly from your work order system.',
  },
  {
    icon: Calendar,
    step: '03',
    title: 'Schedule & Execute',
    description: 'Once approved, we schedule the work and get it done — typically within 48 hours. Our crews arrive on time, every time.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Inspect & Report',
    description: 'We complete photo-documented verification of all work performed. Properties are left broom-clean, secured, and ready for listing or occupancy.',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Fast, Professional
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We&apos;ve streamlined our process so you can go from first call to completed job
            as quickly as possible. No surprises, no hidden fees.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-white/20" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-5">
                <step.icon className="w-8 h-8 text-brand-orange" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
