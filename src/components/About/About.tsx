import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import starIcon from '../../assets/icons/start_icon.svg';

interface ExperienceCardProps {
  position: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

const ExperienceCard = ({ position, company, date, description, index }: ExperienceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={cardRef}
      className="about__card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    >
      <h3 className="about__card-position">{position}</h3>
      <p className="about__card-company">{company}</p>
      <p className="about__card-date">{date}</p>
      <p className="about__card-description">{description}</p>
    </motion.div>
  );
};

export const About = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const experienceRef = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      position: t('about.experience1.position'),
      company: t('about.experience1.company'),
      date: t('about.experience1.date'),
      description: t('about.experience1.description')
    },
    {
      position: t('about.experience2.position'),
      company: t('about.experience2.company'),
      date: t('about.experience2.date'),
      description: t('about.experience2.description')
    },
    {
      position: t('about.experience3.position'),
      company: t('about.experience3.company'),
      date: t('about.experience3.date'),
      description: t('about.experience3.description')
    }
  ];

  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank'); // Asegúrate de colocar el CV en public/cv.pdf
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.h2 
          ref={titleRef}
          className="about__title"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('about.title')}
        </motion.h2>

        {/* Información General */}
        <motion.div 
          ref={infoRef}
          className="about__section about__section--info"
          initial={{ opacity: 0, y: 40 }}
          animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src={starIcon} alt="star" className="about__section-icon" />
          <h3 className="about__section-title">{t('about.infoTitle')}</h3>
          <p className="about__info-text">
            {t('about.infoText')}
          </p>
          <motion.button 
            onClick={handleDownloadCV} 
            className="about__cv-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about.cvButton')}
          </motion.button>
        </motion.div>
        
        {/* Experiencia */}
        <motion.div 
          ref={experienceRef}
          className="about__section about__section--experience"
          initial={{ opacity: 0, y: 40 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src={starIcon} alt="star" className="about__section-icon" />
          <h3 className="about__section-title">{t('about.experienceTitle')}</h3>
          <div className="about__cards">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                index={index}
                position={exp.position}
                company={exp.company}
                date={exp.date}
                description={exp.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
