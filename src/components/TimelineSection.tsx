import React, { useState } from 'react';
import { TIMELINE_DATA, TimelineEvent } from '../data/buyaData';
import { Calendar, MapPin, CheckCircle2, Navigation } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredEvents = selectedCategory === 'all'
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter((e) => e.category === selectedCategory);

  const journeySteps = [
    { place: "Nagari Gelapung, Maninjau", year: "1915", desc: "Kelahiran di tepian danau, didikan ibunda Hj. Naimah & ayahanda H.M. Thalib" },
    { place: "Padang Panjang", year: "1925–1938", desc: "Kulliyatul Muballigh Thawalib, pendalaman ushul fiqih & tajdid" },
    { place: "Karesidenan Bengkulu", year: "1938–1950", desc: "Guru Mu'allimin Muhammadiyah, pimpinan eksekutif & Kantor Penerangan" },
    { place: "Bukittinggi", year: "1944", desc: "Delegasi resmi Konferensi Muhammadiyah se-Sumatera" },
    { place: "Kota Palembang", year: "1950–1997", desc: "Kepala Penerangan Sumsel, Masyumi, dosen IAIN, 19 tahun Ketua PWM Sumsel, MUI" }
  ];

  return (
    <section id="linimasa" className="py-16 lg:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-1">
            Rekam Jejak 1915 — 1997
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Linimasa Sejarah & Perjalanan Hayat
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            Menyusuri simpul-simpul pengabdian Buya Haji Muhammad Rasyid Thalib selama delapan dasawarsa mengabdi
            untuk persyarikatan dan umat Islam Nusantara.
          </p>
        </div>

        {/* Geographic Journey Strip */}
        <div className="bg-white p-6 border border-stone-200 rounded-lg shadow-2xs mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-medium mb-4">
            <Navigation className="w-4 h-4 text-emerald-800" />
            <span>Rute Geografis Pengabdian (Sumatera Barat &rarr; Bengkulu &rarr; Sumatera Selatan)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="relative p-3.5 bg-stone-50 border border-stone-200/80 rounded flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-emerald-800 font-semibold">{step.year}</div>
                  <div className="text-sm font-serif font-bold text-stone-900 mt-1">{step.place}</div>
                  <p className="text-xs text-stone-600 font-light mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
                <div className="text-[10px] text-stone-400 mt-2 text-right">Tahap 0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Filter Tabs (Buttons with click handlers) */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'Semua Peristiwa' },
            { id: 'pendidikan', label: 'Pendidikan' },
            { id: 'dakwah', label: 'Dakwah' },
            { id: 'kepemimpinan', label: 'Kepemimpinan' },
            { id: 'sejarah', label: 'Sejarah & Wafat' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-stone-300 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {filteredEvents.map((event, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-emerald-800 group-hover:scale-125 transition-transform" />

              <div className="bg-white p-5 sm:p-6 border border-stone-200 rounded-lg shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                    <span className="font-mono font-semibold text-stone-900 text-sm">{event.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{event.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                  {event.title}
                </h3>

                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {event.description}
                </p>

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-600">
                    {event.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
