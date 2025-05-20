export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'game' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NyaySetu',
    description: 'A pixel-perfect clone of the Apple website homepage, showcasing attention to detail and frontend development skills.',
    image: '/images/Projects/NyaySetu.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'frontend',
  },
  {
    id: 2,
    title: 'The FoodShare',
    description: 'A comprehensive dashboard for managing an e-commerce platform, including inventory, orders, and customer data.',
    image: '/images/Projects/Foodshare.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'The Neuro Impact',
    description: 'A 2D platformer game built with Java, featuring multiple levels, enemies, and power-ups.',
    image: '/images/Projects/NeuroImpact.png',
    techStack: ['Java', 'LibGDX', 'Box2D'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'game',
  },
  {
    id: 4,
    title: 'Jarvis AI',
    description: 'A RESTful API for task management, with authentication, task creation, assignment, and status tracking.',
    image: '/images/Projects/Jarvis.png',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com',
    featured: false,
    category: 'backend',
  },
  {
    id: 5,
    title: 'Lifeflow',
    description: 'A personal portfolio website showcasing projects, skills, and achievements.',
    image: '/images/Projects/lifeflow.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'frontend',
  },
  {
    id: 6,
    title: 'Portfolio 1.0',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: '/images/Projects/Portfolio_1.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
  {
    id: 7,
    title: 'PDF Viewer',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: '/images/Projects/PDFViewer.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
  {
    id: 8,
    title: 'Apple Clone',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: '/images/Projects/appleclone.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
  {
    id: 9,
    title: 'Catch the Ball',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: '/images/Projects/Catchtheball.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
  {
    id: 10,
    title: 'Cricket Game',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: '/images/Projects/Cricket.png',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
];