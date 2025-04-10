import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const { t, i18n } = useTranslation('privacy-policy');

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="policy-container">
            <div className="policy-content">
                <div className="language-switcher-container">
                    <LanguageSwitcher 
                        currentLanguage={i18n.language}
                        onLanguageChange={handleLanguageChange}
                    />
                </div>
                <h1>{t('title')}</h1>
                <p className="last-updated">{t('lastUpdated')}</p>

                <section className="policy-section">
                    <h2>{t('introduction.title')}</h2>
                    <p>{t('introduction.content')}</p>
                </section>

                <section className="policy-section">
                    <h2>{t('dataCollection.title')}</h2>
                    <p>{t('dataCollection.content')}</p>
                    <ul>
                        {t('dataCollection.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>{t('dataUse.title')}</h2>
                    <p>{t('dataUse.content')}</p>
                    <ul>
                        {t('dataUse.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>{t('dataSecurity.title')}</h2>
                    <p>{t('dataSecurity.content')}</p>
                </section>

                <section className="policy-section">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.content')}</p>
                </section>

                <div className="back-to-home">
                    <Link to="/" className="home-link" onClick={() => window.scrollTo(0, 0)}>
                        ← {t('Homepage')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 