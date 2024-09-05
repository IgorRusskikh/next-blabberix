import "./globals.css";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "BLABBERIX",
  description:
    "Discover BLABBERIX, the groundbreaking social network in Web3 that seamlessly integrates cutting-edge artificial intelligence and tokenomics technologies. With no current equivalent in the market, BLABBERIX is not just a product—it's a revolutionary idea in social networking.",
  keywords:
    "BLABBERIX, Web3 social network, AI integration, tokenomics, blockchain social media, innovative social networking, artificial intelligence, decentralized social platforms, Web3 technologies, future of social media",
};

export const dynamic = "force-static";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
