import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Foreclosure Cleanouts | ProClear Solutions',
  description: 'Complete foreclosure cleanout services in Arizona. We remove all debris, personal belongings, and abandoned items, leaving properties broom-clean and market-ready.',
};

export default function ForeclosureCleanoutsPage() {
  return (
    <ServicePageLayout
      iconName="Trash2"
      title="Foreclosure Cleanouts"
      subtitle="Complete property clearing for REO and foreclosure properties across Arizona."
      overview="When a property goes through foreclosure, it often comes with a full house of abandoned belongings, trash, and debris. Our foreclosure cleanout crews handle everything from start to finish â removing all personal property, appliances, furniture, and waste so the unit is broom-clean and ready for listing. We work with asset managers, servicers, and real estate agents to meet tight turnaround deadlines and HUD compliance standards."
      features={[
        { title: 'Full Contents Removal', description: 'We remove all personal belongings, furniture, appliances, and abandoned items from every room, garage, and storage area.' },
        { title: 'Debris & Junk Hauling', description: 'Construction waste, yard debris, and general refuse are hauled away and disposed of at licensed facilities.' },
        { title: 'Appliance Disconnection', description: 'Safe disconnection and removal of washers, dryers, refrigerators, stoves, and other built-in appliances.' },
        { title: 'Broom-Clean Finish', description: 'Every cleanout ends with a thorough sweep and wipe-down so the property is list-ready for agents.' },
        { title: 'Recycling & Donation', description: 'Reusable items are donated to local charities and recyclable materials are sorted and processed responsibly.' },
        { title: 'Photo Documentation', description: 'Before-and-after photos document the condition and work completed for your records and compliance files.' },
      ]}
      process={[
        { step: 'Assessment', description: 'We walk the property and provide a detailed scope of work and quote within 24 hours.' },
        { step: 'Scheduling', description: 'Jobs are scheduled around your timeline â standard or rush turnaround available.' },
        { step: 'Cleanout', description: 'Our crew removes all contents, debris, and waste. We sort, haul, donate, and recycle.' },
        { step: 'Final Walkthrough', description: 'A supervisor inspects the property to confirm broom-clean condition and submits photo documentation.' },
      ]}
      deliverables={[
        'Broom-clean property interior',
        'Before & after photo report',
        'Disposal receipts and manifests',
        'Donation receipts when applicable',
        'Compliance-ready documentation',
      ]}
      equipment={[
        'Box trucks and trailers',
        'Industrial cleaning supplies',
        'Appliance dollies and hand trucks',
        'Personal protective equipment',
        'Debris containers and dumpsters',
      ]}
      idealFor={[
        'Asset managers and servicers',
        'REO real estate agents',
        'Banks and lenders',
        'Property management companies',
        'Government housing agencies',
      ]}
    />
  );
}
