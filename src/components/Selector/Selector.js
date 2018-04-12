import React from 'react';
import classes from './Selector.css';

const selector = (props) => {
    let options = props.currencies.map((money, i) => {
        return <option key={i} value={money.currency}>{money.country}</option>
    });
    
    return (
        <div className={classes.Selector}>
            <select id="selector" className={classes.Select} onChange={(e) => props.change(e)}>
                <option value="default">Choose a currency</option>
                {options}
            </select>
            <button onClick={() => props.clicked()} id="calculate">Calculate</button>
        </div>
    );
};

export default selector;