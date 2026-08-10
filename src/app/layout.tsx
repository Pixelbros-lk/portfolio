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
  title: "PixelBros — Custom Web & Mobile App Development Company",
  description:
    "PixelBros is a software development company that builds custom websites, mobile applications, and full-stack solutions for modern companies.",
  keywords: [
    "software development company",
    "custom websites",
    "mobile app development",
    "full-stack solutions",
    "Next.js",
    "React Native",
    "UI/UX Design",
    "PixelBros",
  ],
  authors: [{ name: "PixelBros Company" }],
  openGraph: {
    title: "PixelBros — High-Velocity Software Engineering",
    description:
      "Crafting world-class digital products with bespoke frontend architecture, native mobile mastery, and resilient cloud backends.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FFFFFF] text-zinc-900 selection:bg-[#FE4845]/20 selection:text-[#FE4845] overflow-x-hidden font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

