import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Montserrat } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Zak's Blueprint",
  description: "Clean, focused software development portfolio built by Zak Hajjaji 🍊",
  icons: {
    icon: "/assets/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

