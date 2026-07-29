import React from 'react';
import { Train, ArrowDown, MapPin, Compass, Ticket, Radio, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { StationId } from '../types';
import { trainAudio } from '../utils/audioSynth';

interface HeroSectionProps {
  onSelectStation: (station: StationId) => void;
  onOpenTicketModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectStation,
  onOpenTicketModal
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-stone-200 bg-white">
      {/* Background Train Station Atmosphere & Smoke FX */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-stone-50 pointer-events-none" />
      
      {/* Subtle Railway Track grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Central Railway Station Sign Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Station Announcement Banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-stone-600">PAINEL DE EMBARQUE:</span>
            <span className="font-semibold text-emerald-950">EXPRESSO DA VIDA & TECNOLOGIA</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 font-serif tracking-tight leading-none mb-6">
            A Jornada nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800">Trilhos do Código</span>
          </h1>

          {/* Tagline & Subtitle */}
          <p className="text-lg sm:text-xl text-stone-700 font-sans font-light leading-relaxed mb-8 max-w-2xl">
            {personalProfile.tagline}
          </p>

          {/* Analogy Quote Card */}
          <div className="w-full bg-stone-50 border border-stone-200 hover:border-emerald-500/50 rounded-2xl p-5 sm:p-6 mb-10 shadow-md relative text-left group transition-all">
            <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-emerald-600 text-white font-mono text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Radio className="w-3 h-3 animate-pulse" />
              Filosofia da Jornada
            </div>
            
            <blockquote className="text-stone-800 font-serif italic text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-emerald-600 my-2">
              "{personalProfile.metaphorQuote}"
            </blockquote>

            <div className="mt-3 pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs font-mono text-stone-600 gap-2">
              <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                {personalProfile.location}
              </span>
              <span className="text-stone-500">
                {personalProfile.yearsOfJourney} anos de trilho • {personalProfile.completedStations} estações concluídas
              </span>
            </div>
          </div>

          {/* Station Navigation Quick Selector (Origem, Intermediária, Destino) */}
          <div className="w-full mb-10">
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-3">
              Selecione sua Estação de Destino para Navegar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Origem Card */}
              <button
                onClick={() => {
                  onSelectStation('origem');
                  trainAudio.playClickClack();
                }}
                className="group p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all text-left flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-700">ESTAÇÃO 01</span>
                  <Compass className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors font-serif">
                  Origem
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  De onde vim, bagagem acadêmica e motivações primordiais.
                </p>
                <span className="mt-3 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Ver Estação Origem <ChevronRight className="w-3 h-3" />
                </span>
              </button>

              {/* Intermediária Card */}
              <button
                onClick={() => {
                  onSelectStation('intermediaria');
                  trainAudio.playClickClack();
                }}
                className="group p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all text-left flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-700">ESTAÇÃO 02</span>
                  <Train className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors font-serif">
                  Intermediária
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Vagões de projetos, sinalização de habilidades & experiências.
                </p>
                <span className="mt-3 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Ver Estação Intermediária <ChevronRight className="w-3 h-3" />
                </span>
              </button>

              {/* Destino Card */}
              <button
                onClick={() => {
                  onSelectStation('destino');
                  trainAudio.playClickClack();
                }}
                className="group p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all text-left flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-700">ESTAÇÃO 03</span>
                  <Sparkles className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors font-serif">
                  Destino
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Objetivos futuros, visão de longo prazo & guichê de contato.
                </p>
                <span className="mt-3 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Ver Estação Destino <ChevronRight className="w-3 h-3" />
                </span>
              </button>

            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                onSelectStation('origem');
                trainAudio.playWhistle();
              }}
              className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Train className="w-4 h-4 text-emerald-100" />
              Embarcar na Jornada (Origem)
            </button>

            <button
              onClick={() => {
                onOpenTicketModal();
                trainAudio.playWhistle();
              }}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 hover:border-emerald-500 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Ticket className="w-4 h-4 text-emerald-700" />
              Emitir Bilhete de Passagem
            </button>
          </div>

        </div>

      </div>

      {/* Decorative Railroad Tracks Visual Divider */}
      <div className="mt-16 relative w-full h-8 overflow-hidden bg-stone-100 border-y border-stone-300">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,#634423_16px,#634423_22px)] opacity-40"></div>
        <div className="absolute top-1 left-0 right-0 h-[2px] bg-stone-400"></div>
        <div className="absolute bottom-1 left-0 right-0 h-[2px] bg-stone-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-[10px] font-mono font-bold text-emerald-800 tracking-widest uppercase border border-stone-300 rounded shadow-xs">
            ◄── TRILHOS DA JORNADA PROFISSIONAL ──►
          </span>
        </div>
      </div>
    </section>
  );
};
