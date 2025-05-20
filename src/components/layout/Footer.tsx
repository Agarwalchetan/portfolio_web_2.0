import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 transition-colors duration-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
              &copy; {new Date().getFullYear()} Chetan Agarwal. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Agarwalchetan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/agarwalchetan10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a> */}
            <a
              href="mailto:agarwalchetan1302@gmail.com"
              className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;