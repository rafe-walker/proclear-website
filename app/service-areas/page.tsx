import type { Metadata } from "next";
import ServiceAreasClient from "./service-areas-client";

export const metadata: Metadata = {
  title: "Service Areas | ProClear Solutions",
  description:
    "ProClear Solutions serves Tucson, Phoenix, and cities throughout Arizona. Statewide property preservation coverage from Flagstaff to Sierra Vista.",
  keywords: [
    "service areas",
    "Phoenix property preservation",
    "Tucson property preservation",
    "Arizona service coverage",
    "property preservation Arizona cities",
  ],
  alternates: {
    canonical: '/service-areas',
  },
};

export default function ServiceAreasPage() {
  return <ServiceAreasClient />;
}
