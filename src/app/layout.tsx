import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { siteConfig } from "@/constants/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PCRD",
    template: "PCRD",
  },
  description: siteConfig.description,
  keywords: ["Palestine", "research", "dialogue", "civilizations", "PCRD", "Bethlehem"],
  icons: {
    icon: "/images/logo/pcrd-logo.png",
    shortcut: "/images/logo/pcrd-logo.png",
    apple: "/images/logo/pcrd-logo.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0D0D0D]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
