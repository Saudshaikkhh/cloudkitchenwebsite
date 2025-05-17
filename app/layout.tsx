import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/cart/CartDrawer";
import ClientWrapper from "@/components/ClientWrapper";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Bushi Bites | Cloud Kitchen",
  description: "We're your cozy cloud kitchen, serving love, comfort, and flavor straight to your doorstep. No dine-in, just divine in!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} min-h-screen`}>
        <ClientWrapper>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <CartDrawer />
          </CartProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}