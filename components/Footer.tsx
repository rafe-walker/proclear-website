'use client';

import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Foreclosure Cleanouts', href: '/services' },
    { name: 'Trash-Out Services', href: '/services' },
    { name: 'Yard Maintenance', href: '/services' },
    { name: 'Lock Changes', href: '/services' },
    { name: 'Handyman Repairs', href: '/services' },
    { name: 'Property Inspections', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white leading-tight block">ProClear</span>
                <span className="text-xs text-white/50 leading-tight block -mt-0.5">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Arizona&apos;s trusted property preservation company. Bonded, insured, and
              ready to handle your property turnover.
            </p>
            <div className="space-y-3">
              <a href="tel:+15207292974" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-orange" />
                (520) 729-2974
              </a>
              <a href="mailto:contact@proclearsolutionsaz.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-orange" />
                contact@proclearsolutionsaz.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-brand-orange" />
                Tucson, Arizona
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Credentials</h3>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-xs text-brand-orange font-semibold mb-1">Bonded & Insured</p>
                <p className="text-xs text-white/50">Full liability coverage for all projects</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-xs text-brand-orange font-semibold mb-1">Arizona Licensed</p>
                <p className="text-xs text-white/50">Registered business in the state of AZ</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-xs text-brand-orange font-semibold mb-1">GSE Compliant</p>
                <p className="text-xs text-white/50">Meets Fannie Mae & Freddie Mac standards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} ProClear Solutions LLC. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              A{' '}
              <a href="https://stormhavenenterprises.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                Stormhaven Enterprises
              </a>{' '}
              Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
