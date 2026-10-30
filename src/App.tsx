import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { BiographySection } from './components/BiographySection';
import { TimelineSection } from './components/TimelineSection';
import { QuotesSection } from './components/QuotesSection';
import { GallerySection } from './components/GallerySection';
import { TributesSection } from './components/TributesSection';
import { QuizModal } from './components/QuizModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const scrollToBio = () => {
    const el = document.getElementById('biografi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    const el = document.getElementById('galeri');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTributes = () => {
    const el = document.getElementById('doa-takzim');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col antialiased">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenTributeModal={scrollToTributes}
      />

      <main className="flex-1">
        {/* Curatorial Hero Section */}
        <HeroSection
          onScrollToBio={scrollToBio}
          onScrollToGallery={scrollToGallery}
        />

        {/* 3 Pillars of Exemplary Leadership */}
        <PillarsSection />

        {/* Structured Biography Chapters */}
        <BiographySection />

        {/* Chronological Historical Timeline & Geographical Journey */}
        <TimelineSection />

        {/* Inspirational Quotes & Wisdom */}
        <QuotesSection />

        {/* Archival Historical Documentary Gallery */}
        <GallerySection />

        {/* Virtual Tributes & Prayer Guestbook */}
        <TributesSection />
      </main>

      {/* Interactive History Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* Respectful Editorial Footer */}
      <Footer />
    </div>
  );
}
