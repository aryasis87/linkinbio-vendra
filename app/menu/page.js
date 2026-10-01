import Link from 'next/link';
import { JAM, KEDAI, MENU, SITE, rp } from '@/lib/vendra';
import Kembali from '../components/Kembali';

export const metadata = {
  title: 'Menu & Lokasi',
  description: 'Menu lengkap Kopi Vendra — kopi, bukan kopi, dan kudapan dengan harga — plus alamat dan jam buka kedai di Bandung.',
  alternates: { canonical: `${SITE}/menu` },
};

export default function Menu() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 font-display text-5xl">Menu</h1>
        <p className="rise mt-2 text-espresso/75" style={{ animationDelay: '0.06s' }}>Semua harga sudah termasuk pajak. Kopi bisa panas atau dingin.</p>

        {MENU.map((k, i) => (
          <section key={k.kat} aria-labelledby={`k-${i}`} className="rise mt-10" style={{ animationDelay: `${0.1 + i * 0.06}s` }}>
            <h2 id={`k-${i}`} className="font-display text-3xl">{k.kat}</h2>
            <ul className="card mt-4 divide-y divide-espresso/10 rounded-2xl">
              {k.item.map((m) => (
                <li key={m.id} className="flex items-center gap-4 px-5 py-4">
                  <span className="text-2xl" aria-hidden="true">{m.emoji}</span>
                  <span className="flex-1">
                    <span className="block font-bold">{m.nama}{m.laris && <span className="ml-2 rounded-full bg-caramel-ink px-2 py-0.5 align-middle text-[10px] font-bold text-white">Terlaris</span>}</span>
                    <span className="text-xs text-espresso/70">{m.ket}</span>
                  </span>
                  <span className="font-display text-lg text-caramel-ink">{rp(m.harga)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section id="lokasi" aria-labelledby="lokasi-h" className="mt-14 scroll-mt-6">
          <h2 id="lokasi-h" className="font-display text-3xl">Lokasi & jam buka</h2>
          <div className="card mt-4 rounded-2xl p-6">
            <p className="font-bold">{KEDAI.alamat}</p>
            <p className="mt-1 text-sm text-espresso/75">Parkir motor di depan, sepeda di samping kedai.</p>
            <dl className="mt-5 space-y-2 text-sm">
              {JAM.map(([h, j]) => <div key={h} className="flex justify-between border-b border-dashed border-espresso/15 pb-2"><dt>{h}</dt><dd className="font-bold">{j} WIB</dd></div>)}
            </dl>
          </div>
        </section>

        <Link href="/pesan" className="mt-10 flex justify-center rounded-2xl bg-espresso px-6 py-4 font-bold text-latte hover:bg-caramel-ink">Pre-order, ambil tanpa antre</Link>
        <p className="mt-6 text-center text-xs text-espresso/70">Harga dan alamat adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
