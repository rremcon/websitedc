import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Office.css';
import officeLocation from "../../assets/difrnt-compound-office.png";

const Office = () => {
    const { t, i18n } = useTranslation('office');

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="office-container">
            <div className="office-content">
                <div className="language-switcher-container">
                    <LanguageSwitcher
                        currentLanguage={i18n.language}
                        onLanguageChange={handleLanguageChange}
                    />
                </div>

                <section className="office-section">
                    <h2>{t('office.title')}</h2>
                    <img className="contact-location__icon" src={officeLocation} alt="icon"/>
                    <p>{t('office.content')}</p>
                    {/*<ul>*/}
                    {/*    {t('office.items', { returnObjects: true }).map((item, index) => (*/}
                    {/*        <li key={index}>{item}</li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
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

export default Office;