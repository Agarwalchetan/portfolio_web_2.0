import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-white mb-8 transition-colors duration-300">
              About Me
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 text-slate-600 dark:text-slate-300 transition-colors duration-300">
              <p className="mb-4 leading-relaxed">
                Hello! I'm Chetan Agarwal, a passionate Full Stack Developer with expertise in building scalable web applications and microservices. I specialize in modern JavaScript frameworks and cloud technologies.
              </p>
              <p className="mb-4 leading-relaxed">
                With proficiency in Java and AI, and a problem-solving mindset sharpened by qualifying JEE Mains and Advanced, I aim to blend creativity with technology to craft impactful, user-centric solutions.
              </p>
              <p className="leading-relaxed">
                Beyond coding, I'm a quick learner and collaborative team player, I am dedicated to continuous growth in the evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;