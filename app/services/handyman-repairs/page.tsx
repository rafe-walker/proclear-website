import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Handyman & Repairs | ProClear Solutions',
  description: 'Professional handyman and repair services for vacant and REO properties in Arizona. Plumbing, drywall, fixtures, and general maintenance.',
  alternates: {
    canonical: '/services/handyman-repairs',
  },
};

export default function HandymanRepairsPage() {
  return (
    <ServicePageLayout
      iconName="Wrench"
      title="Handyman & Repairs"
      subtitle="Skilled maintenance and repair work to get properties market-ready."
      overview="From minor plumbing leaks to drywall patches and fixture replacements, our handyman crews handle the repairs that bring properties up to code and make them presentable for buyers and tenants. We focus on cost-effective solutions that address inspection punch lists, code violations, and cosmetic issues without over-spending. Our technicians are experienced with REO property standards and know what servicers and agents expect."
      features={[
        { title: 'Drywall Repair & Patching', description: 'Holes, cracks, and water damage in drywall are patched, sanded, and finished for a clean surface.' },
        { title: 'Door & Frame Repair', description: 'Damaged doors, frames, and hardware are repaired or replaced to restore proper function and security.' },
        { title: 'Minor Plumbing Fixes', description: 'Leaky faucets, running toilets, pipe repairs, and fixture replacements handled efficiently.' },
        { title: 'Electrical Repairs', description: 'Light fixture installation, outlet and switch replacements, and minor wiring corrections.' },
        { title: 'Cabinet & Hardware Repair', description: 'Kitchen and bathroom cabinets are repaired, re-hung, and fitted with new hardware as needed.' },
        { title: 'General Maintenance', description: 'Catch-all repairs including caulking, weather stripping, screen replacement, and safety corrections.' },
      ]}
      process={[
        { step: 'Punch List Review', description: 'We review your repair list or inspection report and provide a detailed bid.' },
        { step: 'Scheduling', description: 'Work is scheduled based on priority and property access availability.' },
        { step: 'Repairs', description: 'Our skilled technicians complete all repairs on the punch list efficiently and to standard.' },
        { step: 'Verification', description: 'A walkthrough confirms all items are complete, with photos documenting the finished work.' },
      ]}
      deliverables={[
        'Completed punch list items',
        'Before & after photo documentation',
        'Materials and labor receipts',
        'Code compliance verification',
        'Warranty on workmanship',
      ]}
      equipment={[
        'Full hand and power tool kits',
        'Plumbing repair supplies',
        'Drywall and patching materials',
        'Electrical testing equipment',
        'Paint and finishing supplies',
      ]}
      idealFor={[
        'REO agents with inspection punch lists',
        'Property managers preparing units',
        'Investors flipping properties',
        'Servicers meeting conveyance requirements',
        'Homeowners needing general repairs',
      ]}
    />
  );
}
