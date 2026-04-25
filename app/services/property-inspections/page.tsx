import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Property Inspections | ProClear Solutions',
  description: 'Detailed property inspection services in Arizona. Photo-documented condition reports for asset managers, servicers, and real estate professionals.',
  alternates: {
    canonical: '/services/property-inspections',
  },
};

export default function PropertyInspectionsPage() {
  return (
    <ServicePageLayout
      iconName="Clipboard"
      title="Property Inspections"
      subtitle="Thorough, photo-documented inspections for informed property decisions."
      overview="Knowing the true condition of a property is essential before making decisions about listing, repairs, or occupancy. Our inspection team conducts detailed walkthroughs with comprehensive photo and video documentation, reporting on property condition, occupancy status, maintenance needs, and potential code violations. Reports are formatted to meet servicer and asset manager standards and delivered within your required timeline."
      features={[
        { title: 'Comprehensive Walkthroughs', description: 'Every room, exterior area, and system is inspected and documented for a complete property picture.' },
        { title: 'Photo & Video Documentation', description: 'High-quality photos and video capture the condition of every area, surface, and system.' },
        { title: 'Damage Assessment', description: 'Structural damage, water intrusion, vandalism, and environmental hazards are identified and reported.' },
        { title: 'Occupancy Verification', description: 'We determine and document whether the property is occupied, vacant, or showing signs of unauthorized entry.' },
        { title: 'Maintenance Recommendations', description: 'A prioritized list of recommended repairs and maintenance to bring the property to market-ready condition.' },
        { title: 'REO Compliance Checks', description: 'Inspections formatted to meet HUD, FHA, VA, and servicer-specific compliance requirements.' },
      ]}
      process={[
        { step: 'Order Received', description: 'We receive your inspection request with property address and any specific requirements.' },
        { step: 'Site Visit', description: 'An inspector visits the property and conducts a thorough walkthrough with full documentation.' },
        { step: 'Report Preparation', description: 'Photos, notes, and findings are compiled into a structured inspection report.' },
        { step: 'Delivery', description: 'The completed report is delivered digitally within your required turnaround time.' },
      ]}
      deliverables={[
        'Detailed inspection report',
        'High-resolution photo set',
        'Occupancy status verification',
        'Damage and condition assessment',
        'Maintenance recommendation list',
        'Compliance-formatted documentation',
      ]}
      equipment={[
        'Digital cameras and video equipment',
        'Moisture meters and detectors',
        'Measurement and leveling tools',
        'Standardized reporting templates',
        'Mobile documentation software',
      ]}
      idealFor={[
        'Mortgage servicers',
        'Asset management companies',
        'REO listing agents',
        'Insurance adjusters',
        'Property investors conducting due diligence',
      ]}
    />
  );
}
