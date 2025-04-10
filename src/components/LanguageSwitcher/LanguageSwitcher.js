import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
    return (
        <div className="language-switcher">
            <button
                className={`language-button ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => onLanguageChange('en')}
                title="English"
            >
                <img src="/images/flags/en.svg" alt="English" />
            </button>
            <button
                className={`language-button ${currentLanguage === 'de' ? 'active' : ''}`}
                onClick={() => onLanguageChange('de')}
                title="Deutsch"
            >
                <img src="/images/flags/de.svg" alt="Deutsch" />
            </button>
            <button
                className={`language-button ${currentLanguage === 'nl' ? 'active' : ''}`}
                onClick={() => onLanguageChange('nl')}
                title="Nederlands"
            >
                <img src="/images/flags/nl.svg" alt="Nederlands" />
            </button>
        </div>
    );
};

export default LanguageSwitcher; 