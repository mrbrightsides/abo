import React, { useState } from 'react';
import { QUOTES_DATA, QuoteItem } from '../data/buyaData';
import { Quote as QuoteIcon, Copy, Check, Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';

export const QuotesSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);
  const [selectedQuoteForCard, setSelectedQuoteForCard] = useState<QuoteItem | null>(null);

  const filteredQuotes = selectedTheme === 'all'
    ? QUOTES_DATA
    : QUOTES_DATA.filter((q) => q.theme === selectedTheme);

  const handleCopy = async (item: QuoteItem) => {
    const text = `"${item.quote}" — Buya H.M. Rasyid Thalib (1915–1997)\nSumber: ${item.source}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleSpeak = (item: QuoteItem) => {
    if (!('speechSynthesis' in window)) {
      alert('Peramban Anda tidak mendukung pembacaan suara sintetis.');
      return;
    }

    if (activeSpeakingId === item.id) {
      window.speechSynthesis.cancel();
      setActiveSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.quote);
    utterance.lang = 'id-ID';
    utterance.rate = 0.88;
    utterance.pitch = 0.95;

    utterance.onend = () => setActiveSpeakingId(null);
    utterance.onerror = () => setActiveSpeakingId(null);

    window.speechSynthesis.speak(utterance);
    setActiveSpeakingId(item.id);
  };

  return (
    <section id="kutipan" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-1">
            Hikmah & Nasihat
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Kutipan Inspiratif Buya Rasyid Thalib
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            Untaian nasihat tentang keikhlasan berkhidmat di persyarikatan, ketelitian menuntut ilmu agama,
            serta persaudaraan universal tanpa membedakan latar belakang suku dan etnis.
          </p>
        </div>

        {/* Theme Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'Semua Tema' },
            { id: 'Dakwah Santun', label: 'Dakwah Santun' },
            { id: 'Ketelitian Ilmu', label: 'Ketelitian Ilmu' },
            { id: 'Ukhuwah & Etnis', label: 'Ukhuwah & Etnis' },
            { id: 'Ikhlas Berkhidmat', label: 'Ikhlas Berkhidmat' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTheme(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedTheme === tab.id
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 border border-stone-200 rounded-lg shadow-2xs flex flex-col justify-between hover:border-emerald-800/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-800 font-medium">
                    {item.theme}
                  </span>
                  <QuoteIcon className="w-5 h-5 text-stone-300" />
                </div>

                {/* Editorial Pull Quote */}
                <p className="font-serif italic text-base sm:text-lg text-stone-900 leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Context note */}
                <div className="pt-2 border-t border-stone-100">
                  <div className="text-xs text-stone-600 font-light leading-relaxed">
                    <span className="font-medium text-stone-700">Konteks: </span>
                    {item.context}
                  </div>
                </div>
              </div>

              {/* Card Footer: Source & Interactive Actions */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                <div className="text-[11px] text-stone-500 truncate max-w-[170px]" title={item.source}>
                  {item.source}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleSpeak(item)}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      activeSpeakingId === item.id
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                    title="Dengarkan pembacaan kutipan"
                  >
                    {activeSpeakingId === item.id ? (
                      <VolumeX className="w-4 h-4 text-amber-700" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                    title="Salin kutipan ke papan klip"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedQuoteForCard(item)}
                    className="px-2 py-1 text-[11px] font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded transition-colors cursor-pointer"
                  >
                    Kartu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quote Card Modal Preview */}
        {selectedQuoteForCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-[#FBF9F5] max-w-lg w-full p-8 border border-stone-300 rounded-lg shadow-xl relative space-y-6">
              <div className="text-center space-y-1">
                <div className="text-xs uppercase tracking-widest text-emerald-900 font-semibold">
                  Kartu Kutipan Memorabilia
                </div>
                <div className="text-xs text-stone-500">Buya Haji Muhammad Rasyid Thalib (1915–1997)</div>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-lg text-center space-y-4 shadow-inner">
                <Sparkles className="w-5 h-5 text-amber-700 mx-auto" />
                <p className="font-serif italic text-lg sm:text-xl text-stone-900 leading-relaxed">
                  &ldquo;{selectedQuoteForCard.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-stone-200 text-xs text-stone-600">
                  <div className="font-semibold text-stone-900">Buya H.M. Rasyid Thalib</div>
                  <div>Ketua PWM Sumatera Selatan 1975–1995</div>
                  <div className="text-[11px] text-stone-400 mt-1">{selectedQuoteForCard.source}</div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => handleCopy(selectedQuoteForCard)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks Lengkap</span>
                </button>
                <button
                  onClick={() => setSelectedQuoteForCard(null)}
                  className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
