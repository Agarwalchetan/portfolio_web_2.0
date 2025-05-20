export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'JEE Advanced Qualified',
    description: 'Qualified JEE Advanced & JEE Mains 2024',
    date: 'June 2024',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'Hackathon Finalist',
    description: 'Won finals in a 24-hour hackathon in DTU Executive ,Hackcrux  Hackathon',
    date: 'January 2025',
    icon: '🏆',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Contributed to popular open-source projects with over 10+ accepted PRs',
    date: 'December 2024 - Present',
    icon: '🌟',
  },
  {
    id: 4,
    title: 'Contingent Leader at Mood Indigo, IIT Bombay',
    description: 'Led a large student contingent, coordinating cultural, technical, and literary event participation at Asia’s largest college fest.',
    date: 'January 2025',
    icon: '🏅',
  },
  // {
  //   id: 5,
  //   title: 'Published Technical Article',
  //   description: 'Published a technical article that received over 5,000 views',
  //   date: 'July 2023',
  //   icon: '📝',
  // },
];