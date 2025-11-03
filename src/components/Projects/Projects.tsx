import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectModal } from './ProjectModal';

// Importar imágenes de Cienfuegos
import cienfuegosPortada from '../../assets/photos/proyects/Cienfuegos/cienfuegos-portada.webp';
import cienfuegos1 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-1.webp';
import cienfuegos2 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-2.webp';
import cienfuegos3 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-3.webp';
import cienfuegos4 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-4.webp';
import cienfuegos5 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-5.webp';
import cienfuegos6 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-6.webp';
import cienfuegos7 from '../../assets/photos/proyects/Cienfuegos/cienfuegos-7.webp';

// Importar imágenes de Festival Tipográfico
import festivalTipograficoPortada from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-portada.webp';
import festivalTipografico1 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-1.webp';
import festivalTipografico2 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-2.webp';
import festivalTipografico3 from '../../assets/photos/proyects/FestivalTipografico/FestivalTipografico-3.webp';

// Importar imágenes de RRSS
import rrssPortada from '../../assets/photos/proyects/RRSS/RRSS-portada.webp';
import rrss1 from '../../assets/photos/proyects/RRSS/RRSS-1.webp';
import rrss2 from '../../assets/photos/proyects/RRSS/RRSS-2.webp';
import rrss3 from '../../assets/photos/proyects/RRSS/RRSS-3.webp';
import rrss4 from '../../assets/photos/proyects/RRSS/RRSS-4.webp';
import rrss5 from '../../assets/photos/proyects/RRSS/RRSS-5.webp';
import rrss6 from '../../assets/photos/proyects/RRSS/RRSS-6.webp';
import rrss7 from '../../assets/photos/proyects/RRSS/RRSS-7.webp';
import rrss8 from '../../assets/photos/proyects/RRSS/RRSS-8.webp';
import rrss9 from '../../assets/photos/proyects/RRSS/RRSS-9.webp';
import rrss10 from '../../assets/photos/proyects/RRSS/RRSS-10.webp';
import rrss12 from '../../assets/photos/proyects/RRSS/RRSS-12.webp';

// Importar imagen de Ilustración
import ilustracionPortada from '../../assets/photos/proyects/Ilustracion/Ilustracion-portada.webp';

// Importar imágenes de Yvonne Aguirre
import yvonneAguirrePortada from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-portada.webp';
import yvonneAguirre1 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-1.webp';
import yvonneAguirre2 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-2.webp';
import yvonneAguirre3 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-3.webp';
import yvonneAguirre4 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-4.webp';
import yvonneAguirre5 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-5.webp';
import yvonneAguirre6 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-6.webp';
import yvonneAguirre7 from '../../assets/photos/proyects/YvonneAguirre/YvonneAguirre-7.webp';

// Importar imágenes de Editorial
import editorialPortada from '../../assets/photos/proyects/Editorial/Editorial-portada.webp';
import editorial1 from '../../assets/photos/proyects/Editorial/Editorial-1.webp';
import editorial2 from '../../assets/photos/proyects/Editorial/Editorial-2.webp';
import editorial3 from '../../assets/photos/proyects/Editorial/Editorial-3.webp';
import editorial4 from '../../assets/photos/proyects/Editorial/Editorial-4.webp';
import editorial5 from '../../assets/photos/proyects/Editorial/Editorial-5.webp';
import editorial6 from '../../assets/photos/proyects/Editorial/Editorial-6.webp';
import editorial7 from '../../assets/photos/proyects/Editorial/Editorial-7.webp';
import editorial8 from '../../assets/photos/proyects/Editorial/Editorial-8.webp';
import editorial9 from '../../assets/photos/proyects/Editorial/Editorial-9.webp';
import editorial10 from '../../assets/photos/proyects/Editorial/Editorial-10.webp';
import editorial11 from '../../assets/photos/proyects/Editorial/Editorial-11.webp';
import editorial12 from '../../assets/photos/proyects/Editorial/Editorial-12.webp';

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
      transition={{ duration: 0.6, delay: index * 0.15, ease: "linear" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="projects__card-image-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="projects__card-image"
          loading="lazy"
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
  const [selectedProject, setSelectedProject] = useState<{ name: string; images: string[]; description?: string } | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const projects = [
    {
      number: 1,
      name: t('projects.project1'),
      description: t('projects.project1Description'),
      image: editorialPortada,
      images: [
        editorial1,
        editorial2,
        editorial3,
        editorial4,
        editorial5,
        editorial6,
        editorial7,
        editorial8,
        editorial9,
        editorial10,
        editorial11,
        editorial12
      ]
    },
    {
      number: 2,
      name: t('projects.project2'),
      description: t('projects.project2Description'),
      image: cienfuegosPortada,
      images: [
        cienfuegos1,
        cienfuegos2,
        cienfuegos3,
        cienfuegos4,
        cienfuegos5,
        cienfuegos6,
        cienfuegos7
      ]
    },
    {
      number: 3,
      name: t('projects.project3'),
      description: t('projects.project3Description'),
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
      description: t('projects.project4Description'),
      image: rrssPortada,
      images: [
        rrss1,
        rrss2,
        rrss3,
        rrss4,
        rrss5,
        rrss6,
        rrss7,
        rrss8,
        rrss9,
        rrss10,
        rrss12
      ]
    },
    {
      number: 5,
      name: t('projects.project5'),
      description: t('projects.project5Description'),
      image: yvonneAguirrePortada,
      images: [
        yvonneAguirre1,
        yvonneAguirre2,
        yvonneAguirre3,
        yvonneAguirre4,
        yvonneAguirre5,
        yvonneAguirre6,
        yvonneAguirre7
      ]
    },
    {
      number: 6,
      name: t('projects.project6'),
      description: t('projects.project6Description'),
      image: ilustracionPortada,
      images: []
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.images.length > 0) {
      setSelectedProject({
        name: project.name,
        images: project.images,
        description: project.description
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
          transition={{ duration: 0.8, ease: "linear" }}
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
        projectDescription={selectedProject?.description}
      />
    </section>
  )
}
