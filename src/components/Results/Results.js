import React from 'react';
import classes from './Results.css';

const results = (props) => {
    
    return (
        <div className={classes.Results}>
            <p id="top-line">1 Bitcoin = {props.rate}</p>
            <p id="currency">...in {props.currency}</p>
        </div>
    );
};

export default results;