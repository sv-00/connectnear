import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ConnectNear — Premium IoT Infrastructure for Businesses",
    template: "%s | ConnectNear",
  },
  description:
    "Custom-engineered IoT solutions for businesses. Access control, environmental automation, resource monitoring, and remote management — tailored to your operation.",
  keywords: [
    "IoT solutions",
    "smart building automation",
    "NFC door lock",
    "access control system",
    "water tank automation",
    "remote monitoring",
    "IoT infrastructure",
    "commercial IoT",
    "smart office",
    "connectnear",
    "dopolabs",
    "IoT Kerala",
    "building automation India",
  ],
  authors: [{ name: "ConnectNear" }],
  creator: "ConnectNear by DopoLabs",
  metadataBase: new URL("https://connectnear.dopolabs.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://connectnear.dopolabs.com",
    siteName: "ConnectNear",
    title: "ConnectNear — Premium IoT Infrastructure for Businesses",
    description:
      "Custom-engineered IoT solutions. Access control, environmental automation, resource monitoring — tailored to your operation.",
  },
  twitter: {
    card: "summary",
    title: "ConnectNear — Premium IoT Infrastructure for Businesses",
    description:
      "Custom-engineered IoT solutions. Access control, automation, monitoring — tailored to your operation.",
  },
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    apple: "/favicon.svg?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "@container")}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
