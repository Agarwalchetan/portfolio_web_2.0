import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300"
          >
            Chetan<span className="text-primary-500">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400'
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400'
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/coming-soon" 
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400'
                }`
              }
            >
              Coming Soon
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-slate-900 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/coming-soon" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Coming Soon
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;