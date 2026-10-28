import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatingActions } from "@/components/ui/FloatingActions";

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hire Desi Marketer",
  "url": "https://www.hiredesimarketer.com/",
  "description":
    "Hire dedicated digital marketing specialists in India for SEO, paid advertising, content marketing, and social media marketing.",
  "publisher": {
    "@type": "Organization",
    "name": "Hire Desi Marketer",
    "url": "https://www.hiredesimarketer.com/",
  },
  "inLanguage": "en",
};

export const metadata: Metadata = {
  title: "Hire Digital Marketing Team in India | Hire Desi Marketer",
  description:
    "Hire skilled digital marketing team in India for SEO, paid ads, content and social media. Build a dedicated marketing team with flexible pricing.",
  keywords: [
    "hire digital marketing team in India",
    "hire desi marketer",
    "digital marketing team India",
    "outsourced marketing team India",
    "hire offshore marketer",
    "affordable marketing agency",
    "hourly marketing specialist",
    "SEO agency India",
    "Google ads management",
    "Meta ads specialist",
  ],
  authors: [{ name: "Hire Desi Marketer", url: "https://www.hiredesimarketer.com/" }],
  creator: "Hire Desi Marketer",
  publisher: "Hire Desi Marketer",
  metadataBase: new URL("https://www.hiredesimarketer.com"),
  alternates: {
    canonical: "https://www.hiredesimarketer.com/",
  },
  openGraph: {
    title: "Hire Digital Marketing Team in India | Hire Desi Marketer",
    description:
      "Hire skilled digital marketing team in India for SEO, paid ads, content and social media. Build a dedicated marketing team with flexible pricing.",
    url: "https://www.hiredesimarketer.com/",
    siteName: "Hire Desi Marketer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-mesh-bg.svg",
        width: 1200,
        height: 630,
        alt: "Hire Desi Marketer - Digital Marketing Team in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Digital Marketing Team in India | Hire Desi Marketer",
    description:
      "Hire skilled digital marketing team in India for SEO, paid ads, content and social media. Build a dedicated marketing team with flexible pricing.",
    images: ["/images/hero-mesh-bg.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "j3Xj5u9lg-K0k6kJoAaqSeUVV_IwVyoE7EUv77h5iA8",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F6F4EE] text-[#0B1B3A] antialiased selection:bg-[#FFB020] selection:text-[#060B22]">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTW9DHSLLC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LTW9DHSLLC');
            gtag('config', 'G-2EN2Z5G1JC');
          `}
        </Script>

        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
