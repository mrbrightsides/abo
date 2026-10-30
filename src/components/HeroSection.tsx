import React, { useState } from 'react';
import { Volume2, VolumeX, BookOpen, Sparkles, ChevronRight, Share2, Check, RefreshCw, Eye } from 'lucide-react';
import { BUYA_PROFILE } from '../data/buyaData';

interface HeroSectionProps {
  onScrollToBio: () => void;
  onScrollToGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToBio, onScrollToGallery }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [photoMode, setPhotoMode] = useState<'official' | 'hajj'>('official');

  const heroSpeechText = `Mengenang Buya Haji Muhammad Rasyid Thalib, 1915 hingga 1997. Ulama besar Sumatera Selatan, alumni Thawalib Padang Panjang, da'i kondang, dan mantan Ketua Pimpinan Wilayah Muhammadiyah Sumatera Selatan selama sembilan belas tahun. Sosok pembina ukhuwah Islamiyah yang senantiasa meneliti puluhan kitab dengan penuh kesantunan.`;

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur pemutaran suara peramban tidak didukung.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(heroSpeechText);
    utterance.lang = 'id-ID';
    utterance.rate = 0.9;
    utterance.pitch = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const currentImageSrc = photoMode === 'official'
    ? '/assets/buya_rasyid_photo.jpg'
    : '/assets/buya_haji_dan_istri.jpg';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Subtle ambient parchment backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e1d8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Tagline */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium">
            Arsip Sejarah & Tokoh Inspiratif Muhammadiyah Sumatera Selatan
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-stone-500">
            <span>Maninjau 1915</span>
            <span aria-hidden="true">·</span>
            <span>Palembang 1997</span>
          </div>
        </div>

        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Descriptive Typography & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-900 bg-emerald-100/70 px-2.5 py-1 rounded">
                Memorabilia Sang Pendidik & Pemersatu Umat
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
                Buya Haji Muhammad Rasyid Thalib
              </h1>
              <p className="text-base sm:text-lg text-stone-700 font-serif italic">
                (1915 – 1997 / 1333 – 1417 H)
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed text-base sm:text-lg font-light text-pretty">
              Alumni Thawalib Padang Panjang, da’i kondang, akademisi IAIN Raden Fatah, mantan Kepala Penerangan
              Provinsi Sumatera Selatan, serta tokoh sentral Masyumi 1950-an. Memimpin Pimpinan Wilayah Muhammadiyah
              Sumatera Selatan selama <span className="font-semibold text-stone-900">19 tahun (1975–1995)</span> dan
              Ketua Majelis Ulama Indonesia (MUI) Sumsel. Dikenal atas dakwahnya yang santun, ukhuwah inklusif bersama mualaf
              Tionghoa, serta ketelitian telaah puluhan kitab bertulis tangan.
            </p>

            {/* Quick Action Ribbon */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onScrollToBio}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-900 text-stone-50 text-sm font-medium rounded-md hover:bg-emerald-950 transition-colors shadow-xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Jelajahi Biografi Lengkap</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onScrollToGallery}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-stone-300 text-stone-800 text-sm font-medium rounded-md hover:bg-stone-100 hover:text-stone-950 transition-colors cursor-pointer"
              >
                <span>Lihat Koleksi Arsip</span>
              </button>

              {/* Audio Listen Speech Toggle */}
              <button
                onClick={handleToggleSpeech}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium rounded-md transition-colors cursor-pointer border ${
                  isPlayingAudio
                    ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-300'
                }`}
                title="Dengarkan pengantar audio memorabilia Buya Rasyid"
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-amber-800" />
                    <span>Hentikan Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                    <span>Dengarkan Pengantar</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 text-stone-600 hover:text-stone-950 border border-stone-300 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                title="Salin tautan memorabilia"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Quote of the Day callout */}
            <div className="p-4 bg-stone-100/90 border border-stone-200 rounded-md text-stone-700 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-amber-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Pesan Wasiat Dakwah</span>
              </div>
              <p className="font-serif italic text-sm text-stone-800 leading-snug">
                &ldquo;Jangan naik ke mimbar membawa prasangka. Bukalah kitab-kitab muktabar sampai mejamu penuh dan lantai terisi rujukan. Umat berhak atas kepastian ilmu, bukan perkiraan.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Framed Archival Portrait with Restored / Original Toggle */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm sm:max-w-md bg-stone-100 p-3 sm:p-4 border border-stone-300 shadow-sm rounded-lg space-y-3">
              {/* Photo Mode Switcher */}
              <div className="flex items-center justify-between bg-stone-200/70 p-1 rounded-md text-xs">
                <button
                  type="button"
                  onClick={() => setPhotoMode('official')}
                  className={`flex-1 py-1.5 px-2 rounded font-medium transition-all text-center cursor-pointer ${
                    photoMode === 'official'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  📷 Potret Resmi
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoMode('hajj')}
                  className={`flex-1 py-1.5 px-2 rounded font-medium transition-all text-center cursor-pointer ${
                    photoMode === 'hajj'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  🕋 Bersama Istri (Haji)
                </button>
              </div>

              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-stone-200 shadow-xs">
                <img
                  key={photoMode}
                  src={currentImageSrc}
                  alt={
                    photoMode === 'official'
                      ? 'Foto Dokumentasi Sejarah Asli Buya H.M. Rasyid Thalib'
                      : 'Foto Dokumentasi Buya H.M. Rasyid Thalib bersama Istri saat Naik Haji'
                  }
                  className={`w-full h-full object-cover ${
                    photoMode === 'official'
                      ? 'object-top contrast-[1.02] brightness-[0.98]'
                      : 'object-center contrast-[1.02]'
                  } transition-all duration-300`}
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md bg-stone-900/80 text-amber-200 border border-stone-700">
                  {photoMode === 'official' ? 'Foto Asli Dokumentasi' : 'Ibadah Haji Tanah Suci'}
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-amber-200/90 font-medium">
                    {photoMode === 'official' ? 'Dokumentasi Sejarah Primer' : 'Dokumentasi Khidmat Tanah Suci'}
                  </div>
                  <div className="font-serif text-base font-semibold">
                    {photoMode === 'official'
                      ? 'Buya Haji Muhammad Rasyid Thalib'
                      : 'Buya Rasyid Bersama Istri Tercinta'}
                  </div>
                  <div className="text-xs text-stone-300">
                    {photoMode === 'official'
                      ? 'Ketua PWM Sumatera Selatan (1975–1995)'
                      : 'Makkah / Madinah, Arab Saudi'}
                  </div>
                </div>
              </div>

              {/* Caption & Accession Note */}
              <div className="text-xs text-stone-600 font-serif leading-relaxed px-1">
                {photoMode === 'official' ? (
                  <>
                    <span className="font-sans font-medium text-stone-800">Foto Otentik Sejarah: </span>
                    Potret dokumentasi asli Buya Haji Muhammad Rasyid Thalib berbusana safari resmi dan kopiah hitam songkok tinggi dengan senyuman ramah dan sejuk khas seorang ulama pendidik umat.
                  </>
                ) : (
                  <>
                    <span className="font-sans font-medium text-stone-800">Dokumentasi Ibadah Haji: </span>
                    Potret bersejarah Buya H.M. Rasyid Thalib didampingi istri tercinta di pelataran Tanah Suci saat menunaikan rukun Islam kelima di Makkah dan Madinah.
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Curatorial Operational Ribbon / 4-Metric Strip */}
        <div className="mt-12 pt-6 border-t border-stone-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">Masa Khidmat PWM Sumsel</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-950 mt-1">19 Tahun</div>
            <div className="text-xs text-stone-600 mt-0.5">1975 – 1995 (Hampir 2 Dekade)</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">Usia Pengabdian</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">82 Tahun</div>
            <div className="text-xs text-stone-600 mt-0.5">Wafat 19 Feb 1997 (3 Syawal 1417 H)</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">Kawah Candradimuka</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">Thawalib</div>
            <div className="text-xs text-stone-600 mt-0.5">Kulliyatul Muballigh Padang Panjang</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">Peristirahatan Abadi</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">TPU Kamboja</div>
            <div className="text-xs text-stone-600 mt-0.5">Kota Palembang, Sumatera Selatan</div>
          </div>
        </div>
      </div>
    </section>
  );
};
