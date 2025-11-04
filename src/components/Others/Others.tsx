import { useTranslation } from 'react-i18next';
import comillasIcon from '../../assets/icons/comillas.svg';

export const Others = () => {
  const { t } = useTranslation();

  return (
    <section id="others" className="others">
      <div className="others__container">
        <h2 className="section-title autoShow">
          {t('others.title')}
        </h2>

        <div className="others__cards">
          <div className="others__card autoSlideLeft">
            <img src={comillasIcon} alt="comillas" className="others__card-icon" />
            <p className="others__card-text">{t('others.card1')}</p>
          </div>

          <div className="others__card autoSlideRight">
            <img src={comillasIcon} alt="comillas" className="others__card-icon" />
            <p className="others__card-text">{t('others.card2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
