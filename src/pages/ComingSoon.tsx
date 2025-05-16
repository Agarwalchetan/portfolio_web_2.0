import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Rocket } from 'lucide-react';

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Get or set the target date in localStorage
    let targetDate = localStorage.getItem('countdownTarget');
    if (!targetDate) {
      const newTargetDate = new Date();
      newTargetDate.setDate(newTargetDate.getDate() + 30);
      targetDate = newTargetDate.toString();
      localStorage.setItem('countdownTarget', targetDate);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-500">{timeLeft.days}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Days</div>
            </div>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-500">{timeLeft.hours}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Hours</div>
            </div>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-500">{timeLeft.minutes}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Minutes</div>
            </div>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary-500">{timeLeft.seconds}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Seconds</div>
            </div>
          </div>

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