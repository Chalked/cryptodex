import React from 'react';
import classes from './Footer.css';

const footer = () => (
    <div id="footer" className={classes.Footer}>
        <a id="powered" href="https://www.coindesk.com/price/">Powered By Coindesk</a>
        <p>&copy; 2018 Zackary Moore</p>
    </div>
);

export default footer;