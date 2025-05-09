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
    description: 'Qualified JEE Advanced with a rank in the top 5%',
    date: 'June 2022',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'Event Manager',
    description: 'Successfully managed a tech event with over 500 participants',
    date: 'October 2022',
    icon: '🏆',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Contributed to popular open-source projects with over 10+ accepted PRs',
    date: 'January 2023',
    icon: '🌟',
  },
  {
    id: 4,
    title: 'Hackathon Winner',
    description: 'Won first place in a 24-hour hackathon with an innovative solution',
    date: 'April 2023',
    icon: '🏅',
  },
  {
    id: 5,
    title: 'Published Technical Article',
    description: 'Published a technical article that received over 5,000 views',
    date: 'July 2023',
    icon: '📝',
  },
];