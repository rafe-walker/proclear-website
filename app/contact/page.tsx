import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | ProClear Solutions",
  description:
    "Get in touch with ProClear Solutions. Call (520) 402-5877 or submit a contact form. Free quotes available. Serving Arizona.",
  keywords: [
    "contact ProClear Solutions",
    "property preservation contact",
    "free quote",
    "customer service",
    "Arizona phone number",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
