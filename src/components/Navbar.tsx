import React, { useState, useEffect } from 'react';
import { Train, Volume2, VolumeX, Ticket, Compass, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { StationId } from '../types';
import { trainAudio } from '../utils/audioSynth';
import { AnimatedTrainIcon } from './AnimatedTrainIcon';

interface NavbarProps {
  activeStation: StationId;
  onSelectStation: (station: StationId) => void;
  onOpenTicketModal: () => void;
  scrollProgress: number; // 0 to 100
}

export const Navbar: React.FC<NavbarProps> = ({
  activeStation,
  onSelectStation,
  onOpenTicketModal,
  scrollProgress
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const muted = trainAudio.toggleMute();
    setIsMuted(muted);
  };

  const navItems: { id: StationId; label: string; stationNumber: string; subtitle: string; icon: React.ReactNode }[] = [
    {
      id: 'origem',
      label: 'Origem',
      stationNumber: 'Estação 01',
      subtitle: 'Início & Bagagem',
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 'intermediaria',
      label: 'Intermediária',
      stationNumber: 'Estação 02',
      subtitle: 'Projetos & Trilhos',
      icon: <Flame className="w-4 h-4" />
    },
    {
      id: 'destino',
      label: 'Destino',
      stationNumber: 'Estação 03',
      subtitle: 'Futuro & Contato',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-2.5'
          : 'bg-gradient-to-b from-white/95 via-stone-50/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Train Theme Branding */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              trainAudio.playWhistle();
            }}
            className="flex items-center gap-3 group focus:outline-none"
            title="Clique para apitar o trem e voltar ao início"
          >
            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform">
              <AnimatedTrainIcon className="w-16 h-12" />
            </div>

            <div className="hidden sm:flex flex-col justify-center items-start">
              <span className="font-extrabold text-stone-900 tracking-wider text-xl font-serif leading-tight">
                Trilhos
              </span>
              
              {/* Ticket 2026 Badge Underneath Trilhos */}
              <div className="relative mt-0.5 inline-flex items-center gap-1.5 px-3 py-0.5 bg-white text-black border-2 border-amber-900 rounded-[5px] font-mono text-[11px] font-black tracking-wider shadow-xs select-none group-hover:border-amber-700 transition-colors">
                {/* Left Ticket Notch */}
                <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2.5 bg-stone-50 rounded-r-full border-y-2 border-r-2 border-amber-900"></span>
                {/* Right Ticket Notch */}
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2.5 bg-stone-50 rounded-l-full border-y-2 border-l-2 border-amber-900"></span>
                
                <Ticket className="w-3 h-3 text-amber-900 shrink-0" />
                <span className="text-black font-extrabold tracking-wider">2026</span>
              </div>
            </div>
          </a>

          {/* MAIN NAVBAR - STRICTLY REQUIRED NAVIGATION LINKS: Origem, Intermediária, Destino */}
          <nav className="flex items-center bg-stone-100/90 border border-stone-200 rounded-full p-1.5 shadow-inner gap-1">
            {navItems.map((item) => {
              const isActive = activeStation === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectStation(item.id);
                    trainAudio.playClickClack();
                  }}
                  className={`relative px-3.5 sm:px-5 py-2 font-mono text-xs sm:text-sm flex items-center gap-2 cursor-pointer select-none transition-colors duration-200 ${
                    isActive ? 'text-black' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {/* Sliding Ticket Background with Smooth Framer Motion Spring */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStationTicket"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-white border-2 border-amber-900 rounded-[6px] shadow-xs"
                    >
                      {/* Left Ticket Notch */}
                      <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-2.5 bg-stone-100/90 rounded-r-full border-y-2 border-r-2 border-amber-900"></span>
                      {/* Right Ticket Notch */}
                      <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-2.5 bg-stone-100/90 rounded-l-full border-y-2 border-l-2 border-amber-900"></span>
                    </motion.div>
                  )}

                  {/* Button Content Floating Above Ticket */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`transition-colors duration-200 ${isActive ? 'text-amber-900 font-black' : 'text-stone-500'}`}>
                      {item.icon}
                    </span>
                    
                    <span className={`transition-all duration-200 ${isActive ? 'font-black text-black tracking-wide' : 'font-medium tracking-normal'}`}>
                      {item.label}
                    </span>

                    <span className={`hidden md:inline text-[10px] transition-colors duration-200 ${isActive ? 'text-stone-800 font-extrabold' : 'opacity-60'}`}>
                      ({item.stationNumber.slice(-2)})
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities (Audio Whistle & Ticket Pass) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Whistle Synth Toggle Button */}
            <button
              onClick={handleToggleAudio}
              className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer ${
                !isMuted
                  ? 'bg-white text-black border-2 border-amber-900 shadow-xs font-bold'
                  : 'bg-stone-100 text-stone-600 border border-stone-200 hover:text-stone-900 hover:bg-stone-200'
              }`}
              title={isMuted ? 'Ativar sons de trilho e apito do trem' : 'Silenciar áudio do trem'}
            >
              {!isMuted ? <Volume2 className="w-4 h-4 text-amber-900" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden xl:inline text-[11px]">{!isMuted ? 'Apito Ligado' : 'Som Off'}</span>
            </button>

            {/* Ticket / Boarding Pass Modal Launcher */}
            <button
              onClick={() => {
                onOpenTicketModal();
                trainAudio.playWhistle();
              }}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-md bg-white text-black border-2 border-amber-900 hover:bg-stone-50 font-mono font-black text-xs sm:text-sm shadow-xs transition-all transform active:scale-95 cursor-pointer"
            >
              <Ticket className="w-4 h-4 text-amber-900" />
              <span className="hidden sm:inline">Emitir Bilhete</span>
            </button>
          </div>

        </div>
      </div>

      {/* Railway Track Scroll Indicator along bottom of navbar */}
      <div className="relative w-full h-2 bg-stone-200 border-t border-stone-300 overflow-hidden mt-2">
        {/* Wood ties pattern (Marrom dos trilhos) */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#634423_8px,#634423_12px)] opacity-50"></div>
        
        {/* Steel Rail Lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-stone-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-400"></div>

        {/* Moving Locomotive marker reflecting scrollProgress */}
        <div
          className="absolute top-0 bottom-0 flex items-center transition-all duration-150 ease-out"
          style={{ left: `calc(${Math.min(Math.max(scrollProgress, 2), 97)}% - 10px)` }}
        >
          <div className="w-5 h-2.5 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-sm shadow-md shadow-emerald-700/50 flex items-center justify-center border border-white">
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
