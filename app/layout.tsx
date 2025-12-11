import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Wedding of Hilman Abdul Aziz & Yayu Rahayu",
  description: "Kami mengundang Anda untuk merayakan pernikahan kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
