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

  // Crear grid de rectangulos animados
  const gridItems = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="hero">
      {/* Animated background grid */}
      <div className="hero__background-grid">
        {gridItems.map((index) => (
          <motion.div
            key={index}
            className="hero__grid-item"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
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
