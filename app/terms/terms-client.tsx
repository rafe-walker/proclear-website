'use client';

import { motion } from 'framer-motion';
import { AlertCircle, FileText, Scale } from 'lucide-react';

export default function TermsClient() {
  const sections = [
    {
      title: 'Service Scope',
      content: `ProClear Solutions LLC provides property preservation and maintenance services as described on our website and agreed upon in writing. Our services include but are not limited to:

• Foreclosure cleanouts and trash-outs
• Yard and landscape maintenance
• Lock changes and property securing
• Handyman and repair services
• Property inspections
• Painting and touch-ups
• Winterization and de-winterization services

The specific scope of work will be defined in the service agreement or quote provided to you. We will perform services in a professional and workmanlike manner consistent with industry standards.`,
    },
    {
      title: 'Estimates & Pricing',
      content: `• All estimates are valid for thirty (30) days unless otherwise stated
• Estimates are based on the property condition at the time of assessment
• Additional charges may apply if conditions are worse than initially assessed or if additional work is requested
• Pricing is subject to Arizona sales tax where applicable
• We provide detailed quotes before commencing work
• Emergency or rush services may incur additional fees
• Travel charges apply for service areas outside our primary coverage zones`,
    },
    {
      title: 'Scheduling & Services',
      content: `• Service dates and times are scheduled based on availability and operational needs
• We make reasonable efforts to meet requested dates, but scheduling is subject to confirmation
• The client is responsible for providing property access at scheduled times
• If access is not available at the scheduled time, rescheduling fees may apply
• We reserve the right to reschedule if weather or other conditions prevent safe completion of work
• For emergency or same-day services, availability is not guaranteed`,
    },
    {
      title: 'Payment Terms',
      content: `• Payment terms will be specified in the service agreement
• Invoices are due within the timeframe specified (typically 30 days)
• A security deposit or prepayment may be required for larger projects
• Late payments may incur interest charges at the rate of 1.5% per month
• We accept payment via check, ACH transfer, credit card, and other agreed methods
• All costs are exclusive of applicable taxes unless otherwise stated
• Payment disputes must be reported within 10 days of invoice receipt`,
    },
    {
      title: 'Liability Limitations',
      content: `ProClear Solutions LLC liability is limited as follows:

• Our liability for any claim arising from our services is limited to the amount paid for the specific service in question
• We are not liable for consequential, indirect, special, or punitive damages
• We are not responsible for damage to adjacent properties or pre-existing conditions not caused by our work
• Property owners/managers are responsible for securing and protecting property prior to and after our services
• We are not liable for items left in properties or damage to items we do not remove
• Insurance coverage limits (bonding and liability) represent the maximum liability for any claim`,
    },
    {
      title: 'Warranty on Work',
      content: `• We warrant that all work performed will be done in a professional and workmanlike manner
• Painting services: Warranty against peeling, cracking, or failure due to defective application for 12 months
• General repairs and maintenance: Warranty against defective workmanship for 30 days from completion
• Labor only services: Covered under warranty; materials supplied by others are not warranted
• Warranty claims must be reported within 30 days of service completion
• Warranty does not cover damage from weather, normal wear, or misuse
• We reserve the right to correct any warranty issues at our discretion`,
    },
    {
      title: 'Dispute Resolution',
      content: `• Any disputes arising from these terms or our services will be governed by the laws of the State of Arizona
• Disputes will be resolved through good-faith negotiation and discussion
• If negotiation fails, disputes may be submitted to binding arbitration
• Arbitration will be conducted under the rules of the American Arbitration Association
• Each party bears its own legal fees unless otherwise awarded
• Claims must be filed within two (2) years of the incident giving rise to the claim
• Small claims court remains available for claims within its jurisdiction`,
    },
    {
      title: 'Governing Law & Jurisdiction',
      content: `• These Terms of Service are governed by the laws of the State of Arizona
• Any legal action or proceeding must be brought in the state or federal courts located in Arizona
• Both parties consent to the exclusive jurisdiction of Arizona courts
• These terms constitute the entire agreement between the parties
• No modification of these terms is valid unless made in writing and signed by both parties`,
    },
    {
      title: 'Bonding & Insurance',
      content: `• ProClear Solutions LLC is bonded and insured as required by Arizona law
• General liability insurance provides coverage for bodily injury and property damage
• Workers' compensation insurance covers our employees
• Insurance certificates are available upon request
• Clients remain responsible for their own property insurance
• Our insurance does not cover damage from causes beyond our control`,
    },
    {
      title: 'Property Access & Responsibility',
      content: `• You are responsible for providing safe access to the property
• You must disclose any hazardous conditions (asbestos, lead, mold, etc.)
• You are responsible for obtaining necessary permits or permissions
• We are not responsible for damage caused by property hazards you failed to disclose
• You must ensure utilities are accessible or properly shut off as needed
• You remain liable for any trespassing or legal issues related to property access`,
    },
    {
      title: 'Changes & Cancellations',
      content: `• Changes to the scope of work must be authorized in writing before implementation
• Change orders will be billed at the rates specified in the original quote
• Cancellations made more than 48 hours before service receive a full refund of deposits
• Cancellations made within 48 hours may be subject to a cancellation fee
• If we must cancel due to our operational issues, you will receive a full refund
• Reschedules are subject to availability`,
    },
    {
      title: 'Contractor Independence',
      content: `• ProClear Solutions LLC may utilize subcontractors to perform portions of work
• Subcontractors are independent contractors and not our employees
• We are responsible for the quality of all subcontractor work
• Clients may not direct subcontractors; all communication goes through ProClear Solutions
• Subcontractor rates are included in our quoted pricing`,
    },
    {
      title: 'Indemnification',
      content: `• You agree to indemnify and hold harmless ProClear Solutions LLC from any claims arising from:
  - Property conditions you failed to disclose
  - Your breach of these terms
  - Your negligence or misuse of the property
  - Third-party claims related to the property or its use
• This indemnification applies to legal fees, damages, and costs incurred in defense`,
    },
    {
      title: 'Amendments',
      content: `• ProClear Solutions LLC reserves the right to amend these Terms of Service at any time
• Changes will be effective upon posting to our website
• Continued use of our services constitutes acceptance of amended terms
• We will make reasonable efforts to notify clients of material changes`,
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
              Terms of Service
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please read our terms carefully. By using our services, you agree to these terms and conditions.
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
              Agreement to Terms
            </h2>
            <p className="text-brand-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") are a legal agreement between ProClear Solutions LLC ("Company," "we," "us," "our") and you ("Client," "you," "your"). By requesting our services, entering into a service agreement, or using our services in any way, you agree to be bound by these Terms.
            </p>
            <p className="text-brand-gray-700 leading-relaxed">
              If you do not agree to these Terms, do not use our services. We reserve the right to refuse service to any party that does not accept these terms.
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

          {/* Contact for Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 border-2 border-brand-blue/20 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-brand-navy">
                Questions About These Terms?
              </h3>
            </div>
            <p className="text-brand-gray-700 mb-6 leading-relaxed">
              If you have questions about these Terms of Service or your service agreement, please contact us:
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-brand-navy">Email</p>
                <a
                  href="mailto:contact@proclearsolutionsaz.com"
                  className="text-brand-blue hover:text-brand-blue-light"
                >
                  contact@proclearsolutionsaz.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">Phone</p>
                <a
                  href="tel:+15205551234"
                  className="text-brand-blue hover:text-brand-blue-light"
                >
                  (520) 555-1234
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">Company</p>
                <p className="text-brand-gray-700">ProClear Solutions LLC</p>
                <p className="text-brand-gray-700">Tucson, Arizona</p>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-amber-50 border-l-4 border-brand-orange rounded-lg"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-navy mb-2">Important Notice</h3>
                <p className="text-brand-gray-700 text-sm leading-relaxed">
                  These Terms of Service work in conjunction with any written service agreement, proposal, or quote provided to you. In the event of a conflict, the specific service agreement will govern. If you have a signed service agreement, those terms take precedence over this general Terms of Service page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Arizona Law Notice */}
      <section className="py-12 bg-white border-t border-brand-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">
                    Governing Law
                  </h3>
                  <p className="text-sm text-brand-gray-600">
                    These Terms of Service are governed by and construed in accordance with the laws of the State of Arizona.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">
                    Entire Agreement
                  </h3>
                  <p className="text-sm text-brand-gray-600">
                    These Terms, along with any written service agreement, constitute the entire agreement between you and ProClear Solutions LLC.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
