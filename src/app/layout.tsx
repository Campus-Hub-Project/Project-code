import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import '@/styles/globals/globals.css'

export const metadata: Metadata = {
  title: "campus_hub",
  description: "Participe e publique seus eventos no campus_hub",
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
