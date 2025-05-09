import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Cpu } from 'lucide-react';

const activities = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable web applications using React, Node.js, and TypeScript with a focus on performance and user experience.',
    icon: <Code size={32} />,
    category: 'doing',
  },
  {
    title: 'Cloud Architecture',
    description: 'Designing and implementing cloud-native solutions using AWS services and microservices architecture.',
    icon: <Cloud size={32} />,
    category: 'doing',
  },
  {
    title: 'Database Design',
    description: 'Optimizing database schemas and implementing efficient data access patterns for high-performance applications.',
    icon: <Database size={32} />,
    category: 'exploring',
  },
  {
    title: 'Machine Learning',
    description: 'Learning and implementing ML algorithms for predictive analytics and data processing applications.',
    icon: <Cpu size={32} />,
    category: 'exploring',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CurrentFocus: React.FC = () => {
  const doingActivities = activities.filter((activity) => activity.category === 'doing');
  const exploringActivities = activities.filter((activity) => activity.category === 'exploring');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-white mb-8 transition-colors duration-300">
                What I'm Doing
              </h2>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {doingActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 transition-colors duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 text-primary-500">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white transition-colors duration-300">
                          {activity.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-white mb-8 transition-colors duration-300">
                What I'm Exploring
              </h2>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {exploringActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 transition-colors duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 text-accent-500">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white transition-colors duration-300">
                          {activity.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;