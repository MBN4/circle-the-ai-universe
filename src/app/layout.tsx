import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/MouseFollower";
import { WaterBackground } from "@/components/WaterBackground";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ProModal } from "@/components/ProModal";
import { GeminiPlayground } from "@/components/GeminiPlayground";
import { StackProvider } from "@/context/StackContext";
import { AuthProvider } from "@/context/AuthContext";
import { SITE_CONFIG } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Circle | The AI Universe Directory & Workflows",
    template: "%s | Circle AI",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "AI Tools",
    "AI Workflows",
    "AI Directory",
    "Compare AI Tools",
    "AI ROI Calculator",
    "Open Source AI"
  ],
  authors: [{ name: "Circle Team" }],
  creator: "Circle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Circle - The AI Universe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen mesh-gradient text-white overflow-x-hidden selection:bg-dark-accent selection:text-white`}>
        <AuthProvider>
          <StackProvider>
            <LoadingScreen />
            <WaterBackground />
            <MouseFollower />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
            <ProModal />
            <GeminiPlayground />
          </StackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}