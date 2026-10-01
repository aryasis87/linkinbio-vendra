'use client';

import { useState } from 'react';
import { MENU, SEMUA, rp } from '@/lib/vendra';

// Slot ambil tiap 15 menit, 08.15–21.45.
const SLOT = Array.from({ length: 55 }, (_, i) => 8 * 60 + 15 + i * 15).map((m) => `${String(Math.floor(m / 60)).padStart(2, '0')}.${String(m % 60).padStart(2, '0')}`);

export default function PreOrder() {
  const [jml, setJml] = useState({ kopsus: 1 });
  const [jam, setJam] = useState('09.00');
  const [selesai, setSelesai] = useState(false);
  const ubah = (id, d) => setJml((j) => ({ ...j, [id]: Math.max(0, Math.min(10, (j[id] || 0) + d)) }));
  const isi = SEMUA.filter((m) => jml[m.id]);
  const total = isi.reduce((s, m) => s + m.harga * jml[m.id], 0);
  const gelas = isi.reduce((s, m) => s + jml[m.id], 0);
  const tombol = 'grid h-8 w-8 place-items-center rounded-full bg-latte font-bold disabled:opacity-40';

  if (selesai) {
    return (
      <div role="status" className="card mt-8 rounded-2xl p-6 text-center">
        <p className="text-4xl" aria-hidden="true">🧾</p>
        <p className="mt-2 font-display text-2xl">Siap diambil pukul {jam}</p>
        <p className="mt-1 text-sm text-espresso/75">{gelas} item · {rp(total)} · bayar di kasir</p>
        <p className="mt-3 text-xs text-espresso/70">Ini purwarupa desain: tidak ada pesanan yang benar-benar dibuat.</p>
        <button type="button" onClick={() => setSelesai(false)} className="mt-5 rounded-full bg-espresso px-5 py-2.5 text-sm font-bold text-latte">Ubah pesanan</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (total) setSelesai(true); }} className="mt-8">
      {MENU.map((k) => (
        <fieldset key={k.kat} className="mt-6 first:mt-0">
          <legend className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-espresso/70">{k.kat}</legend>
          <ul className="card divide-y divide-espresso/10 rounded-2xl">
            {k.item.map((m) => (
              <li key={m.id} className="flex items-center gap-3 px-4 py-3">
                <span className="text-xl" aria-hidden="true">{m.emoji}</span>
                <span className="flex-1 text-sm"><span className="block font-bold">{m.nama}</span><span className="text-espresso/70">{rp(m.harga)}</span></span>
                <span className="flex items-center gap-2" role="group" aria-label={`Jumlah ${m.nama}`}>
                  <button type="button" onClick={() => ubah(m.id, -1)} disabled={!jml[m.id]} className={tombol} aria-label={`Kurangi ${m.nama}`}>−</button>
                  <span className="w-5 text-center font-bold">{jml[m.id] || 0}</span>
                  <button type="button" onClick={() => ubah(m.id, 1)} className={tombol} aria-label={`Tambah ${m.nama}`}>+</button>
                </span>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}

      <div className="sticky bottom-3 mt-8 rounded-2xl bg-espresso p-5 text-latte shadow-xl">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="p-jam" className="text-xs font-bold uppercase tracking-wide text-latte/80">Jam ambil</label>
              <select id="p-jam" value={jam} onChange={(e) => setJam(e.target.value)} className="mt-1 w-full rounded-xl bg-latte px-3 py-2 font-bold text-espresso">
                {SLOT.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="p-nama" className="text-xs font-bold uppercase tracking-wide text-latte/80">Nama di gelas</label>
              <input id="p-nama" required autoComplete="given-name" className="mt-1 w-full rounded-xl bg-latte px-3 py-2 font-bold text-espresso" />
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-xs text-latte/80" aria-live="polite">{gelas} item</p>
            <p className="font-display text-3xl">{rp(total)}</p>
          </div>
        </div>
        <button type="submit" disabled={!total} className="mt-4 w-full rounded-xl bg-caramel-ink py-3 font-bold text-white hover:bg-white hover:text-espresso disabled:cursor-not-allowed disabled:opacity-50">Pesan, ambil pukul {jam}</button>
        <p className="mt-2 text-center text-[11px] text-latte/75">Purwarupa — tidak ada pesanan yang dikirim.</p>
      </div>
    </form>
  );
}
