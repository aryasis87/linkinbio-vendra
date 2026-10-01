'use client';

import { useState } from 'react';

export default function FormKatering() {
  const [selesai, setSelesai] = useState(false);
  const input = 'w-full rounded-xl border border-espresso/15 bg-foam px-4 py-3 focus:border-caramel-ink focus:outline-none';
  if (selesai) {
    return (
      <div role="status" className="card mt-5 rounded-2xl p-5">
        <p className="font-bold">Permintaan tercatat — kami balas dalam satu hari kerja.</p>
        <p className="mt-1 text-sm text-espresso/75">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
        <button type="button" onClick={() => setSelesai(false)} className="mt-4 rounded-full bg-latte px-4 py-2 text-sm font-bold">Isi ulang</button>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="card mt-5 grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
      <div>
        <label htmlFor="c-nama" className="mb-1 block text-sm font-bold">Nama / instansi</label>
        <input id="c-nama" required autoComplete="organization" className={input} />
      </div>
      <div>
        <label htmlFor="c-tanggal" className="mb-1 block text-sm font-bold">Tanggal acara</label>
        <input id="c-tanggal" type="date" required min="2026-10-05" className={input} />
      </div>
      <div>
        <label htmlFor="c-gelas" className="mb-1 block text-sm font-bold">Perkiraan gelas</label>
        <input id="c-gelas" type="number" min={30} defaultValue={50} required className={input} />
      </div>
      <div>
        <label htmlFor="c-surel" className="mb-1 block text-sm font-bold">Surel</label>
        <input id="c-surel" type="email" required autoComplete="email" className={input} />
      </div>
      <button type="submit" className="rounded-xl bg-espresso py-3 font-bold text-latte hover:bg-caramel-ink sm:col-span-2">Minta penawaran</button>
    </form>
  );
}
