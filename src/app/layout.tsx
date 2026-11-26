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
// ships in every page's HTML. Only loaded in production builds so local dev
// sessions don't count as visits.
const CF_ANALYTICS_TOKEN = "da226942da6845edbf28f772f1d6a869";

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

        { process.env.NODE_ENV === "production" && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={ JSON.stringify( { token: CF_ANALYTICS_TOKEN } ) }
          />
        ) }
      </body>
    </html>
  );
}
