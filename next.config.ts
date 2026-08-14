import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      // Duplicate post cleanup 2026-08-14. Two blog entries carried the
      // identical title "Vacant Property Risk in Arizona Summer: A Property
      // Manager's Pre-Inspection Checklist" and the same publish date, with
      // slugs differing only in how the apostrophe was slugified
      // ("managers" vs "manager-s"). Both served 200 and competed with each
      // other. The manager-s entry has been removed; this 301 sends its
      // traffic and any accumulated equity to the surviving URL.
      {
        source: '/blog/vacant-property-risk-in-arizona-summer-a-property-manager-s-pre-inspection-checklist',
        destination: '/blog/vacant-property-risk-in-arizona-summer-a-property-managers-pre-inspection-checklist',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;