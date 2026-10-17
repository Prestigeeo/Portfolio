import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  // EDIT HERE: Update this once you decide the exact professional title you want.
  title: "Prestige | AI Engineering & Data Science",
  description: "Prestige's AI engineering and data science portfolio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="page-shell"><Header /><main>{children}</main><Footer /></div></body></html>;
}
