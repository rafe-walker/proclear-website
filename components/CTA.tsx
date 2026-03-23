'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Your Property
            <br />
            <span className="text-brand-orange">Cleared & Market-Ready?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a single unit or a portfolio of properties, we&apos;re bonded, insured,
            and ready to handle your property turnover today. Free quotes — no obligation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-lg hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl"
            >
              <FileText className="w-5 h-5" />
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15207292974"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              (520) 729-2974
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
