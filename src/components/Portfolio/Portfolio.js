import React from 'react';
import {FaQuoteRight} from "react-icons/fa";

function Portfolio({position, id, image, name, title, description}) {

    return (

            <article className={position} key={id}>
                <img src={image} alt={name} className="portfolio-img"/>
                <h6 className="portfolio-domain-name">{name}</h6>
                {/*<p className="portfolio-title">{title}</p>*/}
                <p className="portfolio-text">{description}</p>
                {/*<FaQuoteRight className="portfolio-icon"/>*/}
            </article>

    );
}

export default Portfolio;