import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'game' | 'other';

const Projects: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'AI', label: 'AI' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'game', label: 'Game Dev' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            My Projects
          </span>
        </h1>
        
        {/* Filter tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id as ProjectCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-accent-500/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;