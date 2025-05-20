'use client';

import { Phone, Mail, MapPin, Globe, ShoppingCart, Clock } from 'lucide-react';
import img from 'next/image';

export default function Home() {
  const links = [
    { label: 'Website Resmi', url: 'https://bisnisku.com' },
    { label: 'Produk Terbaru', url: 'https://bisnisku.com/produk' },
    { label: 'Hubungi Kami', url: 'mailto:contact@bisnisku.com' },
    { label: 'Lokasi Toko', url: 'https://goo.gl/maps/abc123' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Floating abstract shapes */}
      <div className="absolute top-[-60px] left-[-60px] w-40 h-40 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-50px] right-[-50px] w-36 h-36 bg-purple-300 rounded-full opacity-20 blur-3xl animate-float-alt" />

      {/* Card */}
      <section className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-gray-800 font-sans">

        {/* Logo */}
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-indigo-300 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/images/p1.webp"
            alt="Logo Bisnis"
            className="w-full h-full object-cover bg-white"
          />
        </div>

        {/* Nama Bisnis */}
        <h1 className="text-3xl font-extrabold text-center mt-4 text-indigo-700 tracking-wide">
          NamaAnda
        </h1>

        {/* Tagline */}
        <p className="text-center text-indigo-500 mt-1 text-sm italic">
          Solusi Terbaik untuk Kebutuhan Anda
        </p>

        {/* Info Kontak */}
        <div className="mt-6 space-y-3 text-sm text-indigo-600">
          <div className="flex items-center gap-3">
            <Phone className="text-indigo-400" />
            <span>+62 812 3456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-400" />
            <span>contact@bisnisku.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-400" />
            <span>Jl. Merdeka No. 123, Jakarta</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-indigo-400" />
            <span>Senin - Jumat, 09:00 - 18:00</span>
          </div>
        </div>

        {/* Tombol Link */}
        <div className="mt-8 flex flex-col gap-4">
          {links.map(({ label, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-transform transform hover:scale-[1.03]"
            >
              <ShoppingCart className="text-white" />
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs text-indigo-300 select-none">
        © 2025 Sanzystore. All rights reserved.
      </footer>
    </main>
  );
}
