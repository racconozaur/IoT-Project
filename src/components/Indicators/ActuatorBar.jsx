import React from 'react';
import cs from './IndicatorBar.module.css'

const ActuatorBar = (props) => {
    return (
        <div className={cs.indicator}>
            <div className={cs.bar}>
                <p>{props.value}</p>
            </div>
            <div className={cs.title}>{props.data}</div>
        </div>
    );
};

export default ActuatorBar;