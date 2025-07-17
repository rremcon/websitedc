import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './App.css';
import Chatbot from "./components/Chatbot/Chatbot";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService/TermsOfService";
import Office from "./components/Office/Office";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from './assets/logoDCpuzzle.png';
import LogoRotating from "./components/Logo/LogoRotating";
import servicesIcon1 from './assets/icon_web-design.svg';
import servicesIcon2 from './assets/icon_web-development.svg';
import servicesIcon3 from './assets/icon_ux.svg';
import servicesIcon4 from './assets/icon_graphic-design.svg';
import servicesIcon5 from './assets/icon_seo.svg';
import servicesIcon6 from './assets/icon_copywriting.svg';
import people from './data';

function App() {
    const { t, i18n } = useTranslation();
    // const navigate = useNavigate();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [index, setIndex] = useState(0);
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: t('contact.form.submitting') });

        try {
            const formData = new FormData(e.target);
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setFormStatus({ type: 'success', message: t('contact.form.success') });
                e.target.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setFormStatus({ type: 'error', message: t('contact.form.error') });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % people.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    // }, [people.length]);

    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/office" element={<Office />} />
                <Route path="/" element={
                    <>
                        <header id="header" className="outer-content-container">
                            <div className="inner-content-container">
                                <nav className="navbar">
                                    <ul>
                                        <li><a href="#services">{t('header.services')}</a></li>
                                        <li><a href="#portfolio">{t('header.portfolio')}</a></li>
                                        <li><a href="#contact">{t('header.contact')}</a></li>
                                    </ul>
                                    <LanguageSwitcher 
                                        currentLanguage={currentLanguage}
                                        onLanguageChange={handleLanguageChange}
                                    />
                                </nav>

                                <LogoRotating
                                    className="App-logo-big"
                                    img={logo}
                                    imgTitle="logo"
                                />

                                <div className="header-content default-text-restrictor">
                                    <h1>{t('hero.title')}</h1>
                                    <p>{t('hero.subtitle')}</p>
                                    <a href="#contact">
                                        <button type="button">{t('hero.cta')}</button>
                                    </a>
                                </div>
                            </div>
                        </header>

                        <main>
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
                                        {t('intro.question')} <a href="#contact">{t('intro.contactLink')}</a>
                                    </p>
                                </div>
                            </section>

                            <section id="services" className="outer-content-container">
                                <div className="inner-content-container default-area-padding">
                                    <div className="services-title">
                                        <h2>{t('services.title')}</h2>
                                    </div>

                                    <div className="grid-service-container">
                                        <Service
                                            servicesTitle={t('services.webDevelopment.title')}
                                            servicesDescription={t('services.webDevelopment.description')}
                                            img={servicesIcon2}
                                        />

                                        <Service
                                            servicesTitle={t('services.webDesign.title')}
                                            servicesDescription={t('services.webDesign.description')}
                                            img={servicesIcon1}
                                        />

                                        <Service
                                            servicesTitle={t('services.userExperience.title')}
                                            servicesDescription={t('services.userExperience.description')}
                                            img={servicesIcon6}
                                        />

                                        <Service
                                            servicesTitle={t('services.workflows.title')}
                                            servicesDescription={t('services.workflows.description')}
                                            img={servicesIcon4}
                                        />

                                        <Service
                                            servicesTitle={t('services.webshops.title')}
                                            servicesDescription={t('services.webshops.description')}
                                            img={servicesIcon5}
                                        />

                                        <Service
                                            servicesTitle={t('services.ai.title')}
                                            servicesDescription={t('services.ai.description')}
                                            img={servicesIcon3}
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="portfolio" className="outer-content-container">
                                <div className="inner-content-container default-area-padding">
                                    <div className="portfolio-title">
                                        <h2>Portfolio</h2>
                                    </div>

                                    <div className="portfolio-container">
                                        {people.map((person, personIndex) => {
                                            const {id, image, name, title, description} = person;

                                            let position = 'nextSlide';
                                            if (personIndex === index) {
                                                position = 'activeSlide';
                                            }

                                            if (
                                                personIndex === index - 1 ||
                                                (index === 0 && personIndex === people.length - 1)
                                            ) {
                                                position = 'lastSlide';
                                            }

                                            return (
                                                <Portfolio
                                                    key={id}
                                                    position={position}
                                                    id={id}
                                                    image={image}
                                                    name={name}
                                                    title={title}
                                                    description={description}
                                                />
                                            );
                                        })}

                                        <button className="prev" onClick={() => setIndex(index - 1)}>
                                            <FiChevronLeft/>
                                        </button>
                                        <button className="next" onClick={() => setIndex(index + 1)}>
                                            <FiChevronRight/>
                                        </button>
                                    </div>
                                </div>
                            </section>

                            <section id="contact" className="outer-content-container">
                                <div className="inner-content-container default-text-restrictor default-area-padding">
                                    <h2>{t('contact.title')}</h2>
                                    <p>{t('contact.subtitle')}</p>

                                    {formStatus.message && (
                                        <div className={`form-status ${formStatus.type}`}>
                                            {formStatus.message}
                                        </div>
                                    )}

                                    <form 
                                        name="contact" 
                                        className="contact-content__form" 
                                        method="POST" 
                                        data-netlify="true"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="contact" />

                                        <label htmlFor="name-field">
                                            {t('contact.form.name')}
                                            <input type="text" id="name-field" name="name" placeholder={t('contact.form.name')}/>
                                        </label>
                                        <label htmlFor="email-field">
                                            {t('contact.form.email')}
                                            <input type="email" id="email-field" name="email" placeholder={t('contact.form.email')}/>
                                        </label>
                                        <label htmlFor="message-field">
                                            {t('contact.form.message')}
                                            <textarea name="message" id="message-field" cols="30" rows="10"
                                                      placeholder={t('contact.form.message')}></textarea>
                                        </label>
                                        <button type="submit">{t('contact.form.send')}</button>
                                    </form>
                                </div>
                            </section>
                        </main>

                        <Footer />
                        <Chatbot />
                    </>
                } />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
