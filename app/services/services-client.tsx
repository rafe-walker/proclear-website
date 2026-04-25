'use client';

import { motion } from 'framer-motion';
import {
  Trash2,
  Scissors,
  Lock,
  Wrench,
  Clipboard,
  Brush,
  Snowflake,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Foreclosure Cleanouts',
    href: '/services/foreclosure-cleanouts',
    icon: Trash2,
    description:
      'Complete removal of all personal property, debris, and refuse from foreclosed properties. We handle everything from appliances to construction waste, leaving your property broom-clean and ready for resale.',
    bullets: [
      'Thorough removal of all contents',
      'Debris and junk removal',
      'Appliance disconnection & removal',
      'Recycling & donation coordination',
      'Photo documentation',
      'Quick turnaround available',
    ],
  },
  {
    id: 2,
    title: 'Trash-Out Services',
    href: '/services/trash-out-services',
    icon: Trash2,
    description:
      'Professional removal of discarded items, garbage, and unwanted materials. Perfect for preparing properties for marketing or occupancy.',
    bullets: [
      'Interior & exterior trash removal',
      'Bulk waste hauling',
      'Hazardous material assessment',
      'Debris box rental coordination',
      'Same-day service available',
      'Compliant disposal',
    ],
  },
  {
    id: 3,
    title: 'Yard & Landscape Maintenance',
    href: '/services/yard-maintenance',
    icon: Scissors,
    description:
      'Comprehensive outdoor maintenance to enhance curb appeal and property value. From lawn care to landscaping improvements.',
    bullets: [
      'Lawn mowing & trimming',
      'Tree & shrub maintenance',
      'Weed removal & edging',
      'Debris cleanup',
      'Overgrowth clearing',
      'Desert landscaping expertise',
    ],
  },
  {
    id: 4,
    title: 'Lock Changes & Securing',
    href: '/services/lock-changes',
    icon: Lock,
    description:
      'Professional lock changes and property securing services to maintain security and prevent unauthorized access. Quick response times.',
    bullets: [
      'Door lock replacement',
      'Rekeying services',
      'Window securing',
      'Boarded-up services',
      'Security door installation',
      'Emergency lockout response',
    ],
  },
  {
    id: 5,
    title: 'Handyman & Repairs',
    href: '/services/handyman-repairs',
    icon: Wrench,
    description:
      'General maintenance and repairs to bring properties into rentable or saleable condition. Licensed and skilled technicians.',
    bullets: [
      'Drywall repair & patching',
      'Door & frame repair',
      'Water damage assessment',
      'Minor plumbing fixes',
      'Cabinet repairs',
      'General maintenance',
    ],
  },
  {
    id: 6,
    title: 'Property Inspections',
    href: '/services/property-inspections',
    icon: Clipboard,
    description:
      'Detailed property assessments to identify condition issues, damage, and maintenance needs before listing or occupancy.',
    bullets: [
      'Comprehensive walkthroughs',
      'Photo & video documentation',
      'Damage assessment reports',
      'Condition analysis',
      'Maintenance recommendations',
      'REO compliance checks',
    ],
  },
  {
    id: 7,
    title: 'Paint & Touch-Ups',
    href: '/services/paint-touch-ups',
    icon: Brush,
    description:
      'Professional interior and exterior painting to refresh property appearance and increase marketability. Quality finishes.',
    bullets: [
      'Interior wall painting',
      'Exterior painting',
      'Trim & accent work',
      'Cabinet refinishing',
      'Stain coverage',
      'Color consultation',
    ],
  },
  {
    id: 8,
    title: 'Winterization & De-Winterization',
    href: '/services/winterization',
    icon: Snowflake,
    description:
      'Seasonal property preparation and restoration. Winterization protects from cold damage; de-winterization readies properties for occupancy.',
    bullets: [
      'Pipe insulation & winterization',
      'Water line shutoff & drainage',
      'Thermostat winterization',
      'System reactivation',
      'Spring readiness checks',
      'Seasonal compliance',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesClient() {
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
              Our Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Complete property preservation solutions from foreclosure cleanouts to seasonal maintenance. We handle every detail so you can focus on your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="card-service"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-brand-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us for These Services */}
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
              Why Clients Choose ProClear
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Across all our services, you'll find the same commitment to quality, reliability, and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bonded & Insured',
                description:
                  'Full liability coverage and bonding for complete peace of mind on every project.',
              },
              {
                title: 'Arizona Expertise',
                description:
                  'Deep understanding of Arizona properties, climate, and industry requirements.',
              },
              {
                title: 'Fast Turnaround',
                description:
                  'Quick response times and efficient execution to get properties market-ready.',
              },
              {
                title: 'Professional Crews',
                description:
                  'Trained, background-checked teams that treat your property with respect.',
              },
              {
                title: 'Transparent Pricing',
                description:
                  'Upfront quotes with no hidden fees. You know the cost before we start.',
              },
              {
                title: 'Documentation',
                description:
                  'Detailed photos, reports, and documentation for every project completed.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-3xl mb-3">
                  {idx === 0 && '✓'}
                  {idx === 1 && '🏜️'}
                  {idx === 2 && '⚡'}
                  {idx === 3 && '👥'}
                  {idx === 4 && '💰'}
                  {idx === 5 && '📸'}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready for a Free Quote?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your property preservation needs. We'll provide a detailed estimate with no obligation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-lg hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+15207292974"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
              >
                (520) 729-2974
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
