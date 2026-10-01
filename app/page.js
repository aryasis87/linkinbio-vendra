'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ClipboardList, Coffee, MapPin, Users, Star, Clock } from 'lucide-react';
import { KEDAI, LINKS, MENU, sedangBuka, rp } from '@/lib/vendra';

const IKON = { pesan: ClipboardList, menu: Coffee, lokasi: MapPin, katering: Users };
const FAVORIT = MENU.flatMap((k) => k.item).filter((m) => ['kopsus', 'latte', 'matcha', 'croissant'].includes(m.id));

export default function Home() {
  const [buka, setBuka] = useState(null);
  useEffect(() => {
    const f = () => setBuka(sedangBuka());
    f();
    const t = setInterval(f, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <header className="rise text-center">
          <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-espresso text-5xl">
            <span aria-hidden="true">☕</span>
            <span className="steam absolute -top-1 left-8 h-4 w-1 rounded-full bg-espresso/30" aria-hidden="true" />
            <span className="steam2 absolute -top-1 left-12 h-4 w-1 rounded-full bg-espresso/30" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-display text-4xl">{KEDAI.nama}</h1>
          <p className="mt-1 text-sm text-espresso/75">Kedai kopi rumahan — diseduh pelan, disajikan hangat.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <span role="status" className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${buka === null ? 'bg-espresso/10 text-espresso/75' : buka ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
              <span aria-hidden="true" className={`h-2 w-2 rounded-full ${buka === null ? 'bg-espresso/40' : buka ? 'bg-emerald-600' : 'bg-red-600'}`} /> {buka === null ? 'Memeriksa jam…' : buka ? 'Sedang buka' : 'Sedang tutup'}
            </span>
            <span className="inline-flex items-center gap-1 text-espresso/75"><Clock size={12} aria-hidden="true" /> 08.00–22.00 WIB</span>
            <span className="inline-flex items-center gap-1 text-espresso/75"><Star size={12} className="fill-caramel text-caramel" aria-hidden="true" /> 4,9 dari 312 ulasan (contoh)</span>
          </div>
        </header>

        <section className="rise mt-7" style={{ animationDelay: '0.12s' }} aria-labelledby="fav">
          <h2 id="fav" className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-espresso/70">— Menu favorit —</h2>
          <ul className="grid grid-cols-2 gap-3">
            {FAVORIT.map((m) => (
              <li key={m.id} className="card relative rounded-2xl p-4 text-center">
                {m.laris && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-caramel-ink px-2.5 py-0.5 text-[10px] font-bold text-white">Terlaris</span>}
                <p className="text-3xl" aria-hidden="true">{m.emoji}</p>
                <p className="mt-1.5 text-sm font-bold">{m.nama}</p>
                <p className="font-display text-lg text-caramel-ink">{rp(m.harga)}</p>
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-6 space-y-3" aria-label="Pesan dan informasi">
          {LINKS.map((c, i) => {
            const Ikon = IKON[c.ikon];
            return (
              <Link
                key={c.label}
                href={c.href}
                className={`rise flex items-center gap-4 rounded-2xl p-3.5 transition hover:-translate-y-0.5 ${c.utama ? 'bg-espresso text-latte shadow-lg' : 'card'}`}
                style={{ animationDelay: `${0.2 + i * 0.07}s` }}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${c.utama ? 'bg-caramel-ink text-white' : 'bg-latte text-espresso'}`}><Ikon size={19} aria-hidden="true" /></span>
                <span className="flex-1">
                  <span className="block font-bold">{c.label}</span>
                  <span className={`block text-xs ${c.utama ? 'text-latte/80' : 'text-espresso/70'}`}>{c.sub}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <p className="rise mt-7 text-center text-sm text-espresso/75" style={{ animationDelay: '0.55s' }}>Promo & menu baru di Instagram {KEDAI.handle}</p>
        <p className="rise mt-3 text-center text-xs text-espresso/70" style={{ animationDelay: '0.6s' }}>Kedai fiktif untuk purwarupa desain · Bandung</p>
      </div>
    </main>
  );
}
