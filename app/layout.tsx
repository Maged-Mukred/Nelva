import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nelvaglobal.com"),
  title: "Nelva | International Technology Market Development",
  description:
    "Nelva supports technology manufacturers with international market development, manufacturer representation, qualification, and technical and commercial coordination.",
  openGraph: {
    title: "Nelva | International Technology Market Development",
    description:
      "International market development for technology manufacturers.",
    url: "https://nelvaglobal.com",
    siteName: "Nelva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Nelva — International market development for technology manufacturers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelva | International Technology Market Development",
    description:
      "International market development for technology manufacturers.",
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
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
