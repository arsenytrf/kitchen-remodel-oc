import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyPhone } from "@/components/layout/StickyPhone";
import { BackToTop } from "@/components/layout/BackToTop";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Licensed Kitchen Remodeling in Orange County`,
    template: `%s | ${company.name}`,
  },
  description:
    "State-licensed kitchen remodeling in Orange County, CA. Cabinets, countertops, tile, plumbing, electrical, flooring. License #1152610. 15+ years experience. Free estimates.",
  keywords: [
    "kitchen remodeling Orange County",
    "kitchen contractor Tustin",
    "cabinet installation OC",
    "countertop installer Irvine",
    "kitchen renovation Santa Ana",
    "licensed kitchen contractor CA",
  ],
  openGraph: {
    title: `${company.name} | Licensed Kitchen Remodeling`,
    description:
      "State-licensed kitchen remodeling in Orange County. Cabinets, countertops, tile, plumbing, electrical. License #1152610.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-white text-stone-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-walnut-700 focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:rounded-lg"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyPhone />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
