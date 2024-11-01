import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import './globals.css'

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
    <html lang="pt-br">
      <body className={`${nunito.className}`}>
        <main className="min-h-screen w-full bg-hub-white flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
