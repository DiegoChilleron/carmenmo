import { useEffect } from 'react';
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

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        <button className="project-modal__close" onClick={onClose} aria-label="Cerrar modal">
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
        </button>
        
        <div className="project-modal__content">
          {/* Columna izquierda - Imágenes */}
          <div className="project-modal__images">
            {images.map((image, index) => (
              <div key={index} className="project-modal__image-wrapper">
                <img 
                  src={image} 
                  alt={`${projectName} - Imagen ${index + 1}`}
                  className="project-modal__image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
          
          {/* Columna derecha - Información */}
          <div className="project-modal__info">
            <div className="project-modal__info-sticky">
              <h2 className="project-modal__title">{projectName}</h2>
              
              {projectDescription && (
                <p className="project-modal__description">{projectDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
