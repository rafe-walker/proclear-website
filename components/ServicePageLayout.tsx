'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface ServicePageLayoutProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  overview: string;
  features: { title: string; description: string }[];
  process: { step: string; description: string }[];
  deliverables?: string[];
  equipment?: string[];
  idealFor?: string[];
}

export default function ServicePageLayout({
  icon: Icon,
  title,
  subtitle,
  overview,
  features,
  process,
  deliverables,
  equipment,
  idealFor,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Overview</h2>
            <p className="text-brand-gray-600 leading-relaxed text-lg">{overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-navy mb-10"
          >
            What We Cover
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                viewport={{ once: true }}
                className="card-service"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-brand-navy">{feature.title}</h3>
                </div>
                <p className="text-brand-gray-600 text-sm leading-relaxed pl-8">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-navy mb-10"
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 border border-brand-gray-200 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex items-center justify-center text-white font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{step.step}</h3>
                  <p className="text-brand-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Columns */}
      {(deliverables || equipment || idealFor) && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {deliverables && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {equipment && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Tools & Equipment</h3>
                  <ul className="space-y-3">
                    {equipment.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {idealFor && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Ideal For</h3>
                  <ul className="space-y-3">
                    {idealFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate on {title.toLowerCase()} services. Fast response, competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-lg hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+15207292974"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" /> (520) 729-2974
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
