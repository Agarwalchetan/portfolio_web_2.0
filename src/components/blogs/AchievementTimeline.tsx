import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const AchievementTimeline: React.FC = () => {
  return (
    <div className="py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl"
      >
        {/* Timeline connector */}
        <div className="absolute left-8 sm:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>

        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            variants={item}
            className={`relative mb-8 ${
              index % 2 === 0 
                ? 'sm:ml-auto sm:mr-16 sm:pl-16 sm:pr-0' 
                : 'sm:mr-auto sm:ml-16 sm:pr-16 sm:pl-0'
            } ml-16 pl-8`}
          >
            {/* Icon */}
            <div className="absolute top-0 left-0 sm:left-[calc(50%-30px)] w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border-4 border-primary-100 dark:border-primary-900/30 z-10 text-xl">
              {achievement.icon}
            </div>

            {/* Content box */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md transition-colors duration-300">
              <div className="text-xs text-primary-500 font-semibold mb-1">
                {achievement.date}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementTimeline;