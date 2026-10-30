import React from 'react';
import { BookOpenCheck, Users, Building2, Feather, Heart, Globe2 } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-2">
            Nilai & Karakter Keteladanan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Tiga Pilar Keteladanan Buya Rasyid Thalib
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Menyelami warisan nilai kepemimpinan Buya Rasyid yang menjadikannya ulama yang dicintai dan disegani
            oleh seluruh lapisan masyarakat Sumatera Selatan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1: Ketelitian Ilmiah */}
          <div className="bg-[#FBF9F5] p-6 sm:p-7 border border-stone-200 rounded-lg shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 mb-5">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2.5">
                Ketelitian Ilmiah & Menulis Tangan
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Saat mempersiapkan materi khutbah hari besar, muktamar, maupun raker tarjih, Buya membuka seluruh kitab rujukan.
                Meja dan lantai dipenuhi buku bertumpuk, tak boleh diganggu hingga larut malam. Seluruh naskah disusun dengan
                tulisan tangan yang rapi dan bersandar dalil shahih.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <Feather className="w-3.5 h-3.5 text-amber-700" />
              <span>Warisan: Buku Kemuhammadiyahan & Catatan Fiqih</span>
            </div>
          </div>

          {/* Pilar 2: Dakwah Inklusif & Mualaf Tionghoa */}
          <div className="bg-[#FBF9F5] p-6 sm:p-7 border border-stone-200 rounded-lg shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-800 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2.5">
                Ukhuwah Lintas Etnis & Rangkul Mualaf
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Pada dekade 1970-an, Buya membuktikan Islam rahmatan lil 'alamin dengan mendukung penuh ulama keturunan
                Tionghoa, K.H. Abdul Halim (Lim Kia Joe). Buya turun langsung membina dan mengayomi masyarakat muslim
                etnis Tionghoa di Palembang dengan kehangatan tanpa sekat.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <Heart className="w-3.5 h-3.5 text-emerald-700" />
              <span>Teladan: Kerukunan MUI & Forum Lintas Agama</span>
            </div>
          </div>

          {/* Pilar 3: Membesarkan Amal Usaha */}
          <div className="bg-[#FBF9F5] p-6 sm:p-7 border border-stone-200 rounded-lg shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-800 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2.5">
                Melipatgandakan Amal Usaha (AUM)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Selama 19 tahun memimpin PWM Sumsel, sekolah, madrasah, Rumah Sakit Islam, dan Universitas Muhammadiyah
                Palembang (UMP) berkembang pesat. Buya piawai berdiplomasi santun dengan bupati, gubernur, pemerintah
                pusat, hingga menjalin bantuan dari Arab Saudi.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <Globe2 className="w-3.5 h-3.5 text-stone-700" />
              <span>Capaian: Fondasi kokoh UMP & Fasilitas Kesehatan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
