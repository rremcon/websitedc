import React from 'react';

function LogoBig({img, imgTitle}) {

    return (

        <span className="image-wrapper-big">
        <img src={img}
             alt={imgTitle}
        />
        </span>
    );
}

export default LogoBig;