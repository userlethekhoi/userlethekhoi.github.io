import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Le The Khoi | Software Engineer & Designer",
  description: "Personal profile of Le The Khoi, a Software Engineer & Designer from Vietnam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
