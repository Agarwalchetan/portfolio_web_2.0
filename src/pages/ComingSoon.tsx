import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Rocket } from 'lucide-react';

const ComingSoon: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 md:p-12 transition-colors duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Rocket size={64} className="text-primary-500" />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            Coming Soon
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-300">
            We're working on something exciting! Stay tuned for updates.
          </p>
          
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-600 dark:text-primary-400">
            <Timer className="mr-2" size={20} />
            <span>Launch Countdown</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;