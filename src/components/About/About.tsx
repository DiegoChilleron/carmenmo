import { useTranslation } from 'react-i18next';
import starIcon from '../../assets/icons/start_icon.svg';

interface ExperienceCardProps {
  position: string;
  company: string;
  date: string;
  description: string;
}

const ExperienceCard = ({ position, company, date, description }: ExperienceCardProps) => {
  return (
    <div className="about__card">
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
    window.open('/cv.pdf', '_blank'); // Asegúrate de colocar el CV en public/cv.pdf
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">
          {t('about.title')}
        </h2>

        {/* Información General */}
        <div className="about__section about__section--info">
          <img src={starIcon} alt="star" className="about__section-icon" />
          <h3 className="about__section-title">{t('about.infoTitle')}</h3>
          <p className="about__info-text">
            {t('about.infoText')}
          </p>
          <button onClick={handleDownloadCV} className="about__cv-button">
            {t('about.cvButton')}
          </button>
        </div>
        
        {/* Experiencia */}
        <div className="about__section">
          <img src={starIcon} alt="star" className="about__section-icon" />
          <h3 className="about__section-title">{t('about.experienceTitle')}</h3>
          <div className="about__cards">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
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
