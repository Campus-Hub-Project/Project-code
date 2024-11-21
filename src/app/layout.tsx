import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import './globals.css'

export const metadata: Metadata = {
  title: "campus_hub",
  description: "Participe e publique seus eventos no campus_hub",
};

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className}`}>
        <main className='w-full min-h-screen flex items-center justify-center bg-grays-six'>
          {children}
        </main>
      </body>
    </html>
  );
}
