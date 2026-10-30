import React, { useState } from 'react';
import { BIOGRAPHY_SECTIONS, BUYA_PROFILE } from '../data/buyaData';
import { BookOpen, MapPin, Award, GraduationCap, Printer, ChevronRight } from 'lucide-react';

export const BiographySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="biografi" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-6 mb-12 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-1">
              Catatan Biografi Lengkap
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Biografi Buya H.M. Rasyid Thalib
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Naskah sejarah rekonstruksi pengabdian dari Danau Maninjau, Bengkulu, hingga Palembang.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan Naskah</span>
            </button>
          </div>
        </div>

        {/* 2-Column Asymmetric Grid: 70% Narrative / 30% Curatorial Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Reading Column (70%) */}
          <div className="lg:col-span-8">
            {/* Chapter Jump Selector */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-stone-100/90 rounded-lg border border-stone-200 mb-8 no-print">
              {BIOGRAPHY_SECTIONS.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all text-left whitespace-nowrap cursor-pointer ${
                    activeTab === idx
                      ? 'bg-white text-stone-900 shadow-xs border border-stone-200 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  Bab {idx + 1}
                </button>
              ))}
            </div>

            {/* Active Chapter Presentation */}
            <article className="max-w-prose space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <div className="text-xs font-semibold tracking-wider uppercase text-emerald-900">
                  {BIOGRAPHY_SECTIONS[activeTab].subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                  {BIOGRAPHY_SECTIONS[activeTab].title}
                </h3>
              </div>

              {/* Editorial text with drop cap for the first paragraph */}
              <div className="space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed font-light">
                {BIOGRAPHY_SECTIONS[activeTab].content.split('\n\n').map((paragraph, pIdx) => {
                  if (pIdx === 0) {
                    return (
                      <p
                        key={pIdx}
                        className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-emerald-950 first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    );
                  }
                  return (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Chapter Footer Navigation */}
              <div className="pt-8 mt-10 border-t border-stone-200 flex items-center justify-between no-print">
                <button
                  onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                  disabled={activeTab === 0}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &larr; Bab Sebelumnya
                </button>

                <span className="text-xs text-stone-500 font-mono">
                  {activeTab + 1} / {BIOGRAPHY_SECTIONS.length}
                </span>

                <button
                  onClick={() => setActiveTab((prev) => Math.min(BIOGRAPHY_SECTIONS.length - 1, prev + 1))}
                  disabled={activeTab === BIOGRAPHY_SECTIONS.length - 1}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Bab Berikutnya &rarr;
                </button>
              </div>
            </article>
          </div>

          {/* Curatorial Margin Sidebar (30%) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="bg-white p-5 sm:p-6 border border-stone-200 rounded-lg shadow-2xs space-y-4">
              <div className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Profil Riwayat Hidup
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs text-stone-500">Nama Lengkap</div>
                  <div className="font-serif font-semibold text-stone-900 text-base">{BUYA_PROFILE.fullName}</div>
                </div>
                <div>
                  <div className="text-xs text-stone-500">Tempat & Tahun Lahir</div>
                  <div className="text-stone-800 flex items-start gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>{BUYA_PROFILE.birthPlace} (1915)</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-stone-500">Orang Tua</div>
                  <div className="text-stone-800 text-xs leading-relaxed mt-0.5 space-y-1">
                    <div><strong>Ayah:</strong> {BUYA_PROFILE.parents.father}</div>
                    <div><strong>Ibu:</strong> {BUYA_PROFILE.parents.mother}</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-stone-500">Riwayat Pendidikan</div>
                  <ul className="text-xs text-stone-800 list-disc list-inside mt-0.5 space-y-0.5">
                    {BUYA_PROFILE.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Amanah & Jabatan Penting */}
            <div className="bg-white p-5 sm:p-6 border border-stone-200 rounded-lg shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-900 font-medium">
                <Award className="w-4 h-4 text-emerald-800" />
                <span>Amanah Bersejarah</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                {BUYA_PROFILE.roles.map((role, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warisan Karya Literasi */}
            <div className="bg-amber-50/70 p-5 sm:p-6 border border-amber-200/80 rounded-lg space-y-2.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-medium">
                <BookOpen className="w-4 h-4 text-amber-800" />
                <span>Warisan Karya Tulis</span>
              </div>
              <div className="text-xs text-stone-800 leading-relaxed space-y-2">
                <p>
                  <strong>Buku Diterbitkan:</strong> <em>"{BUYA_PROFILE.publishedBook}"</em> — dicetak khusus bagi mahasiswa IAIN & UMP.
                </p>
                <p className="text-stone-600">
                  <strong>Rencana Monumental:</strong> <em>"{BUYA_PROFILE.plannedBook}"</em> — belum sempat dirangkum tuntas akibat tingginya dinamika dakwah keliling ke daerah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
