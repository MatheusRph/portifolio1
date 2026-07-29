import React, { useState } from 'react';
import { Train, ExternalLink, Github, Filter, Sparkles, Flame, CheckCircle2, AlertTriangle, ArrowRight, Layers, Eye } from 'lucide-react';
import { projectCarriages, skillSignals, timelineStops } from '../data/portfolioData';
import { ProjectCarriage, StationId } from '../types';
import { trainAudio } from '../utils/audioSynth';

interface StationIntermediariaProps {
  onGoToNextStation: (nextStation: StationId) => void;
}

export const StationIntermediaria: React.FC<StationIntermediariaProps> = ({ onGoToNextStation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectCarriage | null>(null);

  const categories = ['Todos', 'Fullstack', 'Frontend', 'AI / Backend', 'Mobile'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projectCarriages
    : projectCarriages.filter(p => p.category === selectedCategory);

  return (
    <section id="intermediaria" className="py-20 bg-stone-50 relative border-b border-stone-200">
      
      {/* Background Train Tracks Grid Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              ESTAÇÃO 02 DE 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
              Estação <span className="text-emerald-700">Intermediária</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              O coração da viagem. Onde os vagões de projetos se engatam, os sinalizadores de habilidades garantem alta velocidade e os trilhos de experiência ganham forma.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-3 shadow-xs">
            <Train className="w-5 h-5 text-emerald-700 animate-pulse" />
            <div>
              <div className="text-stone-900 font-bold">EXPRESSO EM MOVIMENTO</div>
              <div className="text-emerald-800 font-semibold">{projectCarriages.length} Vagões Engatados</div>
            </div>
          </div>
        </div>

        {/* SUB-SECTION 1: VAGÕES DE PROJETOS (PROJECT CARRIAGES) */}
        <div className="mb-20">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif flex items-center gap-2.5">
                <Train className="w-6 h-6 text-emerald-700" />
                Vagões de Projetos (Carga Técnica)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Cada vagão transporta um sistema real desenvolvido com soluções arquiteturais robustas.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-stone-200 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    trainAudio.playClickClack();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-700 text-white font-bold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Connected Train Carriages Container */}
          <div className="relative">
            {/* Visual Railway Track line behind the carriages */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-stone-200 border-y border-stone-300 -translate-y-1/2 pointer-events-none z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-stone-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between relative"
                >
                  {/* Carriage Roof/Header Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold">
                          {project.carriageNumber}
                        </span>
                        <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                          {project.category}
                        </span>
                      </div>

                      {project.featured && (
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1 font-semibold">
                          <Sparkles className="w-3 h-3 text-emerald-600" /> Destaque
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-stone-900 font-serif group-hover:text-emerald-800 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-700 font-semibold mb-3">{project.subtitle}</p>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Cargo Analogy Badge */}
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span className="text-emerald-800 font-semibold">{project.analogyCargo}</span>
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-[11px] font-mono border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Carriage Footer & Action Links */}
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                    <div className="text-[11px] font-mono text-emerald-800 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {project.highlightMetric}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-emerald-800 border border-stone-200 hover:border-emerald-400 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all font-semibold"
                        title="Inspecionar detalhes do vagão"
                      >
                        <Eye className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="hidden sm:inline">Detalhes</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition-all"
                          title="Ver Código Fonte no GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300 transition-all"
                          title="Acessar Aplicação"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUB-SECTION 2: SINALIZAÇÃO DE HABILIDADES (RAILWAY SKILL SIGNALS) */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif flex items-center gap-2.5">
              <Flame className="w-6 h-6 text-emerald-700" />
              Sinalização de Habilidades Tecnológicas
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Assim como os semáforos orientam os trens, os níveis de domínio indicam prontidão técnica e estabilidade do código.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillSignals.map((skill) => (
              <div
                key={skill.id}
                className="bg-white border border-stone-200 p-5 rounded-xl hover:border-emerald-400 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    {/* Signal Light Indicator */}
                    <div className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-full border border-stone-200">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          skill.signalStatus === 'verde'
                            ? 'bg-emerald-600 shadow-xs shadow-emerald-500 animate-pulse'
                            : 'bg-amber-500 shadow-xs shadow-amber-500'
                        }`}
                      ></span>
                      <span className="text-[10px] font-mono text-stone-700 font-semibold uppercase">
                        {skill.signalStatus === 'verde' ? 'Sinal Verde' : 'Sinal Amarelo'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 font-serif">{skill.name}</h4>
                  </div>

                  <span className="text-xs font-mono font-bold text-emerald-800">{skill.level}%</span>
                </div>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">{skill.description}</p>

                {/* Progress Bar Track */}
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between mt-2 text-[10px] font-mono text-stone-500">
                  <span>{skill.category}</span>
                  <span>Experiência: {skill.yearsOfExperience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUB-SECTION 3: TRILHOS DE EXPERIÊNCIA (CAREER TIMELINE STOPS) */}
        <div className="mb-12">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-emerald-700" />
              Estações Percorridas (Histórico de Carreira)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              O diário de bordo com as paradas e atuações profissionais ao longo dos anos.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-emerald-300 space-y-8">
            {timelineStops.map((stop) => (
              <div key={stop.id} className="relative group">
                {/* Station Node Marker */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center group-hover:scale-125 transition-transform shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                </div>

                <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-emerald-400 transition-all shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono text-xs font-bold border border-emerald-300">
                      {stop.year} • {stop.stationCode}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{stop.location}</span>
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 font-serif">{stop.role}</h4>
                  <p className="text-xs font-mono text-emerald-800 font-semibold mb-3">{stop.companyOrContext}</p>
                  
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {stop.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-stone-500 uppercase font-semibold">Conquistas nos trilhos:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {stop.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Station Transition Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-stone-100 via-emerald-50 to-stone-100 border border-stone-200 gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
              PRÓXIMA PARADA: ESTAÇÃO DESTINO
            </span>
            <h4 className="text-base font-bold text-stone-900 font-serif">
              Quer ver os próximos horizontes e entrar em contato no guichê?
            </h4>
          </div>

          <button
            onClick={() => onGoToNextStation('destino')}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md shadow-emerald-700/20"
          >
            Avançar para Estação Destino
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md">
          <div className="bg-white border border-emerald-300 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono text-emerald-800 font-bold">{activeProjectModal.carriageNumber}</span>
                <h3 className="text-2xl font-bold text-stone-900 font-serif">{activeProjectModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:text-stone-900 cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-900 font-semibold">
                {activeProjectModal.analogyCargo}
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {activeProjectModal.description}
              </p>

              <div>
                <h4 className="text-xs font-mono text-stone-500 uppercase mb-2 font-semibold">Tecnologias Embarcadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-stone-100 text-emerald-900 text-xs font-mono border border-stone-200 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-900 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Métrica de Desempenho: {activeProjectModal.highlightMetric}</span>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-stone-100 text-stone-800 text-xs font-mono hover:bg-stone-200 flex items-center gap-2 border border-stone-300 font-semibold"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {activeProjectModal.liveUrl && (
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs font-mono hover:bg-emerald-800 flex items-center gap-2 shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" /> Acessar Aplicação
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
