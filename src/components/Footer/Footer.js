import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="outer-content-container">
            <div className="inner-content-container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        {t('footer.copyright')}
                    </div>
                    <div className="footer-links">
                        <Link to="/privacy-policy">{t('footer.privacy')}</Link>
                        <Link to="/terms-of-service">{t('footer.terms')}</Link>
                        <Link to="/office">{t('footer.office')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 