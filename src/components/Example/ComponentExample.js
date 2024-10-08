import React from 'react';
import styles from './ComponentExample.module.css'

function ComponentExample( {personName, personProfession} ) {
    return (
        <>
        <article className={ styles.componentexample }>
            <h2>{personName}</h2>
            <p>{personProfession}</p>
        </article>
        </>
    );
}

export default ComponentExample;