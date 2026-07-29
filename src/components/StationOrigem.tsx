import React, { useState } from 'react';
import { Compass, Briefcase, GraduationCap, Cpu, ShieldCheck, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { originBagages, personalProfile } from '../data/portfolioData';
import { StationId } from '../types';

interface StationOrigemProps {
  onGoToNextStation: (nextStation: StationId) => void;
}

export const StationOrigem: React.FC<StationOrigemProps> = ({ onGoToNextStation }) => {
  const [selectedBaggage, setSelectedBaggage] = useState<string>(originBagages[0].id);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
    }
  };

  const activeBaggageData = originBagages.find(b => b.id === selectedBaggage) || originBagages[0];

  return (
    <section id="origem" className="py-20 bg-white relative border-b border-stone-200">
      
      {/* Background Station Theme Touches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              ESTAÇÃO 01 DE 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
              Estação <span className="text-emerald-700">Origem</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              O ponto de partida da minha viagem. Toda grande travessia começa com uma mala cheia de curiosidade, fundamentos sólidos e vontade de construir soluções.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></span>
            <div>
              <div className="text-stone-900 font-bold">STATUS DA PLATAFORMA</div>
              <div className="text-stone-500">Ponto de Partida Inicializado</div>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Bio & Baggage Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Departure Platform Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif">A História do Embarque</h3>
                  <p className="text-xs font-mono text-stone-500">Plataforma de Lançamento Pessoal</p>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                {personalProfile.bio}
              </p>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                <h4 className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-semibold">
                  Principais Registros da Origem:
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Primeira linha de código escrita aos 15 anos motivada pela criação de jogos web.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Transição de entusiasta para desenvolvedor profissional através de projetos desafiadores.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Compromisso contínuo em manter o código limpo e arquiteturas previsíveis.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Interactive Baggage Inspector ("A Bagagem de Mão") */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-stone-900 font-serif flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-700" />
                Inspeção da Bagagem de Mão
              </h3>
              <span className="text-xs font-mono text-stone-500">Clique nas Malas</span>
            </div>

            <p className="text-xs text-stone-600 mb-4">
              Cada item trazido nesta viagem representa um pilar fundamental da minha formação e princípios de trabalho:
            </p>

            {/* Baggage Selector Tabs */}
            <div className="grid grid-cols-2 gap-3">
              {originBagages.map((item) => {
                const isSelected = selectedBaggage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBaggage(item.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-50/90 border-emerald-500 shadow-sm'
                        : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-stone-100 border border-stone-200">
                        {renderIcon(item.icon)}
                      </div>
                      <span className="text-[10px] font-mono text-stone-500">{item.stationMeta.split('•')[0]}</span>
                    </div>
                    <h4 className={`text-sm font-bold font-serif ${isSelected ? 'text-emerald-900' : 'text-stone-800'}`}>
                      {item.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* Active Baggage Expanded Details */}
            <div className="bg-white border border-emerald-300 rounded-2xl p-6 shadow-md relative overflow-hidden transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {renderIcon(activeBaggageData.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-900 font-serif">{activeBaggageData.title}</h4>
                  <span className="text-xs font-mono text-stone-500">{activeBaggageData.stationMeta}</span>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                {activeBaggageData.description}
              </p>
            </div>

          </div>

        </div>

        {/* Station Transition Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-stone-100 via-emerald-50 to-stone-100 border border-stone-200 gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
              PRÓXIMA PARADA: ESTAÇÃO INTERMEDIÁRIA
            </span>
            <h4 className="text-base font-bold text-stone-900 font-serif">
              Pronto para conhecer os vagões de projetos e habilidades?
            </h4>
          </div>

          <button
            onClick={() => onGoToNextStation('intermediaria')}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md shadow-emerald-700/20"
          >
            Avançar para Estação Intermediária
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
