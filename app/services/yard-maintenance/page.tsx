import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Yard & Landscape Maintenance | ProClear Solutions',
  description: 'Professional yard maintenance and landscape services for vacant properties in Arizona. Mowing, trimming, weed removal, and desert landscaping cleanup.',
};

export default function YardMaintenancePage() {
  return (
    <ServicePageLayout
      iconName="Trees"
      title="Yard & Landscape Maintenance"
      subtitle="Restoring curb appeal to neglected properties across Arizona."
      overview="In the Arizona heat, yards can go from presentable to overgrown in weeks. Our landscape maintenance crews handle everything from routine mowing and edging to full overgrowth clearing and desert landscaping cleanup. We bring curb appeal back to neglected properties so they make a strong first impression for buyers, inspectors, and neighbors. Regular maintenance plans are available for portfolio clients managing multiple vacant properties."
      features={[
        { title: 'Lawn Mowing & Edging', description: 'Regular mowing, edging along sidewalks and driveways, and trimming around structures and fencing.' },
        { title: 'Tree & Shrub Trimming', description: 'Pruning overgrown trees, hedges, and shrubs to restore clean sight lines and reduce fire risk.' },
        { title: 'Weed Removal', description: 'Manual and chemical weed removal from yards, gravel areas, driveways, and planting beds.' },
        { title: 'Overgrowth Clearing', description: 'Full clearing of heavily overgrown lots including brush, vines, and invasive plant species.' },
        { title: 'Desert Landscaping', description: 'Expertise in Arizona-specific desert landscaping maintenance including rock, gravel, and cactus care.' },
        { title: 'Debris Cleanup', description: 'Removal of fallen branches, leaves, and accumulated yard waste for a clean finish.' },
      ]}
      process={[
        { step: 'Property Visit', description: 'We inspect the yard conditions and determine the scope of work needed.' },
        { step: 'Quote & Schedule', description: 'You receive a detailed quote and we schedule service at your convenience.' },
        { step: 'Maintenance', description: 'Our crew performs all mowing, trimming, clearing, and cleanup work on-site.' },
        { step: 'Photo Report', description: 'Before-and-after photos are submitted to document the completed work.' },
      ]}
      deliverables={[
        'Mowed and edged lawn',
        'Trimmed trees and shrubs',
        'Weed-free yard and gravel areas',
        'Before & after photo documentation',
        'Recurring maintenance schedule option',
      ]}
      equipment={[
        'Commercial mowers and trimmers',
        'Hedge trimmers and chainsaws',
        'Weed sprayers and hand tools',
        'Blowers and rakes',
        'Truck-mounted debris hauling',
      ]}
      idealFor={[
        'Vacant property managers',
        'REO listing agents',
        'HOA compliance departments',
        'Banks with foreclosure portfolios',
        'Investors preparing properties for sale',
      ]}
    />
  );
}
