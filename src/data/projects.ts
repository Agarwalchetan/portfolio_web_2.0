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
    title: 'Apple Website Clone',
    description: 'A pixel-perfect clone of the Apple website homepage, showcasing attention to detail and frontend development skills.',
    image: 'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'frontend',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing an e-commerce platform, including inventory, orders, and customer data.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    title: '2D Platformer Game',
    description: 'A 2D platformer game built with Java, featuring multiple levels, enemies, and power-ups.',
    image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Java', 'LibGDX', 'Box2D'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'game',
  },
  {
    id: 4,
    title: 'Task Management API',
    description: 'A RESTful API for task management, with authentication, task creation, assignment, and status tracking.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com',
    featured: false,
    category: 'backend',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and achievements.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'frontend',
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'frontend',
  },
];