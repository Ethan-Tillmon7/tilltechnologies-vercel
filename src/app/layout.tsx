import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TillTechnologies.ai | Ethan Tillmon",
  description:
    "Portfolio of Ethan Tillmon — Software Engineer, Builder, Runner",
  keywords: [
    "portfolio",
    "software engineer",
    "Ethan Tillmon",
    "TillTechnologies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-lato antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
