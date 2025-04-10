import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="outer-content-container">
            <div className="inner-content-container default-text-restrictor default-area-padding">
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.subtitle')}</p>

                <form name="contact" className="contact-content__form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />

                    <label htmlFor="name-field">
                        {t('contact.form.name')}
                        <input type="text" id="name-field" name="name" placeholder={t('contact.form.name')} required />
                    </label>
                    <label htmlFor="email-field">
                        {t('contact.form.email')}
                        <input type="email" id="email-field" name="email" placeholder={t('contact.form.email')} required />
                    </label>
                    <label htmlFor="message-field">
                        {t('contact.form.message')}
                        <textarea name="message" id="message-field" cols="30" rows="10"
                                  placeholder={t('contact.form.message')} required></textarea>
                    </label>
                    <button type="submit">{t('contact.form.send')}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 