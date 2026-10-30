import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://meridian-architecture.com"),
  title: "MERIDIAN — Homes Drawn with Intent | Luxury Architecture & Residences",
  description: "Award-winning architectural studio & bespoke private residential estates. We compose light, stone, and silence into places worth staying.",
  keywords: [
    "Meridian Architecture",
    "Luxury Real Estate",
    "Architectural Studio",
    "Award Winning Residences",
    "Amalfi Cliff Villa",
    "Modern Architecture",
    "Minimalist Homes"
  ],
  authors: [{ name: "MERIDIAN Architecture Studio" }],
  openGraph: {
    title: "MERIDIAN — Homes Drawn with Intent",
    description: "Award-winning architectural studio and bespoke private estates worldwide.",
    url: "https://meridian-architecture.com",
    siteName: "MERIDIAN",
    images: [
      {
        url: "/images/hero-dusk.jpg",
        width: 1920,
        height: 1080,
        alt: "Azure Cliff Residence by MERIDIAN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERIDIAN — Homes Drawn with Intent",
    description: "Award-winning architectural studio and bespoke private estates worldwide.",
    images: ["/images/hero-dusk.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased selection:bg-[var(--brass)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
