'use client';
import { useEffect, useState } from 'react';
import { MessageCircle, MapPin, Instagram, Bike, Star, Clock } from 'lucide-react';

const MENU = [
  { emoji: '☕', nama: 'Kopi Susu Vendra', harga: '18K', badge: 'Terlaris' },
  { emoji: '🍮', nama: 'Caramel Latte', harga: '24K' },
  { emoji: '🍵', nama: 'Matcha Oat', harga: '26K' },
  { emoji: '🥐', nama: 'Butter Croissant', harga: '20K' },
];

const CTA = [
  { icon: Bike, label: 'Pesan via GoFood', sub: 'Antar 15–25 menit', url: '#', primary: true },
  { icon: MessageCircle, label: 'Order WhatsApp', sub: 'Pre-order & katering', url: 'https://wa.me/6281234567890' },
  { icon: MapPin, label: 'Rute ke Kedai', sub: 'Jl. Melati No. 5, Bandung', url: 'https://maps.google.com' },
  { icon: Instagram, label: '@kopivendra', sub: 'Promo & menu baru', url: 'https://instagram.com' },
];

export default function Home() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const h = new Date().getHours();
    setOpen(h >= 8 && h < 22);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Papan nama */}
        <header className="rise text-center">
          <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-espresso text-5xl">
            <span aria-hidden="true">☕</span>
            <span className="steam absolute -top-1 left-8 h-4 w-1 rounded-full bg-espresso/30" aria-hidden="true" />
            <span className="steam2 absolute -top-1 left-12 h-4 w-1 rounded-full bg-espresso/30" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-display text-4xl">Kopi Vendra</h1>
          <p className="mt-1 text-sm text-espresso/60">Kedai kopi rumahan — diseduh pelan, disajikan hangat.</p>
          <div className="mt-3 flex items-center justify-center gap-3 text-xs font-semibold">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${open ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
              <span className={`h-2 w-2 rounded-full ${open ? 'bg-emerald-500' : 'bg-red-500'}`} /> {open ? 'Sedang buka' : 'Sedang tutup'}
            </span>
            <span className="inline-flex items-center gap-1 text-espresso/55"><Clock size={12} /> 08.00–22.00</span>
            <span className="inline-flex items-center gap-1 text-espresso/55"><Star size={12} className="fill-caramel text-caramel" /> 4,9</span>
          </div>
        </header>

        {/* Menu favorit */}
        <section className="rise mt-7" style={{ animationDelay: '0.12s' }} aria-label="Menu favorit">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-espresso/45">— Menu favorit —</p>
          <div className="grid grid-cols-2 gap-3">
            {MENU.map((m) => (
              <div key={m.nama} className="card relative rounded-2xl p-4 text-center">
                {m.badge && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-caramel px-2.5 py-0.5 text-[10px] font-bold text-white">{m.badge}</span>}
                <p className="text-3xl">{m.emoji}</p>
                <p className="mt-1.5 text-sm font-bold">{m.nama}</p>
                <p className="font-display text-lg text-caramel">{m.harga}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA links */}
        <nav className="mt-6 space-y-3" aria-label="Pesan dan kontak">
          {CTA.map((c, i) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rise flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 ${c.primary ? 'bg-espresso text-latte shadow-lg hover:shadow-xl' : 'card hover:border-caramel/40'}`}
              style={{ animationDelay: `${0.24 + i * 0.07}s` }}
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${c.primary ? 'bg-caramel text-white' : 'bg-latte text-espresso'}`}><c.icon size={19} /></span>
              <span className="flex-1">
                <span className="block font-bold">{c.label}</span>
                <span className={`block text-xs ${c.primary ? 'text-latte/70' : 'text-espresso/55'}`}>{c.sub}</span>
              </span>
            </a>
          ))}
        </nav>

        <p className="rise mt-8 text-center text-xs text-espresso/40" style={{ animationDelay: '0.6s' }}>© {new Date().getFullYear()} Kopi Vendra · Bandung</p>
      </div>
    </main>
  );
}
