import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn how Nelva operates, the professional experience behind the business, and the commercial boundaries that define each engagement.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "Company | Nelva",
    description:
      "A specialist Finnish company helping payment and technology manufacturers make better market and channel decisions.",
    url: "/company",
  },
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
