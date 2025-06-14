import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Features from './components/Features';
import Installation from './components/Installation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  const t = translations[currentLanguage] || translations.en;

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-white/80 text-lg">Loading Labubu Magic...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      <HeroSection translations={t} />
      <Gallery translations={t} />
      <VideoShowcase translations={t} />
      <Features translations={t} />
      <Installation translations={t} />
      <Testimonials translations={t} />
      <FAQ translations={t} />
      <Footer translations={t} />
    </div>
  );
}

export default App;