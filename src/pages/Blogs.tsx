import React from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../components/blogs/CertificateCard';
import AchievementTimeline from '../components/blogs/AchievementTimeline';
import { certificates } from '../data/certificates';

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            Certificates & Achievements
          </span>
        </h1>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
              Certificates
            </span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </motion.div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
              Achievements
            </span>
          </h2>
          <AchievementTimeline />
        </div>
      </div>
    </div>
  );
};

export default Blogs;