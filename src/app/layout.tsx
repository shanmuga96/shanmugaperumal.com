import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: "Shanmugaperumal Seenivasan",
  description: "Portfolio, projects, and writing from Shanmugaperumal Seenivasan.",
};

// Cloudflare Web Analytics (cookie-free). The token is public by design: it
// ships in every page's HTML. Set at build time by the deploy workflow; the
// beacon is skipped when it's unset or outside production builds, so local
// dev sessions don't count as visits.
const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html
      lang="en"
      className={ `${ geistSans.variable } ${ geistMono.variable } h-full antialiased` }
    >
      <body className="min-h-screen bg-white text-neutral-900">
        <Navbar />

        <Container>
          <main>{ children }</main>
        </Container>

        <Footer />

        { process.env.NODE_ENV === "production" && CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={ JSON.stringify( { token: CF_ANALYTICS_TOKEN } ) }
          />
        ) }
      </body>
    </html>
  );
}
