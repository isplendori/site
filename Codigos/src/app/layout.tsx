import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Figtree, Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import ScrollObserver from "@/components/atoms/ScrollObserver";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-next",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--next-font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newIconSerif = localFont({
  variable: "--font-new-icon-serif",
  src: [
    {
      path: "../assets/fonts/New-Icon-Serif-condensed-Exfontf165.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Splendori",
    template: "%s — Splendori",
  },
  description:
    "Design por assinatura e projetos sob medida para sua marca crescer. Identidade visual, social media, sites e peças com direção e consistência.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${figtree.variable} ${instrumentSerif.variable} ${newIconSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollObserver />
      </body>
    </html>
  );
}
