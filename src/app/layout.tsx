import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "Amigus da Rosi",
  description:
    "Um portfolio de trabalhos de amigurumi produzidos por Rosimeire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${openSans.className} antialiased`}
    >
      <body>{children}</body>
      <GoogleTagManager gtmId="GTM-57MZ32ND" />
      <GoogleAnalytics gaId="G-FM56CP0VKD" />
    </html>
  );
}
