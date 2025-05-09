import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileDown, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-800 dark:text-white relative"
          >
            Hello, I am <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
              Chetan Agarwal
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12"
          >
            Frontend Developer | Game Developer | Problem Solver
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary-500 text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-300"
            >
              <FileDown className="inline-block mr-2 -mt-1" size={20} />
              Download Resume
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <Mail className="inline-block mr-2 -mt-1" size={20} />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;