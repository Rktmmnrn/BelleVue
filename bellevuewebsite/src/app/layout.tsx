import type { Metadata } from "next";
import { Tenor_Sans, Josefin_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Police "display" : titres, logo, prix — un seul poids (400) chez Tenor Sans
const tenorSans = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: "400",
});

// Police "body" : texte courant, nav, boutons — variable de 300 à 600
const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Logo — Restaurant, Bar, Coffee, Bistro",
    template: "%s | Logo",
  },
  description:
    "Restaurant, bar, coffee, bistro à Utica, Pennsylvania. Réservez votre table pour une expérience culinaire raffinée.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tenorSans.variable} ${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
