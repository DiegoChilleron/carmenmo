import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { t } = useTranslation();

  const handleSendMessage = () => {
    window.location.href = 'mailto:tu-email@ejemplo.com'; // Reemplazar con el email real
  };

  // Líneas verticales
  const verticalLines = [
    { id: 1, left: '15%' },
    { id: 2, left: '35%' },
    { id: 3, left: '65%' },
    { id: 4, left: '85%' }
  ];

  // Líneas horizontales
  const horizontalLines = [
    { id: 1, top: '20%' },
    { id: 2, top: '50%' },
    { id: 3, top: '80%' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <div className="contact__container">
          <h2 className="contact__title">
            {t('contact.title')}
          </h2>
          <p className="contact__description">
            {t('contact.description')}
          </p>
          <button onClick={handleSendMessage} className="contact__button button-gradient">
            {t('contact.button')}
          </button>
        </div>

        {/* Animated lines background */}
        <div className="contact__animation">
          {/* Líneas verticales */}
          {verticalLines.map((line) => (
            <motion.div
              key={`vertical-${line.id}`}
              className="contact__line contact__line--vertical"
              style={{ left: line.left }}
              animate={{
                y: [-100, 100, -100],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8 + line.id * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: line.id * 0.5
              }}
            />
          ))}

          {/* Líneas horizontales */}
          {horizontalLines.map((line) => (
            <motion.div
              key={`horizontal-${line.id}`}
              className="contact__line contact__line--horizontal"
              style={{ top: line.top }}
              animate={{
                x: [-100, 100, -100],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 10 + line.id * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: line.id * 0.7
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
