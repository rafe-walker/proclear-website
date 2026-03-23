import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About | ProClear Solutions",
  description:
    "Learn about ProClear Solutions, Arizona's trusted property preservation company. Founded in Tucson, we're bonded & insured and committed to reliability, eco-responsibility, and compliance.",
  keywords: [
    "about ProClear Solutions",
    "property preservation company",
    "Arizona based",
    "bonded insured",
    "property management",
    "Stormhaven Enterprises",
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
