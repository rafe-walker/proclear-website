import type { Metadata } from "next";
import TermsClient from "./terms-client";

export const metadata: Metadata = {
  title: "Terms of Service | ProClear Solutions",
  description:
    "Terms of Service for ProClear Solutions LLC. Understand our service terms, pricing, scheduling, and liability policies.",
  keywords: ["terms of service", "service agreement", "ProClear Solutions"],
};

export default function TermsPage() {
  return <TermsClient />;
}
