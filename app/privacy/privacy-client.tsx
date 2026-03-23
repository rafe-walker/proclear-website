'use client';

import { motion } from 'framer-motion';
import { Mail, Shield, Lock } from 'lucide-react';

export default function PrivacyClient() {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as:

• Contact information (name, email, phone number, address)
• Property information (address, property type, condition)
• Service preferences and requirements
• Communication history with our team
• Payment and billing information

We also collect information automatically when you use our website, including:
• Device and browser information
• IP address and location data
• Pages visited and time spent
• Referrer information`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

• Provide and improve our property preservation services
• Respond to inquiries and communicate with you
• Generate quotes and service estimates
• Process payments and manage billing
• Comply with legal and regulatory requirements
• Send updates about our services (with your consent)
• Analyze usage patterns to improve our website and services
• Prevent fraud and maintain security

Your information is used solely for legitimate business purposes related to providing property preservation services.`,
    },
    {
      title: 'Information Sharing & Third Parties',
      content: `We may share your information with:

• Service providers who assist us in operations (contractors, payment processors)
• Legal authorities when required by law
• Insurance companies and bonding agencies
• Property managers and clients you authorize
• Business partners necessary to complete your requested services

We do not sell, rent, or trade your personal information to third parties for marketing purposes. Any third-party sharing is limited to what is necessary to provide our services or comply with legal obligations.`,
    },
    {
      title: 'Data Security',
      content: `We take data security seriously and implement appropriate measures to protect your information:

• Secure transmission of sensitive data using encryption
• Access controls and authentication
• Regular security reviews and updates
• Limited employee access to personal information
• Compliance with industry standards for data protection

However, no security system is completely impenetrable. While we strive to protect your information, we cannot guarantee absolute security.`,
    },
    {
      title: 'Cookies & Tracking',
      content: `Our website uses cookies and similar technologies to:

• Enhance your browsing experience
• Remember your preferences
• Analyze site usage and performance
• Provide relevant content and advertising

You can control cookie settings in your browser. Disabling cookies may limit functionality of certain website features. We also respect Do Not Track signals when present.`,
    },
    {
      title: 'Your Rights & Choices',
      content: `You have the right to:

• Access the personal information we have about you
• Request correction of inaccurate information
• Request deletion of your information (subject to legal requirements)
• Opt-out of marketing communications
• Request information about our data practices

To exercise these rights, contact us using the information below. We will respond to requests within 30 days as required by law.`,
    },
    {
      title: 'Children\'s Privacy',
      content: `Our website and services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete it promptly.`,
    },
    {
      title: 'California & Arizona Privacy Rights',
      content: `If you are a California or Arizona resident, you may have additional privacy rights under state law. These may include rights to know what personal information is collected, used, and shared. To exercise these rights or for more information, please contact us.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by updating the effective date and posting the revised policy on our website.`,
    },
  ];

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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how ProClear Solutions protects and uses your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Effective Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-6 bg-white rounded-lg border border-brand-gray-200"
          >
            <p className="text-brand-gray-700">
              <span className="font-semibold text-brand-navy">Effective Date:</span>{' '}
              March 2026
            </p>
            <p className="text-sm text-brand-gray-500 mt-2">
              Last Updated: March 22, 2026
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-brand-navy mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-brand-gray-700 leading-relaxed">
              ProClear Solutions LLC ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us for services, or interact with us in any other way.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {section.title}
                </h3>
                <p className="text-brand-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact for Privacy Concerns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 border-2 border-brand-blue/20 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-brand-navy">
                Contact Us About Privacy
              </h3>
            </div>
            <p className="text-brand-gray-700 mb-6 leading-relaxed">
              If you have questions about this Privacy Policy, your information, or our privacy practices, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Email</p>
                  <a
                    href="mailto:contact@proclearsolutionsaz.com"
                    className="text-brand-blue hover:text-brand-blue-light"
                  >
                    contact@proclearsolutionsaz.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Company
                  </p>
                  <p className="text-brand-gray-700">
                    ProClear Solutions LLC
                  </p>
                  <p className="text-brand-gray-700">Tucson, Arizona</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-brand-offwhite rounded-lg border border-brand-gray-200"
          >
            <h3 className="text-lg font-bold text-brand-navy mb-4">
              Data Retention
            </h3>
            <p className="text-brand-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. The retention period may vary depending on the type of information and the purpose for which we process it. You may request deletion of your information subject to legal and contractual obligations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Info */}
      <section className="py-12 bg-white border-t border-brand-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-brand-gray-500">
            This Privacy Policy is provided in compliance with applicable data protection and privacy laws. By using our website and services, you agree to the terms of this Privacy Policy.
          </p>
        </div>
      </section>
    </>
  );
}
