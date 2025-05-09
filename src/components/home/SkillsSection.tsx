import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-white mb-8 transition-colors duration-300">
              Skills
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col items-center transition-colors duration-300"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 mb-3" 
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;