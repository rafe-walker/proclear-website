'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const regions = [
  {
    name: 'Tucson Metro',
    description:
      'Our home base and thriving market. Deep roots in Southern Arizona.',
    cities: [
      'Tucson',
      'Marana',
      'Oro Valley',
      'Sahuarita',
      'Green Valley',
      'Vail',
    ],
  },
  {
    name: 'Phoenix Metro',
    description:
      "Arizona's largest metropolitan area. Full coverage across the Valley.",
    cities: [
      'Phoenix',
      'Scottsdale',
      'Mesa',
      'Tempe',
      'Chandler',
      'Gilbert',
      'Glendale',
      'Peoria',
      'Surprise',
      'Avondale',
      'Goodyear',
      'Buckeye',
    ],
  },
  {
    name: 'Central Arizona',
    description:
      'Serving the industrial and agricultural heartland of Arizona.',
    cities: ['Casa Grande', 'Florence', 'Coolidge', 'Eloy'],
  },
  {
    name: 'Northern Arizona',
    description:
      'High elevation properties and resort communities throughout the north.',
    cities: ['Flagstaff', 'Prescott', 'Sedona', 'Cottonwood'],
  },
  {
    name: 'Southern Arizona',
    description:
      'Border region coverage with expertise in diverse property types.',
    cities: ['Sierra Vista', 'Benson', 'Nogales', 'Douglas'],
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

export default function ServiceAreasClient() {
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
              Service Areas
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              ProClear Solutions serves Arizona statewide, from the Phoenix metro to Southern Arizona, and everywhere in between. Wherever your properties are located, we're ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
          >
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-service"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {region.name}
                  </h3>
                </div>

                <p className="text-brand-gray-600 mb-6 leading-relaxed">
                  {region.description}
                </p>

                <div className="border-t border-brand-gray-200 pt-6">
                  <p className="text-sm font-semibold text-brand-navy mb-3">
                    Cities We Serve:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city, cityIdx) => (
                      <span
                        key={cityIdx}
                        className="inline-block px-3 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coverage Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-service bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 border-2 border-brand-blue/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-brand-orange mb-2">5</p>
                <p className="text-brand-navy font-semibold">Regions</p>
                <p className="text-sm text-brand-gray-600">
                  Covering all of Arizona
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-orange mb-2">
                  40+
                </p>
                <p className="text-brand-navy font-semibold">Cities</p>
                <p className="text-sm text-brand-gray-600">
                  From border to mountains
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-orange mb-2">
                  100%
                </p>
                <p className="text-brand-navy font-semibold">Statewide</p>
                <p className="text-sm text-brand-gray-600">
                  Ready to serve you
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We're Everywhere */}
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
              Why ProClear Covers All of Arizona
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Property managers and REO professionals need a partner they can count on, wherever their properties are located.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Local Expertise, Statewide Reach',
                description:
                  "We know the unique characteristics of each Arizona region — from Tucson's desert market to Phoenix's sprawling metro, from Northern Arizona's mountain properties to the border regions. Local knowledge, statewide coverage.",
              },
              {
                title: 'Consistent Quality Everywhere',
                description:
                  'Whether you need service in Flagstaff or Douglas, you get the same high standards, professional crews, and commitment to excellence. Same ProClear Solutions quality, every location.',
              },
              {
                title: 'Flexible, Scalable Operations',
                description:
                  'Managing a single property or a statewide portfolio? We scale to meet your needs. One property or hundreds — we have the capacity and systems to deliver.',
              },
              {
                title: 'Faster Response, Lower Costs',
                description:
                  'With coverage statewide, we minimize travel time and can deploy crews efficiently. That means faster turnarounds and better pricing for you.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details by Region */}
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
              All Services in All Areas
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              No matter which region you operate in, you have access to our complete range of property preservation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Foreclosure Cleanouts',
              'Trash-Out Services',
              'Yard & Landscape Maintenance',
              'Lock Changes & Securing',
              'Handyman & Repairs',
              'Property Inspections',
              'Paint & Touch-Ups',
              'Winterization & De-Winterization',
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                viewport={{ once: true }}
                className="card-service text-center"
              >
                <p className="font-semibold text-brand-navy">{service}</p>
                <p className="text-xs text-brand-gray-500 mt-2">
                  Available in all regions
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Notes */}
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
              Regional Expertise
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Understanding Arizona's diverse markets helps us serve you better.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-service"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Tucson & Southern Arizona
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Experience with diverse property types, strong connections to local property managers, and expertise in both urban and rural markets. Winterization services for mountain properties.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-service"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Phoenix & Central Arizona
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Largest service area with high-volume operations, proven track record with major REO companies, expertise in suburban and commercial property preservation across the Valley.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-service"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Northern Arizona
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Specialized knowledge of mountain properties, seasonal considerations (winterization critical), forest and land management understanding, and experience with vacation properties and resorts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-service"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Border Regions
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Familiar with cross-border considerations, diverse property types and conditions, multilingual crew availability, and expertise in border community property preservation needs.
              </p>
            </motion.div>
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
              Have Properties in Arizona?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              We're ready to serve whatever region you operate in. Contact us today for a free quote on your property preservation needs.
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
                href="tel:+15204025877"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
              >
                (520) 402-5877
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
