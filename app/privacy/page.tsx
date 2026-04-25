import type { Metadata } from "next";
import PrivacyClient from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy | ProClear Solutions",
  description:
    "Privacy policy for ProClear Solutions LLC. Learn how we collect, use, and protect your information.",
  keywords: ["privacy policy", "data protection", "ProClear Solutions"],
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
