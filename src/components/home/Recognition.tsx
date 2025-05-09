import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, Trophy } from 'lucide-react';

const recognitions = [
  {
    title: 'Tech Lead',
    description: 'Led a team of 8 developers in delivering a major e-commerce platform with 1M+ monthly active users.',
    icon: <Users size={32} />,
  },
  {
    title: 'AWS Certified',
    description: 'Achieved AWS Solutions Architect Professional certification with top scores.',
    icon: <Trophy size={32} />,
  },
  {
    title: 'Open Source Impact',
    description: 'Major contributions to popular React libraries with 50+ merged pull requests.',
    icon: <Code size={32} />,
  },
  {
    title: 'Innovation Award',
    description: 'Received company-wide recognition for developing an AI-powered customer service automation system.',
    icon: <Award size={32} />,
  },
];

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

const Recognition: React.FC = () => {
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
              Achievements
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 text-center transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-500 mb-4">
                    {recognition.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                    {recognition.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;