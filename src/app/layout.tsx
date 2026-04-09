import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL('https://learnsimplyacademy.com'),
  title: "Learn Simply Academy",
  description: "Master any skill with our structured, expert-led online masterclasses designed for deep understanding and career growth.",
  keywords: ["online education", "masterclass", "learn skills", "career growth", "self-paced learning"],
  openGraph: {
    title: "Learn Simply Academy",
    description: "Master any skill with our structured, expert-led online masterclasses designed for deep understanding and career growth.",
    url: 'https://learnsimplyacademy.com',
    siteName: 'Learn Simply Academy',
    images: [
      {
        url: '/learnsimply_logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Learn Simply Academy Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Simply Academy',
    description: 'Master any skill with our structured, expert-led online masterclasses designed for deep understanding and career growth.',
    images: ['/learnsimply_logo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.webp',
    apple: '/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plexSans.variable} ${plexSerif.variable}`}>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <BackToTop />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
