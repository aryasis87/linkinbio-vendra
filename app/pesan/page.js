import { KATERING, SITE } from '@/lib/vendra';
import Kembali from '../components/Kembali';
import PreOrder from '../components/PreOrder';
import FormKatering from '../components/FormKatering';

export const metadata = {
  title: 'Pre-order & Kopi untuk Acara',
  description: 'Pre-order Kopi Vendra untuk diambil di kedai tanpa antre — pilih menu, jumlah, dan jam ambil — atau minta kopi untuk acara mulai 30 gelas.',
  alternates: { canonical: `${SITE}/pesan` },
};

export default function Pesan() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 font-display text-5xl">Pre-order</h1>
        <p className="rise mt-2 text-espresso/75" style={{ animationDelay: '0.06s' }}>Pilih menu dan jam ambil. Gelasmu sudah menunggu di rak depan.</p>
        <PreOrder />

        <section id="katering" aria-labelledby="katering-h" className="mt-14 scroll-mt-6">
          <h2 id="katering-h" className="font-display text-3xl">Kopi untuk acara</h2>
          <p className="mt-2 text-espresso/75">Kopi susu dan teh serai dalam galon termos, lengkap dengan gelas dan barista selama dua jam.</p>
          <dl className="card mt-4 divide-y divide-espresso/10 rounded-2xl">
            {KATERING.map(([j, h]) => <div key={j} className="flex justify-between px-5 py-3 text-sm"><dt>{j}</dt><dd className="font-bold">{h}</dd></div>)}
          </dl>
          <FormKatering />
        </section>
        <p className="mt-8 text-center text-xs text-espresso/70">Harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
