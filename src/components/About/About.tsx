import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import starIcon from '../../assets/icons/start_icon.svg';

interface ExperienceCardProps {
  position: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

const ExperienceCard = ({ position, company, date, description }: ExperienceCardProps) => {
  return (
    <div className="about__card autoShow">
      <h3 className="about__card-position">{position}</h3>
      <p className="about__card-company">{company}</p>
      <p className="about__card-date">{date}</p>
      <p className="about__card-description">{description}</p>
    </div>
  );
};

export const About = () => {
  const { t } = useTranslation();

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
    const link = document.createElement('a');
    link.href = '/assets/icons/pdf/Carmen_Moreno_CV.pdf';
    link.download = 'Carmen_Moreno_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title autoShow">
          {t('about.title')}
        </h2>

        {/* Información General */}
        <div className="about__section about__section--info autoShow">
          <img src={starIcon} alt="star" className="about__section-icon autoRotate" />
          <h3 className="about__section-title">{t('about.infoTitle')}</h3>
          <p className="about__info-text">
            {t('about.infoText.part1')}
            <strong>{t('about.infoText.highlight1')}</strong>
            {t('about.infoText.part2')}
            <strong>{t('about.infoText.highlight2')}</strong>
            {t('about.infoText.part3')}
            <strong>{t('about.infoText.highlight3')}</strong>
            {t('about.infoText.part4')}
          </p>
          <motion.button 
            onClick={handleDownloadCV} 
            className="about__cv-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about.cvButton')}
          </motion.button>
        </div>
        
        {/* Experiencia */}
        <div className="about__section about__section--experience autoShow">
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
        </div>
      </div>
    </section>
  )
}
