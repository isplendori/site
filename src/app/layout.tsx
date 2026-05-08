import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Figtree } from "next/font/google";
import localFont from "next/font/local";
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

const itcGaramondStd = localFont({
  variable: "--font-itc-garamond-std",
  src: [
    {
      path: "../assets/fonts/ITC Garamond Std Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/ITC Garamond Std Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ITC Garamond Std Book Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/ITC Garamond Std Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/ITC Garamond Std Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${figtree.variable} ${itcGaramondStd.variable} ${newIconSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
