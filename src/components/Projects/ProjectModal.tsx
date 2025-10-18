import { useEffect, useState } from 'react';
import './ProjectModal.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
  projectDescription?: string;
}

export const ProjectModal = ({ isOpen, onClose, images, projectName, projectDescription }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldLoadImages, setShouldLoadImages] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Activar la carga de imágenes solo cuando el modal se abre
      setShouldLoadImages(true);
      // Resetear el índice al abrir
      setCurrentImageIndex(0);
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        <button className="project-modal__close" onClick={onClose}>
          ×
        </button>
        
        <div className="project-modal__content">
          <h2 className="project-modal__title">{projectName}</h2>
          
          {projectDescription && (
            <p className="project-modal__description">{projectDescription}</p>
          )}
          
          <div className="project-modal__image-container">
            {images.length > 1 && (
              <button 
                className="project-modal__nav project-modal__nav--prev" 
                onClick={prevImage}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
            )}
            
            {shouldLoadImages && (
              <img 
                src={images[currentImageIndex]} 
                alt={`${projectName} - Imagen ${currentImageIndex + 1}`}
                className="project-modal__image"
                loading="lazy"
              />
            )}
            
            {images.length > 1 && (
              <button 
                className="project-modal__nav project-modal__nav--next" 
                onClick={nextImage}
                aria-label="Siguiente imagen"
              >
                ›
              </button>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="project-modal__counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
