import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/AppContext";
import Background from "@/components/Background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khoi — Developer & Designer",
  description:
    "Personal profile of Khoi — developer and designer of websites, applications, tools, and iOS solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <Background />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
