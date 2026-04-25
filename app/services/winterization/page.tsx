import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Winterization & De-Winterization | ProClear Solutions',
  description: 'Professional winterization and de-winterization services for vacant properties in Arizona. Protect plumbing and HVAC systems from damage during vacancy.',
  alternates: {
    canonical: '/services/winterization',
  },
};

export default function WinterizationPage() {
  return (
    <ServicePageLayout
      iconName="Snowflake"
      title="Winterization & De-Winterization"
      subtitle="Seasonal property protection and system reactivation for vacant properties."
      overview="Even in Arizona, vacant properties need seasonal preparation to prevent costly damage to plumbing, HVAC, and water systems. Our winterization services protect pipes, fixtures, and appliances from freezing and deterioration during vacancy. When a property is ready for occupancy or sale, our de-winterization crews reactivate all systems, test for leaks, and confirm everything is operational. We follow industry-standard procedures that meet servicer and lender requirements."
      features={[
        { title: 'Pipe Insulation & Protection', description: 'Exposed pipes are insulated and protected against freezing temperatures and thermal cycling damage.' },
        { title: 'Water Line Shutoff & Drainage', description: 'Main water supply is shut off and all lines, fixtures, and traps are drained to prevent freeze damage.' },
        { title: 'Antifreeze Treatment', description: 'Non-toxic antifreeze is applied to all drain traps, toilets, and P-traps to prevent residual water from freezing.' },
        { title: 'HVAC Winterization', description: 'Heating and cooling systems are properly shut down and protected for the vacancy period.' },
        { title: 'System Reactivation', description: 'De-winterization includes turning on water, testing all fixtures, checking for leaks, and restoring HVAC operation.' },
        { title: 'Seasonal Compliance', description: 'All work meets servicer-specific winterization and de-winterization standards with proper documentation.' },
      ]}
      process={[
        { step: 'Work Order', description: 'We receive your winterization or de-winterization request with property details.' },
        { step: 'Site Visit', description: 'A technician visits the property to assess systems and complete the winterization or reactivation.' },
        { step: 'System Work', description: 'All plumbing, HVAC, and water systems are winterized or de-winterized per standard procedures.' },
        { step: 'Documentation', description: 'Completed work is documented with photos and a compliance-ready report is submitted.' },
      ]}
      deliverables={[
        'Winterization or de-winterization completion report',
        'Photo documentation of all treated systems',
        'Leak test results (de-winterization)',
        'Compliance verification documentation',
        'System status summary',
      ]}
      equipment={[
        'Air compressors for line blowout',
        'Non-toxic antifreeze supplies',
        'Pipe insulation materials',
        'Plumbing testing equipment',
        'HVAC service tools',
      ]}
      idealFor={[
        'Mortgage servicers managing vacant portfolios',
        'Asset managers preparing for seasonal changes',
        'REO agents listing seasonal properties',
        'Property preservation companies',
        'Property management firms',
      ]}
    />
  );
}
