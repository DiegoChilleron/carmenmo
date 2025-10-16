import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Contact = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleSendMessage = () => {
    window.location.href = 'mailto:info@carmenmo.com';
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
        <motion.div 
          ref={containerRef}
          className="contact__container"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="contact__title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="contact__description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t('contact.description')}
          </motion.p>
          <motion.button 
            onClick={handleSendMessage} 
            className="contact__button button-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contact.button')}
          </motion.button>
        </motion.div>

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
