import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Certificate } from '../../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
    >
      <div className="h-36 overflow-hidden">
        <LazyLoadImage
          src={certificate.imageUrl}
          alt={certificate.title}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
          {certificate.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 transition-colors duration-300">
          {certificate.issuer} • {certificate.date}
        </p>
        {certificate.pdfUrl && (
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
          >
            <FileText size={16} className="mr-1 text-primary-500" />
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;