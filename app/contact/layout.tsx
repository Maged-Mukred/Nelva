import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an initial commercial briefing with Nelva about your product, target market, current commercial situation, and the type of support being considered.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Nelva",
    description:
      "Discuss a Market & Channel Readiness Assessment or another defined international market-development requirement.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
