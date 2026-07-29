import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StationOrigem } from './components/StationOrigem';
import { StationIntermediaria } from './components/StationIntermediaria';
import { StationDestino } from './components/StationDestino';
import { TicketModal } from './components/TicketModal';
import { StationId } from './types';
import { personalProfile } from './data/portfolioData';
import { Train, Heart, Volume2 } from 'lucide-react';

export default function App() {
  const [activeStation, setActiveStation] = useState<StationId>('origem');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  // Monitor window scroll to update scrollProgress & update activeStation based on section positions
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Check section offsets to sync navbar active station
      const origemEl = document.getElementById('origem');
      const intermediariaEl = document.getElementById('intermediaria');
      const destinoEl = document.getElementById('destino');

      const scrollPosition = window.scrollY + 250;

      if (destinoEl && scrollPosition >= destinoEl.offsetTop) {
        setActiveStation('destino');
      } else if (intermediariaEl && scrollPosition >= intermediariaEl.offsetTop) {
        setActiveStation('intermediaria');
      } else if (origemEl) {
        setActiveStation('origem');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectStation = (stationId: StationId) => {
    setActiveStation(stationId);
    const element = document.getElementById(stationId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Fixed Navigation Header with strict links: Origem, Intermediária, Destino */}
      <Navbar
        activeStation={activeStation}
        onSelectStation={handleSelectStation}
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
        scrollProgress={scrollProgress}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner / Central Station Board */}
        <HeroSection
          onSelectStation={handleSelectStation}
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />

        {/* Section 1: Estação Origem */}
        <StationOrigem onGoToNextStation={handleSelectStation} />

        {/* Section 2: Estação Intermediária */}
        <StationIntermediaria onGoToNextStation={handleSelectStation} />

        {/* Section 3: Estação Destino */}
        <StationDestino onOpenTicketModal={() => setIsTicketModalOpen(true)} />
      </main>

      {/* Railway Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Railway Tracks Pattern Line */}
          <div className="relative w-full h-3 mb-8 bg-stone-200 border-y border-stone-300">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#4d3319_10px,#4d3319_14px)] opacity-40"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-600 font-mono">
            
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800">
                <Train className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-stone-900 block font-serif text-sm">
                  {personalProfile.name} • Portfólio nos Trilhos
                </span>
                <span className="text-stone-500">
                  Estações: Origem (01) • Intermediária (02) • Destino (03)
                </span>
              </div>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="flex items-center justify-center md:justify-end gap-1 text-stone-600">
                Construído com <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" /> em React & Tailwind CSS
              </p>
              <p className="text-stone-400">
                © {new Date().getFullYear()} Expresso da Vida. Todos os direitos reservados.
              </p>
            </div>

          </div>

        </div>
      </footer>

      {/* Ticket Generator Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

    </div>
  );
}
