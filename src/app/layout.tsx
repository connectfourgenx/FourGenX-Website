import type { Metadata, Viewport } from "next";
import { Exo } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { SoftBg } from "@/components/SoftBg";
import { site } from "@/lib/site";
import "./globals.css";

const exo = Exo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software Solutions`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  openGraph: {
    title: `${site.legalName}`,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f8fb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${exo.variable} h-full`}>
      <body className={`${exo.className} relative min-h-dvh w-full max-w-full`}>
        <SoftBg />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
