import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nelvaglobal.com"),
  title: "Nelva | International Technology Market Development",
  description:
    "Nelva supports technology manufacturers with structured international market development, commercial intelligence, sales development, sourcing, and payment technology expertise.",
  openGraph: {
    title: "Nelva | International Technology Market Development",
    description:
      "Structured commercial execution for international technology markets.",
    url: "https://nelvaglobal.com",
    siteName: "Nelva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Nelva — Structured commercial execution for international technology markets.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelva | International Technology Market Development",
    description:
      "Structured commercial execution for international technology markets.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
