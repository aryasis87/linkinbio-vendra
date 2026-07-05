import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmserif = DM_Serif_Display({ subsets: ["latin"], variable: "--font-dmserif", weight: "400" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const __jsonld = {"@context":"https://schema.org","@type":"CafeOrCoffeeShop","name":"Kopi Vendra","description":"Kedai kopi rumahan","url":"https://linkinbio-vendra.vercel.app","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-vendra.vercel.app"),
  title: "Kopi Vendra — Pesan & Kunjungi",
  description: "Link in bio kedai Kopi Vendra: menu favorit, pesan lewat GoFood/WhatsApp, atau mampir langsung.",
  applicationName: "Kopi Vendra",
  keywords: ["link in bio", "kedai kopi", "coffee shop", "pesan kopi", "umkm"],
  authors: [{ name: "Kopi Vendra" }],
  creator: "Kopi Vendra",
  publisher: "Kopi Vendra",
  alternates: { canonical: "https://linkinbio-vendra.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-vendra.vercel.app",
    siteName: "Kopi Vendra",
    title: "Kopi Vendra — Pesan & Kunjungi",
    description: "Link in bio kedai Kopi Vendra: menu favorit, pesan lewat GoFood/WhatsApp, atau mampir langsung.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kopi Vendra — Pesan & Kunjungi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi Vendra — Pesan & Kunjungi",
    description: "Link in bio kedai Kopi Vendra: menu favorit, pesan lewat GoFood/WhatsApp, atau mampir langsung.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${dmserif.variable} ${jakarta.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
