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
                    <h2>{t('definitions.title')}</h2>
                    <p>{t('definitions.content')}</p>
                    <ul>
                        {t('definitions.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('applicability.title')}</h2>
                    <p>{t('applicability.content')}</p>
                </div>

                <div className="terms-section">
                    <h2>{t('quotesAndAgreements.title')}</h2>
                    <p>{t('quotesAndAgreements.content')}</p>
                    <ul>
                        {t('quotesAndAgreements.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('deliveryAndExecution.title')}</h2>
                    <p>{t('deliveryAndExecution.content')}</p>
                    <ul>
                        {t('deliveryAndExecution.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('intellectualProperty.title')}</h2>
                    <p>{t('intellectualProperty.content')}</p>
                    <ul>
                        {t('intellectualProperty.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('payment.title')}</h2>
                    <p>{t('payment.content')}</p>
                    <ul>
                        {t('payment.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('liability.title')}</h2>
                    <p>{t('liability.content')}</p>
                    <ul>
                        {t('liability.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('supportAndMaintenance.title')}</h2>
                    <p>{t('supportAndMaintenance.content')}</p>
                    <ul>
                        {t('supportAndMaintenance.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('securityAndPrivacy.title')}</h2>
                    <p>{t('securityAndPrivacy.content')}</p>
                    <ul>
                        {t('securityAndPrivacy.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('useOfOpenSourceSoftware.title')}</h2>
                    <p>{t('useOfOpenSourceSoftware.content')}</p>
                    <ul>
                        {t('useOfOpenSourceSoftware.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('confidentiality.title')}</h2>
                    <p>{t('confidentiality.content')}</p>
                    <ul>
                        {t('confidentiality.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('terminationAndExit.title')}</h2>
                    <p>{t('terminationAndExit.content')}</p>
                    <ul>
                        {t('terminationAndExit.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('forceMajeur.title')}</h2>
                    <p>{t('forceMajeur.content')}</p>
                    <ul>
                        {t('forceMajeur.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>{t('applicableLawAndDisputes.title')}</h2>
                    <p>{t('applicableLawAndDisputes.content')}</p>
                    <ul>
                        {t('applicableLawAndDisputes.items', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
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