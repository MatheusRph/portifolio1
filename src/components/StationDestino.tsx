import React, { useState } from 'react';
import { Sparkles, Mail, Github, Linkedin, Phone, Send, CheckCircle2, Ticket, MapPin, Globe, Users, ArrowUp, Copy, Check } from 'lucide-react';
import { futureDestinations, personalProfile } from '../data/portfolioData';
import { trainAudio } from '../utils/audioSynth';

interface StationDestinoProps {
  onOpenTicketModal: () => void;
}

export const StationDestino: React.FC<StationDestinoProps> = ({ onOpenTicketModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    destinationType: 'Oportunidade Profissional',
    message: ''
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    
    trainAudio.playWhistle();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', destinationType: 'Oportunidade Profissional', message: '' });
    }, 5000);
  };

  return (
    <section id="destino" className="py-20 bg-stone-100 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              ESTAÇÃO 03 DE 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
              Estação <span className="text-emerald-700">Destino</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Para onde os trilhos continuam. A jornada do conhecimento é infinita, e o guichê de atendimento está sempre aberto para novos projetos e conexões.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-3 shadow-xs">
            <Sparkles className="w-5 h-5 text-emerald-700 animate-bounce" />
            <div>
              <div className="text-stone-900 font-bold">GUICHÊ DE ATENDIMENTO</div>
              <div className="text-emerald-800 font-semibold">Status: Linha Aberta</div>
            </div>
          </div>
        </div>

        {/* FUTURE DESTINATIONS / HORIZONS */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-700" />
            Próximos Horizontes (Destinos em Construção)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white border border-stone-200 hover:border-emerald-400 p-6 rounded-2xl transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300 font-semibold">
                      {dest.statusTag}
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 font-serif mb-2">{dest.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{dest.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500 flex items-center justify-between">
                  <span>Expresso Futuro</span>
                  <span className="text-emerald-800 font-semibold">Em expansão →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT TICKET DESK & BOARDING PASS GENERATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Interactive Ticket Booth Form ("Enviar Mensagem de Bordo") */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-serif flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-700" />
                  Guichê de Comunicação
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-1">Envie uma mensagem de bordo direta para o meu e-mail</p>
              </div>

              <button
                onClick={onOpenTicketModal}
                className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all font-semibold"
              >
                <Ticket className="w-3.5 h-3.5 text-emerald-700" /> Emitir Bilhete
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-emerald-900 font-serif">Mensagem Registrada com Sucesso!</h4>
                <p className="text-xs font-mono text-stone-700 max-w-md mx-auto">
                  Obrigado por entrar em contato! Sua mensagem foi enviada ao maquinista dos trilhos. Em breve responderei seu e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-1 font-semibold">Seu Nome / Passageiro:</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Ex: Ana Silva"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-1 font-semibold">Seu E-mail de Contato:</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="ana@empresa.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-700 mb-1 font-semibold">Motivo do Contato / Destino:</label>
                  <select
                    value={contactForm.destinationType}
                    onChange={(e) => setContactForm({ ...contactForm, destinationType: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Oportunidade Profissional">Oportunidade Profissional / Vaga</option>
                    <option value="Desenvolvimento de Projeto">Desenvolvimento de Projeto / Freelance</option>
                    <option value="Networking & Troca de Ideias">Networking & Troca de Ideias</option>
                    <option value="Outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-700 mb-1 font-semibold">Mensagem de Bordo:</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Escreva sua proposta ou mensagem aqui..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" /> Enviar Mensagem nos Trilhos
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick Contact Cards & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-700" />
              Coordenadas de Contato Direto
            </h3>

            {/* Email Card */}
            <div className="bg-white border border-stone-200 p-4 rounded-xl flex items-center justify-between hover:border-emerald-400 transition-all shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">E-mail Principal</div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-stone-900">{personalProfile.email}</div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalProfile.email, 'email')}
                className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono transition-colors cursor-pointer border border-stone-200"
                title="Copiar E-mail"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-stone-200 p-4 rounded-xl flex items-center justify-between hover:border-emerald-400 transition-all group shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800 border border-stone-200 group-hover:text-emerald-700 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Repositório GitHub</div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-stone-900">github.com/matheusrodolpho</div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 group-hover:translate-x-1 transition-transform font-bold">→</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-stone-200 p-4 rounded-xl flex items-center justify-between hover:border-emerald-400 transition-all group shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-stone-100 text-emerald-800 border border-stone-200">
                  <Linkedin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Perfil Profissional</div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-stone-900">linkedin.com/in/matheusrodolpho</div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 group-hover:translate-x-1 transition-transform font-bold">→</span>
            </a>

            {/* Boarding Pass Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-stone-50 to-emerald-100 border border-emerald-300 shadow-xs text-center space-y-3">
              <Ticket className="w-8 h-8 text-emerald-700 mx-auto" />
              <h4 className="text-base font-bold text-stone-900 font-serif">Bilhete Personalizado de Viagem</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Gere e personalize seu próprio bilhete de embarque com suas informações para guardar ou compartilhar.
              </p>
              <button
                onClick={onOpenTicketModal}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs font-mono transition-all cursor-pointer shadow-xs"
              >
                Gerar Meu Bilhete de Embarque
              </button>
            </div>

          </div>

        </div>

        {/* Back to Top / Restart Journey */}
        <div className="pt-8 border-t border-stone-200 text-center flex flex-col items-center gap-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              trainAudio.playWhistle();
            }}
            className="p-3 rounded-full bg-white hover:bg-stone-100 text-emerald-700 border border-stone-200 hover:border-emerald-400 transition-all cursor-pointer shadow-sm group"
            title="Voltar ao início dos trilhos"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
          <span className="text-xs font-mono text-stone-500 font-semibold">Voltar ao topo • Estação Origem</span>
        </div>

      </div>
    </section>
  );
};
