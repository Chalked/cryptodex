import React from 'react';
import classes from './About.css';

const about = () => (
    <div className={classes.About}>
        <h2>Welcome!</h2>
        <p>CryptoDex is a tool that allows you to translate the real-time value of 1 Bitcoin into a multitude of currencies with the click of a button!</p>
        <p>Select a currency from the menu below to begin.</p>
    </div>
);

export default about;