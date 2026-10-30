import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/buyaData';
import { Maximize2, X, Calendar, MapPin, Info, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri" className="py-16 lg:py-24 bg-stone-100/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-1">
            Dokumentasi & Arsip Visual
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Galeri Foto Dokumentasi Sejarah
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            Koleksi arsip fotografi sejarah merekam jejak langkah Buya Rasyid: dari perguruan Thawalib Padang Panjang,
            meja kerja telaah kitab di Palembang, hingga momen bersejarah dakwah bersama mualaf keturunan Tionghoa.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'Semua Koleksi' },
            { id: 'portret', label: 'Portret Resmi' },
            { id: 'keilmuan', label: 'Meja Telaah Kitab' },
            { id: 'pendidikan', label: 'Thawalib Padang Panjang' },
            { id: 'dakwah-inklusif', label: 'Dakwah Mualaf Tionghoa' },
            { id: 'sejarah-kota', label: 'Palembang & Musi' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white p-3.5 border border-stone-200 rounded-lg shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-stone-100 mb-3.5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 sepia-[10%] group-hover:sepia-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback UI to prevent broken image
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-4', 'text-stone-400');
                        parent.innerHTML = `<svg class="w-10 h-10 mb-2 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span class="text-xs text-stone-500 text-center">${item.title}</span>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-2.5 right-2.5 p-1.5 bg-stone-900/70 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-mono">{item.year}</span>
                    <span className="truncate max-w-[150px]">{item.location}</span>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-base group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 px-1">
                <span className="uppercase tracking-wider">Katalog Arsip</span>
                <span className="text-emerald-900 font-medium group-hover:underline">Buka Detail &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs">
            <div className="bg-[#FBF9F5] max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-300 rounded-lg shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 text-stone-700 hover:text-stone-950 bg-stone-100/90 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Tutup pratinjau arsip"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Large Display */}
                <div className="lg:col-span-7 bg-stone-900 flex items-center justify-center p-4 min-h-[340px] sm:min-h-[420px]">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Archival Metadata Sidebar */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                      Arsip Dokumentasi Bersejarah
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
                      {activeItem.title}
                    </h3>

                    {/* Metadata Definition List */}
                    <dl className="text-xs space-y-2.5 border-y border-stone-200 py-3.5 text-stone-700">
                      <div className="flex justify-between">
                        <dt className="text-stone-500 font-medium">Tahun / Periode</dt>
                        <dd className="font-mono text-stone-900 font-semibold">{activeItem.year}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-stone-500 font-medium">Lokasi</dt>
                        <dd className="text-stone-900 text-right">{activeItem.location}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-stone-500 font-medium">Kategori Arsip</dt>
                        <dd className="uppercase text-emerald-900 font-medium">{activeItem.category}</dd>
                      </div>
                    </dl>

                    <div>
                      <div className="text-xs font-semibold text-stone-900 mb-1">Deskripsi Visual:</div>
                      <p className="text-xs text-stone-600 font-light leading-relaxed">
                        {activeItem.caption}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-stone-900 mb-1">Konteks Sejarah:</div>
                      <p className="text-xs text-stone-700 font-light leading-relaxed bg-stone-100 p-3 rounded border border-stone-200">
                        {activeItem.historicalContext}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      Memorabilia Buya H.M. Rasyid Thalib
                    </span>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-4 py-1.5 text-xs font-medium text-stone-900 bg-stone-200 hover:bg-stone-300 rounded transition-colors cursor-pointer"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
