import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Luxury Sri Lanka tours for Indian travelers | IHV Travel",
  description:
    "Discover Sri Lanka's finest — luxury escapes, cultural heritage tours, wildlife safaris, wellness retreats, and honeymoon packages crafted exclusively for Indian travellers by International Hospitality Ventures.",
  keywords:
    "Sri Lanka tour packages India, Sri Lanka holiday India, luxury Sri Lanka tour, Sri Lanka honeymoon package, IHV Travel",
  openGraph: {
    title: "Luxury Sri Lanka tours for Indian travelers | IHV Travel",
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
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="bg-background text-ivory antialiased font-sans">{children}</body>
    </html>
  );
}
