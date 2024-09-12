import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { CartShoppingProvider } from "@/context/cartProvider";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "audiophile ecommerce app",
  description: "Audiophile is an e-commerce platform that offers a wide range of high-quality headphones, earphones, speakers.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartShoppingProvider>
          <Nav />
          <main>
            {children}
            <Footer />
          </main>
        </CartShoppingProvider>
      </body>
    </html>
  );
}
