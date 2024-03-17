import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Pie from "@/components/Pie";
import { titleFont } from "@/config/fonts";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El rincón de la cerveza",
  description: "Tienda online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const NavbarMovil = dynamic(() => import('@/components/NavbarMovil'), { ssr: false })
  return (
    <html lang="es">
      <body className={`${titleFont.className} text-sm`}>
        <SessionAuthProvider>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="block md:hidden">
            <NavbarMovil />
          </div>
          {children}

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
            async
          ></script>
          <Pie />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
