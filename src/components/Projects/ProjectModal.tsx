import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
  projectDescription?: string;
}

export const ProjectModal = ({ isOpen, onClose, images, projectName, projectDescription }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="project-modal-overlay" 
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="project-modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.button 
              className="project-modal__close" 
              onClick={onClose} 
              aria-label="Cerrar modal"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </motion.button>
        
        <div className="project-modal__content">
          {/* Columna izquierda - Imágenes */}
          <div className="project-modal__images">
            {images.map((image, index) => (
              <motion.div 
                key={index} 
                className="project-modal__image-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <img 
                  src={image} 
                  alt={`${projectName} - Imagen ${index + 1}`}
                  className="project-modal__image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Columna derecha - Información */}
          <motion.div 
            className="project-modal__info"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="project-modal__info-sticky">
              <h2 className="project-modal__title">{projectName}</h2>
              
              {projectDescription && (
                <p className="project-modal__description">{projectDescription}</p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};
