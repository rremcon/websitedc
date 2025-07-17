import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
    const { t } = useTranslation();

    return (
        <section id="intro" className="outer-content-container">
            <div className="inner-content-container default-area-padding default-text-restrictor">
                <h4 className="intro-title">
                    {t('intro.title')}
                </h4>
                <h6>
                    {t('intro.description1')}
                </h6>
                <h6>
                    {t('intro.description2')}
                </h6>
                <p className="intro__link">
                    {t('intro.question')} <Link to="/#contact">{t('intro.contactLink')}</Link>
                </p>
            </div>
        </section>
    );
};

export default Intro; 