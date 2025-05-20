import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code, BookOpen  } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github size={24} />,
    url: 'https://github.com/Agarwalchetan',
    color: 'hover:text-slate-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    url: 'https://www.linkedin.com/in/agarwalchetan10/',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  // {
  //   name: 'Twitter',
  //   icon: <Twitter size={24} />,
  //   url: 'https://twitter.com/',
  //   color: 'hover:text-sky-500 dark:hover:text-sky-400',
  // },
  {
    name: 'LeetCode',
    icon: <Code size={24} />,
    url: 'https://leetcode.com/u/agar_chetan10/',
    color: 'hover:text-yellow-500 dark:hover:text-yellow-400',
  },
  {
    name: 'GeeksforGeeks',
    icon: <BookOpen size={24} />,
    url: 'https://www.geeksforgeeks.org/user/agarwalchcueb/',
    color: 'hover:text-red-500 dark:hover:text-red-400',
  },
  {
    name: 'Email',
    icon: <Mail size={24} />,
    url: 'mailto:agar.chetan1@gmail.com',
    color: 'hover:text-green-500 dark:hover:text-green-400',
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

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-white mb-8 transition-colors duration-300">
            Important Links
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-slate-300 ${link.color} transition-colors duration-300`}
                aria-label={link.name}
              >
                {link.icon}
                <span className="mt-2 text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;