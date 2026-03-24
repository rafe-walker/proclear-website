import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    canonical: "https://proclearsolutionsaz.com",
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
      <body className="min-h-screen flex flex-col bg-brand-white text-brand-gray-800 font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
