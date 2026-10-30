import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xl font-serif font-bold text-white tracking-tight">
              Buya H.M. Rasyid Thalib
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Situs Memorabilia Digital mengenang kiprah Buya Haji Muhammad Rasyid Thalib (1915–1997),
              Ulama Besar Sumatera Selatan, Tokoh Masyumi, Pendidik IAIN Raden Fatah, dan Ketua
              Pimpinan Wilayah Muhammadiyah Sumatera Selatan (1975–1995).
            </p>
            <div className="pt-2 text-xs font-serif italic text-emerald-400">
              &ldquo;Hidup-hidupilah Muhammadiyah, dan jangan mencari hidup dalam Muhammadiyah.&rdquo;
              <span className="block font-sans not-italic text-[11px] text-stone-500 mt-0.5">
                — Pesan K.H. Ahmad Dahlan yang senantiasa dihidupkan Buya Rasyid
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Navigasi Halaman
            </div>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <a href="#biografi" className="hover:text-white transition-colors">
                  Biografi & Riwayat Hidup
                </a>
              </li>
              <li>
                <a href="#linimasa" className="hover:text-white transition-colors">
                  Linimasa Jejak Langkah
                </a>
              </li>
              <li>
                <a href="#kutipan" className="hover:text-white transition-colors">
                  Kutipan & Wasiat Inspiratif
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">
                  Galeri Foto Dokumentasi
                </a>
              </li>
              <li>
                <a href="#doa-takzim" className="hover:text-white transition-colors">
                  Buku Doa & Kesaksian Sahabat
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Heritage */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Warisan Amal Usaha
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Di bawah kepemimpinan Buya Rasyid, berbagai amal usaha persyarikatan seperti Universitas Muhammadiyah
              Palembang (UMP), Rumah Sakit Islam, madrasah, dan panti asuhan terus berdiri tegak melayani umat
              hingga hari ini.
            </p>
            <div className="text-xs text-stone-500">
              Peristirahatan Terakhir: Pekuburan Umum Kamboja, Palembang.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Memorabilia Buya H.M. Rasyid Thalib. Dipersembahkan untuk generasi penerus dakwah Islam.
          </div>
          <div className="flex items-center gap-1.5 text-stone-500">
            <span>Dihimpun dengan penuh takzim</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>oleh cucunda Akhmad Khudri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
