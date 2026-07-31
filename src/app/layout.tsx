import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      </body>
    </html>
  );
}
