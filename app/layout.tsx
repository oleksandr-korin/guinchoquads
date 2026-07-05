import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/app/lib/site";
import { ConsentBanner } from "@/app/components/consent-banner";
import { AnalyticsClickBridge } from "@/app/components/analytics-click-bridge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const isProd = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "quad tours Cascais",
    "quad bike Guincho",
    "buggy Guincho",
    "sea kayak Cascais",
    "mountain bike Sintra",
    "hiking Sintra",
    "Sintra Jeep tour",
    "stag party Cascais",
    "corporate event Cascais",
    "Guincho Adventours",
  ],
  authors: [{ name: site.legalName }],
  category: "travel",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image.png"],
  },
  robots: isProd
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body>
        {/* Consent Mode v2 — default all storage to denied.
            The consent banner flips this to granted on Accept. */}
        {gaId && (
          <Script id="consent-default" strategy="beforeInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
              gtag('consent','default',{
                ad_storage:'denied',
                analytics_storage:'denied',
                functionality_storage:'denied',
                personalization_storage:'denied',
                security_storage:'granted',
                wait_for_update:500
              });`}
          </Script>
        )}

        {children}

        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gaId && <AnalyticsClickBridge />}
        <ConsentBanner enabled={Boolean(gaId)} />
      </body>
    </html>
  );
}
