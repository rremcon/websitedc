import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './TermsOfService.css';

const TermsOfService = () => {
    const { t, i18n } = useTranslation('terms-of-service');

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="terms-container">
            <div className="terms-content">
                <div className="language-switcher-container">
                    <LanguageSwitcher 
                        currentLanguage={i18n.language}
                        onLanguageChange={handleLanguageChange}
                    />
                </div>
                <h1>{t('title')}</h1>
                <p className="last-updated">{t('lastUpdated')}</p>

                <div className="terms-section">
                    <h2>{t('introduction.title')}</h2>
                    <p>{t('introduction.content')}</p>
                </div>

                <div className="terms-section">
                    <h2>{t('services.title')}</h2>
                    <p>{t('services.content')}</p>
                    <ul>
                        {t('services.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('userObligations.title')}</h2>
                    <p>{t('userObligations.content')}</p>
                    <ul>
                        {t('userObligations.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('liability.title')}</h2>
                    <p>{t('liability.content')}</p>
                </div>

                <div className="terms-section">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.content')}</p>
                </div>

                <div className="back-to-home">
                    <Link to="/" className="home-link" onClick={() => window.scrollTo(0, 0)}>
                        ← {t('Homepage')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService; 