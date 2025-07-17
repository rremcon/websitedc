import React from 'react';
import { useTranslation } from 'react-i18next';
import Service from '../Service/Service';
import servicesIcon1 from '../../assets/icon_web-design.svg';
import servicesIcon2 from '../../assets/icon_web-development.svg';
import servicesIcon3 from '../../assets/icon_ux.svg';
import servicesIcon4 from '../../assets/icon_graphic-design.svg';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();

    return (
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
                        img={servicesIcon3}
                    />

                    <Service
                        servicesTitle={t('services.workflows.title')}
                        servicesDescription={t('services.workflows.description')}
                        img={servicesIcon4}
                    />

                    <Service
                        servicesTitle={t('services.webshops.title')}
                        servicesDescription={t('services.webshops.description')}
                        img={servicesIcon4}
                    />

                    <Service
                        servicesTitle={t('services.ai.title')}
                        servicesDescription={t('services.ai.description')}
                        img={servicesIcon3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services; 