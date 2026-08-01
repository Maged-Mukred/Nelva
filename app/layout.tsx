import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nelvaglobal.com"),

  title: {
    default: "Nelva | Market & Channel Readiness",
    template: "%s | Nelva",
  },

  description:
    "Nelva helps payment and technology manufacturers assess markets, qualify commercial channels, and develop credible opportunities before larger market-entry commitments.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nelva | Market & Channel Readiness",
    description:
      "Helping payment and technology manufacturers make better market and channel decisions before larger market-entry commitments.",
    url: "https://nelvaglobal.com",
    siteName: "Nelva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Nelva — Market and Channel Readiness for technology manufacturers.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nelva | Market & Channel Readiness",
    description:
      "Helping payment and technology manufacturers make better market and channel decisions before larger market-entry commitments.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
