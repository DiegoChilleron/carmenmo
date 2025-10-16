import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectModal } from './ProjectModal';

// Importar imágenes de Cienfuegos
import cienfuegosPortada from '../../assets/photos/proyects/Cienfuegos/Cienfuegos-portada.webp';
import cienfuegos1 from '../../assets/photos/proyects/Cienfuegos/Cienfuegos-1.webp';
import cienfuegos2 from '../../assets/photos/proyects/Cienfuegos/Cienfuegos-2.webp';
import cienfuegos3 from '../../assets/photos/proyects/Cienfuegos/Cienfuegos-3.webp';

// Importar imágenes de Festival Tipográfico
import festivalTipograficoPortada from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-portada.webp';
import festivalTipografico1 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-1.webp';
import festivalTipografico2 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-2.webp';
import festivalTipografico3 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-3.webp';

interface ProjectCardProps {
  number: number;
  name: string;
  image: string;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ number, name, image, onClick, index }: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={cardRef}
      className="projects__card" 
      onClick={onClick} 
      style={{ cursor: 'pointer' }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="projects__card-image-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="projects__card-image"
        />
      </div>
      <div className="projects__card-info">
        <div className="projects__card-number">
          <span className="projects__card-number-text">{number}</span>
        </div>
        <h3 className="projects__card-name">{name}</h3>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<{ name: string; images: string[] } | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const projects = [
    {
      number: 1,
      name: t('projects.project1'),
      image: '/path/to/image1.jpg', // Placeholder - añadir ruta real
      images: []
    },
    {
      number: 2,
      name: t('projects.project2'),
      image: cienfuegosPortada,
      images: [
        cienfuegos1,
        cienfuegos2,
        cienfuegos3
      ]
    },
    {
      number: 3,
      name: t('projects.project3'),
      image: festivalTipograficoPortada,
      images: [
        festivalTipografico1,
        festivalTipografico2,
        festivalTipografico3
      ]
    },
    {
      number: 4,
      name: t('projects.project4'),
      image: '/path/to/image4.jpg', // Placeholder - añadir ruta real
      images: []
    },
    {
      number: 5,
      name: t('projects.project5'),
      image: '/path/to/image5.jpg', // Placeholder - añadir ruta real
      images: []
    },
    {
      number: 6,
      name: t('projects.project6'),
      image: '/path/to/image6.jpg', // Placeholder - añadir ruta real
      images: []
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.images.length > 0) {
      setSelectedProject({
        name: project.name,
        images: project.images
      });
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.h2 
          ref={titleRef}
          className="projects__title"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('projects.title')}
        </motion.h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              index={index}
              number={project.number}
              name={project.name}
              image={project.image}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        images={selectedProject?.images || []}
        projectName={selectedProject?.name || ''}
      />
    </section>
  )
}
