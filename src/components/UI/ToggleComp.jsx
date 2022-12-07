import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import cs from './ToggleComp.module.css'
import {db} from '../../firebase-config'
import { set, ref, onValue, remove, update } from "firebase/database";

const ToggleComp = (props) => {

    const [state, setIsOn] = useState(false)

    let property = props.property

    let data = {
        [property]: state
    }

    

    const toggleHandler = () => {
        setIsOn(!state)
        update(ref(db, `/`), data);
        console.log(data[property]);
    }

    return (
       <div className={cs.toggleContainer}>
            <Toggle
                id='status'
                defaultChecked={!state}
                onChange={toggleHandler} 
            />
            <label className={cs.toggleLabel} htmlFor='status'>{props.name}</label>

       </div>
       
    );
};

export default ToggleComp;