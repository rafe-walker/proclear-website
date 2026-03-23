import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ProClear Solutions',
  description: 'Property preservation insights, REO maintenance tips, and company updates from ProClear Solutions.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
