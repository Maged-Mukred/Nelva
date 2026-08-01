import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore Nelva’s strongest specialist experience in Payment Technology, related Retail & Self-Service Technology experience, and selected adjacent technology opportunities.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries | Nelva",
    description:
      "Payment Technology first, with related retail and self-service experience and selected adjacent technology opportunities.",
    url: "/industries",
  },
};

export default function IndustriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
