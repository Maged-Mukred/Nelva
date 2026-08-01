import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore Nelva’s capabilities in Market & Channel Readiness, customer and partner qualification, Manufacturer Representation, Technical & Commercial Coordination, and opportunity follow-up.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Capabilities | Nelva",
    description:
      "Structured capabilities for assessing markets, qualifying commercial channels, developing relationships, and advancing credible opportunities.",
    url: "/capabilities",
  },
};

export default function CapabilitiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
