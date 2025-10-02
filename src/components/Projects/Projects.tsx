import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  number: number;
  name: string;
  image: string;
}

const ProjectCard = ({ number, name, image }: ProjectCardProps) => {
  return (
    <div className="projects__card">
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
    </div>
  );
};

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      number: 1,
      name: t('projects.project1'),
      image: '/path/to/image1.jpg' // Placeholder - añadir ruta real
    },
    {
      number: 2,
      name: t('projects.project2'),
      image: '/path/to/image2.jpg' // Placeholder - añadir ruta real
    },
    {
      number: 3,
      name: t('projects.project3'),
      image: '/path/to/image3.jpg' // Placeholder - añadir ruta real
    },
    {
      number: 4,
      name: t('projects.project4'),
      image: '/path/to/image4.jpg' // Placeholder - añadir ruta real
    },
    {
      number: 5,
      name: t('projects.project5'),
      image: '/path/to/image5.jpg' // Placeholder - añadir ruta real
    },
    {
      number: 6,
      name: t('projects.project6'),
      image: '/path/to/image6.jpg' // Placeholder - añadir ruta real
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          {t('projects.title')}
        </h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
