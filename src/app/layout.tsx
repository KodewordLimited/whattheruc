import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "What the Ruc? | Road User Charges Calculator NZ",
  description:
    "See the annual cost of your Road User Charges, just enter your licence plate! Works with EVs, Hybrids, and Diesel vehicles in New Zealand.",
  openGraph: {
    title: "What the Ruc? | Road User Charges Calculator NZ",
    description:
      "See the annual cost of your Road User Charges, just enter your licence plate! Works with EVs, Hybrids, and Diesel vehicles in New Zealand.",
    images: ["/WTR-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What the Ruc? | Road User Charges Calculator NZ",
    description:
      "See the annual cost of your Road User Charges, just enter your licence plate! Works with EVs, Hybrids, and Diesel vehicles in New Zealand.",
    images: ["/WTR-og.jpg"],
  },
  icons: {
    apple: "/webclip.png",
  },
  other: {
    "theme-color": "#286deb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
          strategy="lazyOnload"
        />
        <Script id="mixpanel-init" strategy="lazyOnload">
          {`
            window.mixpanel = window.mixpanel || [];
            mixpanel.init("1a8afb3f761d724d07e9797b9780dd00");
            mixpanel.track('page viewed', {
              'page name': document.title,
              'url': window.location.pathname
            });
          `}
        </Script>
      </body>
    </html>
  );
}
