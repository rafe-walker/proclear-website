import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Trash-Out Services | ProClear Solutions',
  description: 'Professional trash-out and junk removal services for REO properties in Arizona. Bulk waste hauling, compliant disposal, and same-day service available.',
  alternates: {
    canonical: '/services/trash-out-services',
  },
};

export default function TrashOutServicesPage() {
  return (
    <ServicePageLayout
      iconName="Truck"
      title="Trash-Out Services"
      subtitle="Professional junk removal and waste hauling for REO and vacant properties."
      overview="Trash-out services go beyond a standard cleanout. When properties accumulate large volumes of garbage, bulk waste, or hazardous materials, our trash-out crews step in with the equipment and expertise to handle it all. We coordinate debris box rentals, manage compliant disposal of hazardous materials, and ensure every item is removed efficiently. Whether it is a single unit or a multi-property portfolio, we deliver fast, reliable results."
      features={[
        { title: 'Interior & Exterior Removal', description: 'We clear trash and debris from inside the property and all exterior areas including yards, driveways, and carports.' },
        { title: 'Bulk Waste Hauling', description: 'Large items like mattresses, furniture, appliances, and construction debris are loaded and hauled to licensed disposal sites.' },
        { title: 'Hazardous Material Assessment', description: 'We identify and flag potential hazardous materials and coordinate proper handling and disposal per regulations.' },
        { title: 'Debris Box Coordination', description: 'For large-scale jobs, we arrange roll-off dumpster delivery and pickup to keep the project moving efficiently.' },
        { title: 'Same-Day Service', description: 'Urgent jobs can be scheduled for same-day or next-day service to meet your deadlines.' },
        { title: 'Compliant Disposal', description: 'All waste is disposed of at licensed facilities with proper documentation for your compliance records.' },
      ]}
      process={[
        { step: 'Site Evaluation', description: 'We assess the volume and type of waste on-site and provide a detailed quote.' },
        { step: 'Resource Planning', description: 'Trucks, dumpsters, and crew size are matched to the scope of the job.' },
        { step: 'Removal & Hauling', description: 'Our team loads and hauls all trash, debris, and bulk items from the property.' },
        { step: 'Documentation', description: 'Disposal receipts and before-and-after photos are provided for your records.' },
      ]}
      deliverables={[
        'Complete trash and debris removal',
        'Before & after photo documentation',
        'Disposal and recycling receipts',
        'Hazardous material flagging report',
        'Compliance-ready paperwork',
      ]}
      equipment={[
        'Box trucks and dump trailers',
        'Roll-off dumpsters',
        'Heavy-duty hand tools',
        'Personal protective equipment',
        'Sorting and recycling bins',
      ]}
      idealFor={[
        'REO asset managers',
        'Property preservation companies',
        'Real estate investors',
        'HOA management firms',
        'Municipal code enforcement',
      ]}
    />
  );
}
