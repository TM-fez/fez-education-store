import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fez Education - Professional Training Solutions for Botswana",
  description: "Corporate training, workforce development, and operational excellence resources for organizations in the SADC region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
