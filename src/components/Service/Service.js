import React from 'react';

function Service({img, servicesTitle, servicesDescription} ) {

    return (

        <div className="grid-service-tile">
                <img className="service-tile__icon" src={img} alt="icon"/>
                <h5 className="service-tile__title">{servicesTitle}</h5>
                <p>{servicesDescription}</p>
        </div>

    );
}

export default Service;