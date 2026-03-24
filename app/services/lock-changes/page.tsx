import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Lock Changes & Securing | ProClear Solutions',
  description: 'Professional lock change and property securing services in Arizona. Deadbolt installs, re-keys, padlocks, and full property securing for vacant properties.',
};

export default function LockChangesPage() {
  return (
    <ServicePageLayout
      iconName="Lock"
      title="Lock Changes & Securing"
      subtitle="Protecting vacant properties with professional lock changes and security measures."
      overview="Vacant properties are targets for unauthorized entry, vandalism, and theft. Our lock change and securing services ensure that every access point is properly secured to meet lender requirements and protect your investment. We handle deadbolt installations, re-keys, padlocking, window securing, and board-up services. Our technicians respond quickly and carry a full inventory of hardware to complete most jobs in a single visit."
      features={[
        { title: 'Door Lock Replacement', description: 'Full deadbolt and knob replacement on all exterior doors with new, keyed-alike hardware.' },
        { title: 'Rekeying Services', description: 'Existing locks are rekeyed to new keys, providing security without full hardware replacement.' },
        { title: 'Window Securing', description: 'Windows are secured with locks, pins, or boarding to prevent unauthorized access.' },
        { title: 'Board-Up Services', description: 'Broken windows and damaged openings are boarded with plywood to secure the property envelope.' },
        { title: 'Security Door Installation', description: 'Heavy-duty security screen doors installed on primary entries for long-term vacant property protection.' },
        { title: 'Emergency Lockout Response', description: 'Fast response for emergency lockouts when agents or inspectors need immediate property access.' },
      ]}
      process={[
        { step: 'Work Order', description: 'We receive your lock change or securing request with property details and access instructions.' },
        { step: 'Dispatch', description: 'A technician is dispatched with all necessary hardware, typically within 24-48 hours.' },
        { step: 'Securing', description: 'All locks are changed, re-keyed, or installed and the property is fully secured.' },
        { step: 'Key Delivery', description: 'New keys are delivered to you or placed in a lockbox per your instructions, with photo confirmation.' },
      ]}
      deliverables={[
        'New keyed-alike locks on all entries',
        'Key sets delivered or secured in lockbox',
        'Photo documentation of all work',
        'Securing compliance verification',
        'Emergency access coordination',
      ]}
      equipment={[
        'Commercial-grade deadbolts and locksets',
        'Rekeying kits and pin sets',
        'Padlocks and hasps',
        'Plywood and boarding materials',
        'Security screen doors',
      ]}
      idealFor={[
        'Asset managers requiring lender compliance',
        'REO agents securing new listings',
        'Property preservation companies',
        'Banks and mortgage servicers',
        'Property management firms',
      ]}
    />
  );
}
