'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Award,
  Users,
  Leaf,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description:
      'We show up on time, do the job right, and deliver results you can count on every single time.',
  },
  {
    icon: Leaf,
    title: 'Eco-Responsibility',
    description:
      'We prioritize sustainable practices, proper recycling, and responsible waste management.',
  },
  {
    icon: Award,
    title: 'Compliance',
    description:
      'Full knowledge of Arizona regulations, REO requirements, and industry standards. Always compliant.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description:
      'Quick turnarounds without sacrificing quality. Get your properties market-ready faster.',
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About ProClear Solutions
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Arizona's trusted property preservation company, committed to reliability, compliance, and getting properties market-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-brand-gray-700 leading-relaxed text-lg">
              <p>
                ProClear Solutions was founded in Tucson, Arizona with a simple mission: to provide property preservation services that property managers, REO professionals, and landlords could trust. We started small, but with big ambitions and an unwavering commitment to quality.
              </p>
              <p>
                What began as a local Tucson operation has grown to serve properties throughout Arizona — from Phoenix and Scottsdale to Flagstaff and Southern Arizona. But no matter how much we&apos;ve grown, our core values haven&apos;t changed: reliability, professionalism, and going above and beyond for every client.
              </p>
              <p>
                Today, ProClear Solutions is proud to operate under Stormhaven Enterprises LLC, a forward-thinking property management and preservation company. We&apos;re bonded and insured, Arizona-based, and deeply committed to the success of our clients&apos; properties across every market we serve.
              </p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 border-2 border-brand-blue/20 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-brand-gray-700 leading-relaxed">
              To deliver exceptional property preservation services that exceed expectations, maintain the highest industry standards, and help our clients achieve their business goals across Arizona. We are committed to reliability, responsibility, and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these four fundamental principles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="card-service text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust ProClear */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Why Clients Trust ProClear
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart in the property preservation industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Fully Bonded and Insured for complete protection',
              'Arizona-Based with statewide operations',
              'Experienced teams trained in REO standards',
              'Fast turnarounds without compromising quality',
              'Transparent pricing with no hidden fees',
              'Detailed documentation on every project',
              'Expertise across all property types',
              'Responsive customer service and communication',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4"
              >
                <CheckCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <span className="text-lg text-brand-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Company Details
              </h3>
              <ul className="space-y-4 text-brand-gray-700">
                <li>
                  <span className="font-semibold text-brand-navy">Parent Company:</span>
                  <br />
                  Stormhaven Enterprises LLC
                </li>
                <li>
                  <span className="font-semibold text-brand-navy">
                    Headquarters:
                  </span>
                  <br />
                  Tucson, Arizona
                </li>
                <li>
                  <span className="font-semibold text-brand-navy">Service Area:</span>
                  <br />
                  Statewide Arizona (Phoenix, Tucson, Northern Arizona, and beyond)
                </li>
                <li>
                  <span className="font-semibold text-brand-navy">Bonded:</span>
                  <br />
                  Yes
                </li>
                <li>
                  <span className="font-semibold text-brand-navy">Insured:</span>
                  <br />
                  Yes
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Get to Know Us
              </h3>
              <p className="text-brand-gray-700 leading-relaxed mb-6">
                We&apos;re not just a property preservation company — we&apos;re your partner in property management. We understand the challenges you face, we know Arizona&apos;s market, and we&apos;re committed to delivering solutions that work.
              </p>
              <p className="text-brand-gray-700 leading-relaxed">
                Whether you manage a single property or a large portfolio, ProClear Solutions is ready to help. Let&apos;s talk about how we can support your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-navy relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Contact ProClear Solutions today to discuss your property preservation needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-lg hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
