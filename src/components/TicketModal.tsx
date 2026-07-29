import React, { useState } from 'react';
import { Ticket, X, Printer, Download, Train, CheckCircle2, QrCode } from 'lucide-react';
import { TicketData } from '../types';
import { personalProfile } from '../data/portfolioData';
import { trainAudio } from '../utils/audioSynth';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [ticketData, setTicketData] = useState<TicketData>({
    passengerName: 'Visitante da Plataforma',
    passengerRole: 'Recrutador / Parceiro Tech',
    originStation: 'Estação Origem',
    destinationStation: 'Estação Destino',
    trainNumber: 'EXP-2026',
    departureDate: new Date().toLocaleDateString('pt-BR'),
    carClass: 'Primeira Classe (Fullstack)',
    boardingMessage: 'Desejo agendar uma conversa para explorar oportunidades de colaboração técnica.',
    ticketId: `BILHETE-${Math.floor(100000 + Math.random() * 900000)}`
  });

  const [printed, setPrinted] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    trainAudio.playWhistle();
    setPrinted(true);
    setTimeout(() => {
      window.print();
      setPrinted(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border border-emerald-300 rounded-2xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl relative my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-serif">Bilhete de Passagem de Bordo</h3>
              <p className="text-xs font-mono text-stone-500">Emissão Oficial • Expresso Portfólio</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Customization Inputs */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
          <div>
            <label className="block font-mono text-stone-700 mb-1 font-semibold">Seu Nome / Nome da Empresa:</label>
            <input
              type="text"
              value={ticketData.passengerName}
              onChange={(e) => setTicketData({ ...ticketData, passengerName: e.target.value })}
              className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block font-mono text-stone-700 mb-1 font-semibold">Classe do Vagão:</label>
            <select
              value={ticketData.carClass}
              onChange={(e) => setTicketData({ ...ticketData, carClass: e.target.value as TicketData['carClass'] })}
              className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-emerald-500"
            >
              <option value="Primeira Classe (Fullstack)">Primeira Classe (Fullstack)</option>
              <option value="Leito Executivo">Leito Executivo (Frontend & UI)</option>
              <option value="Expresso Tech">Expresso Tech (Backend & IA)</option>
            </select>
          </div>
        </div>

        {/* VINTAGE TRAIN BOARDING TICKET CARD */}
        <div className="bg-gradient-to-r from-stone-100 via-stone-50 to-stone-200 text-stone-900 rounded-xl p-6 shadow-xl relative border-2 border-stone-300 font-mono overflow-hidden print:border-none print:shadow-none">
          
          {/* Decorative Stub Cutout notches */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full border-y border-r border-stone-300"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full border-y border-l border-stone-300"></div>

          {/* Ticket Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b-2 border-dashed border-stone-800/30 gap-2">
            <div className="flex items-center gap-2">
              <Train className="w-6 h-6 text-emerald-900" />
              <span className="font-bold text-lg font-serif tracking-wider uppercase text-stone-950">
                EXPRESSO PORTFÓLIO
              </span>
            </div>

            <div className="text-right text-xs">
              <span className="font-bold text-emerald-900 block">{ticketData.ticketId}</span>
              <span className="text-[10px] text-stone-700">EMISSÃO: {ticketData.departureDate}</span>
            </div>
          </div>

          {/* Ticket Body Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 text-xs">
            <div>
              <span className="text-[10px] text-stone-600 uppercase block font-semibold">Passageiro:</span>
              <span className="font-bold text-stone-950 text-sm truncate block">{ticketData.passengerName}</span>
            </div>

            <div>
              <span className="text-[10px] text-stone-600 uppercase block font-semibold">Maquinista:</span>
              <span className="font-bold text-stone-950 text-sm block">{personalProfile.name}</span>
            </div>

            <div>
              <span className="text-[10px] text-stone-600 uppercase block font-semibold">Origem → Destino:</span>
              <span className="font-bold text-stone-950 block">EST-01 → EST-03</span>
            </div>

            <div>
              <span className="text-[10px] text-stone-600 uppercase block font-semibold">Classe:</span>
              <span className="font-bold text-stone-950 block">{ticketData.carClass.split(' ')[0]}</span>
            </div>
          </div>

          {/* Message / Boarding note */}
          <div className="bg-emerald-100 p-3 rounded-lg border border-emerald-300 text-xs mb-4">
            <span className="font-bold text-emerald-950 block mb-0.5">Nota de Bordo:</span>
            <p className="text-emerald-900 italic font-serif text-xs">"{ticketData.boardingMessage}"</p>
          </div>

          {/* Ticket Footer barcode/QR style */}
          <div className="pt-3 border-t-2 border-dashed border-stone-800/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <QrCode className="w-8 h-8 text-stone-950 opacity-80" />
              <div className="text-[9px] text-stone-700">
                <span>CÓDIGO DE EMBARQUE: 8849-2026-OK</span>
                <span className="block font-bold text-stone-950">ACESSO GARANTIDO ÀS ESTAÇÕES</span>
              </div>
            </div>

            <span className="text-[10px] font-bold text-emerald-900 bg-emerald-200 px-2 py-1 rounded uppercase">
              STATUS: VÁLIDO
            </span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200">
          <span className="text-xs font-mono text-stone-500">
            Você pode imprimir este bilhete como lembrança da viagem!
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" /> Imprimir / Guardar
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-xs cursor-pointer border border-stone-200 font-semibold"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
