import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IHV Travel India | Signature Sri Lanka Journeys",
  description:
    "Discover Sri Lanka's finest — luxury escapes, cultural heritage tours, wildlife safaris, wellness retreats, and honeymoon packages crafted exclusively for Indian travellers by International Hospitality Ventures.",
  keywords:
    "Sri Lanka tour packages India, Sri Lanka holiday India, luxury Sri Lanka tour, Sri Lanka honeymoon package, IHV Travel",
  openGraph: {
    title: "IHV Travel India | Signature Sri Lanka Journeys",
    description:
      "Luxury Sri Lanka travel packages crafted exclusively for Indian travellers.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-charcoal text-cream antialiased">{children}</body>
    </html>
  );
}
