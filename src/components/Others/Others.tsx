import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import comillasIcon from '../../assets/icons/comillas.svg';

export const Others = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const card1InView = useInView(card1Ref, { once: true, margin: "-100px" });
  const card2InView = useInView(card2Ref, { once: true, margin: "-100px" });

  return (
    <section id="others" className="others">
      <div className="others__container">
        <motion.h2 
          ref={titleRef}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('others.title')}
        </motion.h2>

        <div className="others__cards">
          <motion.div 
            ref={card1Ref}
            className="others__card"
            initial={{ opacity: 0, x: -50 }}
            animate={card1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <img src={comillasIcon} alt="comillas" className="others__card-icon" />
            <p className="others__card-text">{t('others.card1')}</p>
          </motion.div>

          <motion.div 
            ref={card2Ref}
            className="others__card"
            initial={{ opacity: 0, x: 50 }}
            animate={card2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <img src={comillasIcon} alt="comillas" className="others__card-icon" />
            <p className="others__card-text">{t('others.card2')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
