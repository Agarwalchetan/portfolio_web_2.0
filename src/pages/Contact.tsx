import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    details: 'New Delhi, India',
  },
  {
    icon: <Github size={24} />,
    title: 'Github',
    details: 'AgarwalChetan',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email',
    details: 'agar.chetan1@gmail.com',
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

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            Get In Touch
          </span>
        </h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-300 mb-16 max-w-3xl mx-auto transition-colors duration-300">
          Have a question or want to work together? Feel free to contact me using the form below or through any of the provided contact methods.
        </p>
        
        <div className="mb-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 text-center transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-500 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                  {info.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  {info.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GoogleMap />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;