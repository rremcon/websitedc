import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import './App.css';
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import servicesIcon1 from './assets/icon_web-design.svg';
import servicesIcon2 from './assets/icon_web-development.svg';
import servicesIcon3 from './assets/icon_ux.svg';
import servicesIcon4 from './assets/icon_graphic-design.svg';
import LogoBig from "./components/Picture/LogoBig";
import logo from "./assets/DC-logo-transparent.png";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';


function App() {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);


    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2500);

        return () => {
            clearInterval(slider);
        };
    }, [index]);



    return (
        <>
                <header id="header" className="outer-content-container">

                    <div className="inner-content-container">

                        <nav className="navbar">
                            <ul>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </nav>


                        <LogoBig
                            img={logo}
                            imgTitle="logo"
                            onClick={() => navigate('/')}
                        />


                        <div className="header-content default-text-restrictor">

                            <h1>Your website is an investment in the success of your business.</h1>
                            <p>We are here to help you succeed.</p>
                            
                            <a href="#contact">
                                <button type="button">Let's work together
                            </button></a>

                    </div>
                    </div>
                    {/*<div className="header__squiggle"></div>*/}
                </header>


                <main>
                    <section id="intro" className="outer-content-container">
                        <div className="inner-content-container default-area-padding default-text-restrictor">
                            <h4 className="intro-title">
                                Software Services & Business Connecting.
                            </h4>
                            <h6>
                                We deliver high quality software that is build with the modernst tools on the market.
                            </h6>
                            <h6>
                                We see every project as a fresh opportunity, pushing ourselves to create new digital
                                experiences and beautiful visual designs to help your business grow.
                            </h6>
                            <p className="intro__link">Have a question? <a href="#contact">Click here</a> to contact us!
                            </p>

                        </div>
                    </section>


                    <section id="services" className="outer-content-container">
                        <div className="inner-content-container default-area-padding">

                            <div className="services-title">
                                <h2>Services</h2>
                            </div>

                                <div className="grid-service-container">

                                <Service
                                    servicesTitle="Web Development"
                                    servicesDescription="Modern websites need to be responsive and fully functional at all sizes. We develop
                                    all of our
                                    applications
                                    with a mobile first approach and ensure that our code quality is clean, organized
                                    and
                                    performant.
                                    Already have a design but need it developed? We’re here to help!"
                                    img={servicesIcon2}
                                />

                                <Service
                                    servicesTitle="Web Design"
                                    servicesDescription="Good web design is how companies stand out from their competitors. High quality web
                                    design leads
                                    to
                                    increased user conversion and engagement. Through a proven web design process, we
                                    help clients
                                    launch webapps and software products that improve on their bottom line."
                                    img={servicesIcon1}
                                />

                                <Service
                                    servicesTitle="User Experience"
                                    servicesDescription="In order to build successful products you have to understand the user. We create user
                                    personas,
                                    wireframes and prototypes to test with users. This allows us to gather feedback
                                    which helps to
                                    shape
                                    the product and can quickly eliminate potential risks – saving you time and
                                    money."
                                    img={servicesIcon3}
                                />

                                <Service
                                    servicesTitle="Branding"
                                    servicesDescription="Nike, Apple, Coca-Cola, Starbucks. What do all of these brands have in common? Easily
                                    recognizable
                                    logos and brand identity. The best brands stand out from the crowd by having a clear
                                    and unique
                                    point of view. We will work with you to understand your vision and help create a
                                    unique brand
                                    identity and style guide for your company."
                                    img={servicesIcon4}
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
                            <h2>Let's work together</h2>
                            <p>Have a question? Need a quote? Let us know!</p>

                            {/*FORM RECOGNIZING FOR NETLIFY*/}
                            <form name="contact" className="contact-content__form" method="POST" data-netlify="true">

                                {/*FORM RECOGNIZING FOR NETLIFY*/}
                                <input type="hidden" name="form-name" value="contact" />

                                <label htmlFor="name-field">
                                    Name
                                    <input type="text" id="name-field" name="name" placeholder="Name"/>
                                </label>
                                <label htmlFor="email-field">
                                    Email
                                    <input type="email" id="email-field" name="email" placeholder="Email"/>
                                </label>
                                <label htmlFor="message-field">
                                    Message
                                    <textarea name="message" id="message-field" cols="30" rows="10"
                                              placeholder="Message"></textarea>
                                </label>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </section>
                </main>


                <footer id="footer" className="outer-content-container">
                    <div className="inner-content-container">
                        DIFRNT COMPOUND &copy; 2025
                    </div>
                </footer>

        </>
    )
        ;
}


export default App;
