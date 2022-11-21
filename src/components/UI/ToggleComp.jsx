import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import cs from './ToggleComp.module.css'
import {db} from '../../firebase-config'
import { set, ref, onValue, remove, update } from "firebase/database";

const ToggleComp = (props) => {

    

    const [LED, setLEDIsOn] = useState(false)

    

    const toggleHandler = () => {
        setLEDIsOn(!LED)
        update(ref(db, `/`), {LED});
    }

    return (
       <div className={cs.toggleContainer}>
            <Toggle
                id='cheese-status'
                defaultChecked={!LED}
                onChange={toggleHandler} 
            />
            <label className={cs.toggleLabel} htmlFor='cheese-status'>{props.name}</label>
       </div>
       
    );
};

export default ToggleComp;