export type StationId = 'origem' | 'intermediaria' | 'destino';

export interface ProjectCarriage {
  id: string;
  carriageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  analogyCargo: string; // e.g. "Carga: Sistemas Web Escaláveis"
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlightMetric: string;
  category: 'Fullstack' | 'Frontend' | 'Mobile' | 'AI / Backend';
  featured: boolean;
  colorTheme: string;
}

export interface SkillSignal {
  id: string;
  name: string;
  category: 'Trilhos Frontend' | 'Engrenagens Backend' | 'Sinalização & DevOps' | 'Ferramentas de Bordo';
  level: number; // 0-100
  signalStatus: 'verde' | 'amarelo'; // verde = dominado, amarelo = em aprendizado ativo
  yearsOfExperience: string;
  description: string;
}

export interface TimelineStop {
  id: string;
  year: string;
  stationCode: string;
  role: string;
  companyOrContext: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'academic' | 'work' | 'milestone';
}

export interface TicketData {
  passengerName: string;
  passengerRole: string;
  originStation: string;
  destinationStation: string;
  trainNumber: string;
  departureDate: string;
  carClass: 'Primeira Classe (Fullstack)' | 'Leito Executivo' | 'Expresso Tech';
  boardingMessage: string;
  ticketId: string;
}

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  metaphorQuote: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp?: string;
  yearsOfJourney: number;
  completedStations: number;
}
