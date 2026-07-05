import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmserif = DM_Serif_Display({ subsets: ["latin"], variable: "--font-dmserif", weight: "400" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Kopi Vendra — Pesan & Kunjungi",
  description: "Kedai kopi rumahan. Menu favorit, pesan lewat GoFood/WhatsApp, atau mampir langsung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${dmserif.variable} ${jakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}
