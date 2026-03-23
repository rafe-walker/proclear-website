'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  'Foreclosure Cleanouts',
  'Trash-Out Services',
  'Yard & Landscape Maintenance',
  'Lock Changes & Securing',
  'Handyman & Repairs',
  'Property Inspections',
  'Paint & Touch-Ups',
  'Winterization & De-Winterization',
];

export default function ContactClient() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFormStatus('loading');
    // Formspree handles the submission automatically
    // This will naturally reload or redirect based on Formspree's configuration
  };

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
              Get in Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to discuss your property preservation needs? Contact us today for a free quote. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-service"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">Phone</h3>
                    <a
                      href="tel:+15207292974"
                      className="text-brand-blue hover:text-brand-blue-light font-semibold"
                    >
                      (520) 729-2974
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-service"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">Email</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:contact@proclearsolutionsaz.com"
                        className="block text-brand-blue hover:text-brand-blue-light font-semibold text-sm"
                      >
                        contact@proclearsolutionsaz.com
                      </a>
                      <a
                        href="mailto:business@proclearsolutionsaz.com"
                        className="block text-brand-blue hover:text-brand-blue-light font-semibold text-sm"
                      >
                        business@proclearsolutionsaz.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-service"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">Location</h3>
                    <p className="text-brand-gray-600">Tucson, Arizona</p>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-service"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">Hours</h3>
                    <div className="text-sm text-brand-gray-600 space-y-1">
                      <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                      <p>Sat: 8:00 AM - 2:00 PM</p>
                      <p className="text-brand-blue font-semibold mt-2">
                        Emergency: Available
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-service"
              >
                <h2 className="text-2xl font-bold text-brand-navy mb-2">
                  Free Quote Request
                </h2>
                <p className="text-brand-gray-600 mb-8">
                  Tell us about your project and we'll get back to you with a detailed estimate.
                </p>

                <form
                  action="https://formspree.io/f/xojkopjv"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-brand-navy mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-brand-navy mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-brand-navy mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="(520) 729-2974"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-brand-navy mb-2"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-brand-navy mb-2"
                    >
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="123 Main St, Tucson, AZ 85701"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-brand-navy mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                      placeholder="Tell us about your project, the property condition, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-lg hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        Get Your Free Quote
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Fast Response, Every Time
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              We understand that in property preservation, speed matters. That's why we aim to respond to all inquiries within one business day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Phone Inquiry',
                description: 'Call us during business hours for immediate assistance on simple questions.',
                time: 'Same day',
              },
              {
                title: 'Form Submission',
                description: "Submit your project details and we'll prepare a detailed quote for you.",
                time: '1 business day',
              },
              {
                title: 'Emergency Request',
                description: 'Need urgent service? We have emergency availability for urgent projects.',
                time: 'ASAP',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="card-service text-center"
              >
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-brand-orange">
                  {item.time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
