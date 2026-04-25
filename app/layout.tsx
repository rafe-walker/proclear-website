import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://proclearsolutionsaz.com/#localbusiness",
      name: "ProClear Solutions AZ",
      legalName: "StormHaven Enterprises LLC",
      url: "https://proclearsolutionsaz.com",
      email: "hello@proclearsolutionsaz.com",
      telephone: "+15207292974",
      description:
        "Professional property preservation and cleanout services in Southern Arizona. Foreclosure cleanouts, trash-out services, yard maintenance, lock changes, handyman repairs, property inspections, paint touch-ups, and winterization.",
      logo: "https://proclearsolutionsaz.com/favicon.ico",
      image: "https://proclearsolutionsaz.com/og-image.svg",
      priceRange: "$$",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Cochise County, Arizona" },
        { "@type": "AdministrativeArea", name: "Santa Cruz County, Arizona" },
        { "@type": "AdministrativeArea", name: "Pima County, Arizona" },
        { "@type": "State", name: "Arizona" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tucson",
        addressRegion: "AZ",
        addressCountry: "US",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Property Preservation Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foreclosure Cleanouts", url: "https://proclearsolutionsaz.com/services/foreclosure-cleanouts" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trash-Out Services", url: "https://proclearsolutionsaz.com/services/trash-out-services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yard Maintenance", url: "https://proclearsolutionsaz.com/services/yard-maintenance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lock Changes", url: "https://proclearsolutionsaz.com/services/lock-changes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Handyman Repairs", url: "https://proclearsolutionsaz.com/services/handyman-repairs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Inspections", url: "https://proclearsolutionsaz.com/services/property-inspections" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Touch-Ups", url: "https://proclearsolutionsaz.com/services/paint-touch-ups" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winterization", url: "https://proclearsolutionsaz.com/services/winterization" } },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://proclearsolutionsaz.com/#organization",
      name: "ProClear Solutions AZ",
      legalName: "StormHaven Enterprises LLC",
      url: "https://proclearsolutionsaz.com",
      email: "hello@proclearsolutionsaz.com",
      logo: "https://proclearsolutionsaz.com/favicon.ico",
      sameAs: ["https://proclearsolutionsaz.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://proclearsolutionsaz.com/#website",
      url: "https://proclearsolutionsaz.com",
      name: "ProClear Solutions AZ",
      description:
        "Professional property preservation and cleanout services in Southern Arizona.",
      publisher: { "@id": "https://proclearsolutionsaz.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://proclearsolutionsaz.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proclearsolutionsaz.com"),
  title: "ProClear Solutions | Foreclosure Cleanouts & Property Preservation in Arizona",
  description:
    "Arizona's trusted property preservation company. Foreclosure cleanouts, REO maintenance, trash-outs, yard care, lock changes, and handyman services. Bonded & insured. Serving Tucson, Phoenix, and statewide.",
  keywords: [
    "foreclosure cleanout Arizona",
    "property preservation Tucson",
    "REO maintenance Phoenix",
    "trash out services Arizona",
    "Fannie Mae property preservation",
    "Freddie Mac REO services",
    "property turnover Arizona",
    "junk removal foreclosure",
    "lock change REO",
    "yard maintenance foreclosure",
    "ProClear Solutions",
    "bonded insured property preservation",
  ],
  authors: [{ name: "ProClear Solutions" }],
  creator: "ProClear Solutions",
  publisher: "ProClear Solutions",
  openGraph: {
    title: "ProClear Solutions | Foreclosure Cleanouts & Property Preservation",
    description:
      "Arizona's trusted property preservation company. Bonded & insured. Foreclosure cleanouts, REO maintenance, and property turnover services.",
    type: "website",
    url: "https://proclearsolutionsaz.com",
    siteName: "ProClear Solutions",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ProClear Solutions — Property Preservation You Can Count On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProClear Solutions | Foreclosure Cleanouts & Property Preservation",
    description:
      "Arizona's trusted property preservation company. Bonded & insured.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2b4c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-white text-brand-gray-800 font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
