import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mickenev.com"),
  title: "Mick Enev | Software Engineer & Builder",
  description: "Software engineer and founder building web applications, custom software, and digital products.",
  icons: { icon: "/favicon.png" },
  openGraph: { title: "Mick Enev | Software Engineer & Builder", description: "Software engineer and founder building web applications, custom software, and digital products.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Mick Enev | Software Engineer & Builder", description: "Software engineer and founder building web applications, custom software, and digital products." },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
