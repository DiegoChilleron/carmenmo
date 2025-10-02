import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logoHero from '../../assets/icons/logo_hero.svg';
import vectorIcon from '../../assets/icons/vector_icon.svg';

export const Hero = () => {
  const { t } = useTranslation();

  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tools = ['Indesign', 'Premiere Pro', 'After Effects', 'Illustrator'];
  
  // Duplicamos el array para crear un loop infinito sin cortes
  const duplicatedTools = [...tools, ...tools, ...tools,...tools, ...tools, ...tools];

  // Líneas verticales - posiciones en porcentaje
  const verticalLines = [10, 25, 40, 55, 70, 85];
  
  // Líneas horizontales - posiciones en porcentaje
  const horizontalLines = [15, 35, 55, 75];

  return (
    <section className="hero">
      {/* Animated grid background */}
      <div className="hero__grid-background">
        {/* Líneas verticales */}
        {verticalLines.map((position, index) => (
          <motion.div
            key={`v-${index}`}
            className="hero__grid-line hero__grid-line--vertical"
            style={{ left: `${position}%` }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleY: [0, 1, 0.8, 1],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
        
        {/* Líneas horizontales */}
        {horizontalLines.map((position, index) => (
          <motion.div
            key={`h-${index}`}
            className="hero__grid-line hero__grid-line--horizontal"
            style={{ top: `${position}%` }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleX: [0, 1, 0.8, 1],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
        ))}
      </div>

      <div className="hero__container">
        <img 
          src={logoHero} 
          alt="Carmen Moreno Logo" 
          className="hero__logo"
        />
        <h1 className="hero__title">
          {t('hero.title')}
        </h1>
        <p className="hero__description">
          {t('hero.description')} <span className="hero__description--italic">{t('hero.motto')}</span>
        </p>
        <button onClick={handleLearnMore} className="hero__button button-gradient">
          {t('hero.button')}
        </button>

        {/* Animated tools slider */}
        <div className="hero__tools-slider">
          <motion.div
            className="hero__tools-track"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div key={index} className="hero__tool-item">
                <span className="hero__tool-text">{tool}</span>
                <img 
                  src={vectorIcon} 
                  alt="separator" 
                  className="hero__tool-icon"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
