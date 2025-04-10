import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';
import logo from '../../assets/flat_image_rotaded-bg-transparent3.png';
import LogoRotating from '../Logo/LogoRotating';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="header" className="outer-content-container">
            <div className="inner-content-container">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/#services">{t('header.services')}</Link></li>
                        <li><Link to="/#portfolio">{t('header.portfolio')}</Link></li>
                        <li><Link to="/#contact">{t('header.contact')}</Link></li>
                    </ul>
                    <LanguageSwitcher />
                </nav>

                <LogoRotating
                    className="App-logo-big"
                    img={logo}
                    imgTitle="logo"
                />

                <div className="header-content default-text-restrictor">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.subtitle')}</p>
                    <Link to="/#contact">
                        <button type="button">{t('hero.cta')}</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header; 