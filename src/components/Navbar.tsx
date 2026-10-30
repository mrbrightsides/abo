import React, { useState } from 'react';
import { Menu, X, BookOpen, Clock, Quote, Image as ImageIcon, HeartHandshake, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenTributeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onOpenTributeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight whitespace-nowrap shrink-0 hover:text-emerald-900 transition-colors"
          >
            Buya H.M. Rasyid Thalib
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#biografi"
              className="hover:text-emerald-900 hover:underline underline-offset-8 decoration-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Biografi
            </a>
            <a
              href="#linimasa"
              className="hover:text-emerald-900 hover:underline underline-offset-8 decoration-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Linimasa
            </a>
            <a
              href="#kutipan"
              className="hover:text-emerald-900 hover:underline underline-offset-8 decoration-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Kutipan
            </a>
            <a
              href="#galeri"
              className="hover:text-emerald-900 hover:underline underline-offset-8 decoration-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Galeri Arsip
            </a>
            <a
              href="#doa-takzim"
              className="hover:text-emerald-900 hover:underline underline-offset-8 decoration-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Buku Doa
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Uji Wawasan Sejarah</span>
            </button>
            <button
              onClick={onOpenTributeModal}
              className="px-4 py-2 text-xs font-medium text-stone-50 bg-stone-900 hover:bg-emerald-950 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              Kirim Doa & Takzim
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 pt-3 pb-5 space-y-2">
          <a
            href="#biografi"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            <BookOpen className="w-4 h-4 text-emerald-800" />
            Biografi Buya
          </a>
          <a
            href="#linimasa"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            <Clock className="w-4 h-4 text-emerald-800" />
            Linimasa Sejarah
          </a>
          <a
            href="#kutipan"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            <Quote className="w-4 h-4 text-emerald-800" />
            Kutipan Inspiratif
          </a>
          <a
            href="#galeri"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            <ImageIcon className="w-4 h-4 text-emerald-800" />
            Galeri Foto Dokumentasi
          </a>
          <a
            href="#doa-takzim"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            <HeartHandshake className="w-4 h-4 text-emerald-800" />
            Buku Doa & Takzim
          </a>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-md"
            >
              <HelpCircle className="w-4 h-4" />
              Uji Wawasan Sejarah
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTributeModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-medium text-white bg-stone-900 rounded-md"
            >
              Kirim Doa & Takzim
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
