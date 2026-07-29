import { PersonalProfile, ProjectCarriage, SkillSignal, TimelineStop } from '../types';

export const personalProfile: PersonalProfile = {
  name: "Matheus Rodolpho",
  title: "Desenvolvedor Full Stack & Arquiteto de Soluções",
  tagline: "Engenheiro de Software navegando pelos trilhos da tecnologia, transformando código em pontes de valor.",
  metaphorQuote: "A vida não é sobre o destino final, mas sim sobre a beleza da paisagem que vemos pelas janelas do trem, o aprendizado em cada estação e a constante evolução nos trilhos.",
  bio: "Com mais de 5 anos nos trilhos do desenvolvimento de software, minha jornada começou movida pela curiosidade de entender como as engrenagens da web funcionam. Ao longo das estações, acumulei bagagem sólida em ecossistemas React, Node.js, TypeScript e arquiteturas em nuvem.",
  location: "São Paulo, Brasil • Plataforma Web Global",
  email: "matheus.rodolpho16@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  whatsapp: "+55 11 99999-8888",
  yearsOfJourney: 5,
  completedStations: 14
};

export const originBagages = [
  {
    id: 'bag-1',
    title: 'Curiosidade Investigativa',
    description: 'A faísca inicial que me fez desmontar o primeiro computador e querer entender como o código ganha vida.',
    icon: 'Compass',
    stationMeta: 'Estação 00 • Início de Tudo'
  },
  {
    id: 'bag-2',
    title: 'Fundação Científica',
    description: 'A bagagem acadêmica em Ciência da Computação e algoritmos, servindo de trilhos sólidos para solucionar problemas complexos.',
    icon: 'GraduationCap',
    stationMeta: 'Estação Formação • 2019-2023'
  },
  {
    id: 'bag-3',
    title: 'Engrenagens Autodidatas',
    description: 'A capacidade de aprender rápido e se adaptar a novas tecnologias a cada nova parada de trem.',
    icon: 'Cpu',
    stationMeta: 'Bagagem Contínua'
  },
  {
    id: 'bag-4',
    title: 'Atenção aos Detalhes',
    description: 'Assim como cada parafuso é crucial nos trilhos de um trem, cada linha de código limpo garante uma viagem segura e sem sobressaltos.',
    icon: 'ShieldCheck',
    stationMeta: 'Padrão de Qualidade'
  }
];

export const projectCarriages: ProjectCarriage[] = [
  {
    id: 'proj-1',
    carriageNumber: 'Vagão #01',
    title: 'Expresso Cloud Platform',
    subtitle: 'SaaS de Gestão de Operações em Tempo Real',
    description: 'Plataforma completa de monitoramento e análise de métricas distribuídas com dashboard interativo em tempo real, suporte a WebSockets e relatórios automatizados.',
    analogyCargo: 'Carga: Processamento em Tempo Real & Alta Disponibilidade',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'TailwindCSS', 'WebSockets', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    highlightMetric: '10k+ Requisições/sec tratadas sem oscilação',
    category: 'Fullstack',
    featured: true,
    colorTheme: 'from-emerald-950/50 via-stone-900 to-amber-950/40 border-emerald-500/40'
  },
  {
    id: 'proj-2',
    carriageNumber: 'Vagão #02',
    title: 'Vagão Inteligente IA',
    subtitle: 'Assistente e Analista de Documentos com Gemini API',
    description: 'Aplicação de IA generativa que extrai insights, resume documentos extensos e realiza buscas semânticas em grandes volumes de texto com feedback em tempo real.',
    analogyCargo: 'Carga: Inteligência Artificial Generativa e LLMs',
    technologies: ['React', 'TypeScript', 'Gemini API', 'Express', 'TailwindCSS', 'Vector Search'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    highlightMetric: 'Redução de 75% no tempo de análise documental',
    category: 'AI / Backend',
    featured: true,
    colorTheme: 'from-emerald-900/40 via-stone-900 to-emerald-950/60 border-emerald-400/40'
  },
  {
    id: 'proj-3',
    carriageNumber: 'Vagão #03',
    title: 'Metro UI Design System',
    subtitle: 'Biblioteca de Componentes e Design System Acessível',
    description: 'Design system modular e acessível (WCAG 2.1 AA) criado para acelerar o desenvolvimento de interfaces responsivas com suporte nativo a temas dark/light.',
    analogyCargo: 'Carga: Padronização Visual e Experiência do Usuário',
    technologies: ['React', 'TailwindCSS', 'Storybook', 'Framer Motion', 'Radix Primitives'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    highlightMetric: 'Mais de 40 componentes prontos e 100% testados',
    category: 'Frontend',
    featured: true,
    colorTheme: 'from-amber-950/50 via-stone-900 to-emerald-950/40 border-amber-700/40'
  },
  {
    id: 'proj-4',
    carriageNumber: 'Vagão #04',
    title: 'Trilhos Financeiros App',
    subtitle: 'Aplicativo de Controle Financeiro & Planejamento',
    description: 'Aplicativo financeiro pessoal com gráficos dinâmicos de fluxo de caixa, categorization inteligente de despesas e projeções de metas futuras.',
    analogyCargo: 'Carga: Visualização de Dados e Segurança Bancária',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Recharts', 'SQLite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    highlightMetric: '+5.000 downloads ativos nas lojas',
    category: 'Mobile',
    featured: false,
    colorTheme: 'from-stone-900 via-amber-950/40 to-emerald-950/40 border-stone-700/50'
  }
];

export const skillSignals: SkillSignal[] = [
  {
    id: 'sk-1',
    name: 'React.js & Next.js',
    category: 'Trilhos Frontend',
    level: 95,
    signalStatus: 'verde',
    yearsOfExperience: '5 anos',
    description: 'Sinal Verde Total. Construção de SPAs e SSRs de alta performance com hooks customizados, Server Components e gerenciamento de estado otimizado.'
  },
  {
    id: 'sk-2',
    name: 'TypeScript',
    category: 'Trilhos Frontend',
    level: 92,
    signalStatus: 'verde',
    yearsOfExperience: '4 anos',
    description: 'Tipagem estática rigorosa para garantir que os trilhos da aplicação nunca sofram descarrilamento em tempo de execução.'
  },
  {
    id: 'sk-3',
    name: 'Tailwind CSS & Styling',
    category: 'Trilhos Frontend',
    level: 95,
    signalStatus: 'verde',
    yearsOfExperience: '4 anos',
    description: 'Criação de UIs elegantes, responsivas e fluidas com atenção extrema à hierarquia visual, espaçamentos e micro-interações.'
  },
  {
    id: 'sk-4',
    name: 'Node.js & Express / NestJS',
    category: 'Engrenagens Backend',
    level: 88,
    signalStatus: 'verde',
    yearsOfExperience: '4 anos',
    description: 'Motores backend resilientes com arquiteturas RESTful, autenticação JWT/OAuth, middlewares e rotas otimizadas.'
  },
  {
    id: 'sk-5',
    name: 'Bancos de Dados (PostgreSQL & Firestore)',
    category: 'Engrenagens Backend',
    level: 85,
    signalStatus: 'verde',
    yearsOfExperience: '4 anos',
    description: 'Modelagem de dados relacionais e NoSQL com queries performáticas, indexação e persistência segura.'
  },
  {
    id: 'sk-6',
    name: 'Docker, CI/CD & GCP Cloud Run',
    category: 'Sinalização & DevOps',
    level: 78,
    signalStatus: 'amarelo',
    yearsOfExperience: '2 anos',
    description: 'Sinalização em expansão. Conteinerização de aplicações e pipelines de deploy automatizados para entregas contínuas.'
  },
  {
    id: 'sk-7',
    name: 'Inteligência Artificial & Gemini SDK',
    category: 'Sinalização & DevOps',
    level: 82,
    signalStatus: 'amarelo',
    yearsOfExperience: '2 anos',
    description: 'Integração de modelos de linguagem para potencializar aplicações web com busca semântica e geração de conteúdo.'
  },
  {
    id: 'sk-8',
    name: 'Git, Vite, Vitest & Jest',
    category: 'Ferramentas de Bordo',
    level: 90,
    signalStatus: 'verde',
    yearsOfExperience: '5 anos',
    description: 'Controle de versão rigoroso, testes unitários e ferramentas modernas de build de alta velocidade.'
  }
];

export const timelineStops: TimelineStop[] = [
  {
    id: 'stop-1',
    year: '2020',
    stationCode: 'EST-01',
    role: 'Embarque no Desenvolvimento Web',
    companyOrContext: 'Primeiras Estações & Freelancer',
    location: 'São Paulo, SP',
    description: 'Início da jornada prática construindo websites institucionais, landing pages e e-commerces para pequenos negócios locais.',
    highlights: ['Domínio de HTML, CSS e JavaScript Vanilla', 'Primeiras integrações com APIs REST', 'Criação de marca pessoal'],
    type: 'milestone'
  },
  {
    id: 'stop-2',
    year: '2021 - 2023',
    stationCode: 'EST-02',
    role: 'Desenvolvedor Frontend Junior / Pleno',
    companyOrContext: 'Tech Railway Solutions',
    location: 'Remoto',
    description: 'Desenvolvimento e manutenção de dashboards de grande porte em React e TypeScript, focando em performance de renderização e reutilização de componentes.',
    highlights: ['Migração de legado para React moderno com Vite', 'Aumento de 40% na velocidade de carregamento das páginas', 'Trabalho em time ágil Scrum'],
    type: 'work'
  },
  {
    id: 'stop-3',
    year: '2023 - Presente',
    stationCode: 'EST-03',
    role: 'Desenvolvedor Full Stack Senior',
    companyOrContext: 'Express Global Tech',
    location: 'Remoto',
    description: 'Liderança no desenvolvimento de microsserviços e novas funcionalidades fullstack, integrando ecossistemas Cloud, Node.js e React.',
    highlights: ['Arquitetura de APIs com alta taxa de disponibilização', 'Mentoria para desenvolvedores júniores do time', 'Integração de recursos de IA Generativa'],
    type: 'work'
  }
];

export const futureDestinations = [
  {
    id: 'dest-1',
    title: 'Arquitetura de Microsserviços & IA',
    description: 'Expandir a atuação para sistemas distribuídos e criar soluções híbridas que unam web moderna a agentes autônomos de IA.',
    icon: 'Sparkles',
    statusTag: 'Parada Programada'
  },
  {
    id: 'dest-2',
    title: 'Liderança Técnica de Impacto',
    description: 'Ajudar outros desenvolvedores a encontrarem seus próprios caminhos e construírem carreiras sólidas e apaixonadas.',
    icon: 'Users',
    statusTag: 'Próximo Sinal Verde'
  },
  {
    id: 'dest-3',
    title: 'Contribuição Open Source Global',
    description: 'Publicar ferramentas utilitárias e bibliotecas de código aberto que ajudem a comunidade de desenvolvedores ao redor do mundo.',
    icon: 'Globe',
    statusTag: 'Trilhos Abertos'
  }
];
