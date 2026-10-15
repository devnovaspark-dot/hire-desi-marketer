import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#060B22",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Hire Desi Marketer | Your Marketing Team in India from $8/Hour",
  description:
    "Hire dedicated marketing specialists, SEO leads, ad buyers, creators and developers from India working your exact hours. Simple hourly pricing from $8/hr, $999/mo bundle, or managed teams of 3 to 7 with zero lock-in contracts.",
  keywords: [
    "hire desi marketer",
    "outsourced marketing team India",
    "digital marketing team India",
    "hire offshore marketer",
    "affordable marketing agency",
    "hourly marketing specialist",
    "SEO agency India",
    "Google ads management",
    "Meta ads specialist",
  ],
  authors: [{ name: "Hire Desi Marketer", url: "https://hiredesimarketer.com" }],
  creator: "Hire Desi Marketer",
  publisher: "Hire Desi Marketer",
  metadataBase: new URL("https://hiredesimarketer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hire Desi Marketer — Your Marketing Team in India from $8/Hour",
    description:
      "Strategists, media buyers, SEOs, designers & developers working US, UK, Canada & Australian hours. Flexible hourly rates, $999/mo bundle, or dedicated teams.",
    url: "https://hiredesimarketer.com",
    siteName: "Hire Desi Marketer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-mesh-bg.svg",
        width: 1200,
        height: 630,
        alt: "Hire Desi Marketer - Outsourced Marketing Team in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Desi Marketer | Dedicated Marketing Teams from $8/hr",
    description:
      "Skilled marketers, global standards, flexible pricing. Meet your dedicated marketing team in India.",
    images: ["/images/hero-mesh-bg.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F6F4EE] text-[#0B1B3A] antialiased selection:bg-[#FFB020] selection:text-[#060B22]">
        {children}
      </body>
    </html>
  );
}
