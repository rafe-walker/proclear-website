import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Paint & Touch-Ups | ProClear Solutions',
  description: 'Professional interior and exterior painting services for properties in Arizona. Wall patching, touch-ups, and full repaints to maximize property appeal.',
  alternates: {
    canonical: '/services/paint-touch-ups',
  },
};

export default function PaintTouchUpsPage() {
  return (
    <ServicePageLayout
      iconName="Paintbrush"
      title="Paint & Touch-Ups"
      subtitle="Professional painting that maximizes property appeal and market value."
      overview="Fresh paint is one of the most cost-effective ways to transform a property and increase its market appeal. Our painting crews handle everything from spot touch-ups and wall patching to full interior and exterior repaints. We use quality materials, maintain clean work areas, and deliver smooth, professional finishes. Whether you need to cover scuff marks before a showing or repaint an entire home for resale, we have the skills and efficiency to get it done right."
      features={[
        { title: 'Interior Wall Painting', description: 'Full room or whole-house interior painting with proper prep, priming, and two-coat finish.' },
        { title: 'Exterior Painting', description: 'Exterior surfaces including siding, trim, fascia, and stucco are prepped and painted for lasting results.' },
        { title: 'Trim & Accent Work', description: 'Baseboards, door frames, window trim, and accent walls are painted with precision detail work.' },
        { title: 'Cabinet Refinishing', description: 'Kitchen and bathroom cabinets are sanded, primed, and painted for an updated look without replacement.' },
        { title: 'Stain & Damage Coverage', description: 'Water stains, smoke damage, and discoloration are sealed and covered with appropriate primers and paint.' },
        { title: 'Color Consultation', description: 'We help select neutral, market-friendly colors that appeal to the broadest range of buyers.' },
      ]}
      process={[
        { step: 'Scope Review', description: 'We assess the surfaces, conditions, and square footage to provide an accurate quote.' },
        { step: 'Preparation', description: 'Surfaces are cleaned, patched, sanded, and primed for optimal paint adhesion.' },
        { step: 'Painting', description: 'Our crew applies paint with brushes, rollers, or sprayers depending on the surface and finish.' },
        { step: 'Final Inspection', description: 'Touch-ups are completed, tape is removed, and the finished work is inspected and photographed.' },
      ]}
      deliverables={[
        'Freshly painted surfaces',
        'Patched and repaired walls',
        'Before & after photo documentation',
        'Color and product specification sheet',
        'Clean, paint-free floors and fixtures',
      ]}
      equipment={[
        'Professional brushes and rollers',
        'Airless paint sprayers',
        'Sanding and patching tools',
        'Quality primers and paints',
        'Drop cloths and masking supplies',
      ]}
      idealFor={[
        'REO agents preparing listings',
        'Property managers turning units',
        'Investors improving properties for resale',
        'Homeowners refreshing interiors',
        'Commercial property owners',
      ]}
    />
  );
}
