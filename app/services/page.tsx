import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Services | ProClear Solutions",
  description:
    "Comprehensive property preservation services in Arizona: foreclosure cleanouts, trash-outs, yard maintenance, lock changes, handyman repairs, inspections, painting, and winterization.",
  keywords: [
    "property preservation services",
    "foreclosure cleanouts",
    "trash out services",
    "yard maintenance",
    "lock changes",
    "handyman services",
    "property inspection",
    "painting services",
    "winterization",
  ],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
