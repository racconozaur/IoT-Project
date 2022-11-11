import React, { useState } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import cs from './ToggleComp.module.css'

const ToggleComp = (props) => {

    const [toggleIsOn, setToggleIsOn] = useState(false)

    const toggleHandler = () => {
        setToggleIsOn(!toggleIsOn)
    }

    return (
       <div className={cs.toggleContainer}>
            <Toggle
                id='cheese-status'
                defaultChecked={toggleIsOn}
                onChange={toggleHandler} 
            />
            <label className={cs.toggleLabel} htmlFor='cheese-status'>{props.name}</label>
       </div>
    );
};

export default ToggleComp;