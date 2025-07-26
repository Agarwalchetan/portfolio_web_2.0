export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'AI' | 'frontend' | 'fullstack' | 'game' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NyaySetu',
    description: 'AI-powered legal assistant platform connecting clients and lawyers for smarter, faster legal consultations.',
    image: '/images/Projects/NyaySetu.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://nyaysetu-1.onrender.com/',
    githubUrl: 'https://github.com/Agarwalchetan/NyaySetu',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'The FoodShare',
    description: 'Platform connecting food donors with NGOs and shelters to combat food waste and hunger.',
    image: '/images/Projects/Foodshare.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    demoUrl: 'https://thefoodshare.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/the_food_share',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'The Neuro Impact',
    description: 'Initiative fostering inclusive communities and support systems for neurodivergent individuals.',
    image: '/images/Projects/NeuroImpact.png',
    techStack: ['Java','AI', 'Node.js', 'MongoDB', 'Express', 'Box2D'],
    demoUrl: 'https://neuroimpact.netlify.app',
    githubUrl: 'https://github.com/Agarwalchetan/Neuro-diversity',
    featured: true,
    category: 'AI',
  },
  {
    id: 4,
    title: 'Jarvis AI',
    description: 'Smart virtual assistant designed to streamline tasks and deliver personalized AI interactions.',
    image: '/images/Projects/Jarvis.png',
    techStack: ['AI','Node.js', 'Express', 'MongoDB', 'JWT','APIs'],
    demoUrl: 'https://animated-arithmetic-fb81c3.netlify.app/',
    // githubUrl: 'https://github.com',
    featured: true,
    category: 'AI',
  },
  {
    id: 5,
    title: 'Lifeflow',
    description: 'Real-time platform linking blood donors, NGOs, hospitals, and individuals in urgent need.',
    image: '/images/Projects/lifeflow.png',
    techStack: ['React','Firebase', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://zesty-puppy-bfd232.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/blood-camp',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'Portfolio 1.0',
    description: 'My first personal portfolio website showcasing projects, skills, and journey in tech.',
    image: '/images/Projects/Portfolio_1.png',
    techStack: ['HTML5', 'CSS3', 'JS'],
    demoUrl: 'https://agarwalchetan-1.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/portfolio_web',
    featured: false,
    category: 'frontend',
  },
  {
    id: 7,
    title: 'PDF Viewer',
    description: 'A lightweight, browser-based tool to view and navigate PDF documents seamlessly.',
    image: '/images/Projects/PDFViewer.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://pdf-viewer1.netlify.app/',
    // githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
  {
    id: 8,
    title: 'Apple Clone',
    description: 'A responsive front-end replica of Apple’s website with smooth UI and product pages.',
    image: '/images/Projects/appleclone.png',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    demoUrl: 'https://clone-hjrveri.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/apple-clone',
    featured: false,
    category: 'frontend',
  },
  {
    id: 9,
    title: 'Catch the Ball',
    description: 'Fun and interactive web game where users test reflexes by catching falling balls.',
    image: '/images/Projects/Catchtheball.png',
    techStack: ['React', 'Unity', 'Tailwind CSS'],
    demoUrl: 'https://catch-the-ball.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/Catch-the-ball',
    featured: false,
    category: 'game',
  },
  {
    id: 10,
    title: 'Cricket Game',
    description: 'Simple, browser-based cricket game simulating quick matches with core mechanics.',
    image: '/images/Projects/Cricket.png',
    techStack: ['React', 'Unity', 'API'],
    demoUrl: 'https://cricket16.netlify.app/',
    githubUrl: 'https://github.com/Agarwalchetan/Cricket-game',
    featured: false,
    category: 'game',
  },
];
