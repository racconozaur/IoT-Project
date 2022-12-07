import React from 'react';
import cs from './IndicatorBar.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const IndicatorBar = (props) => {


   

    return (
        <div className={cs.indicator}>
            <div className={cs.bar}>
                <CircularProgressbar 
                    value={props.value} 
                    text={`${props.value} %`}
                    styles={buildStyles({
                        textColor: '#FFFFFF',
                        textSize: '16px',
                        pathColor: '#64DE95',
                        pathTransitionDuration: 0.5,
                    })}
                />
            </div>
            <div className={cs.title}>{props.data}</div>
        </div>
    );
};

export default IndicatorBar;