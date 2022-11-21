import React from 'react';
import IndicatorBar from '../Indicators/IndicatorBar';
import cs from './Menu.module.css'



const Menu = (props) => {

    const values = Object.keys(props.data)

    const data = values.map(i => 
      <IndicatorBar key={Math.random()} data={i} value={props.data[i]}/>
    )

    return (
        <main className={cs.menu}>
            {data}
        </main>
        
    );
};

export default Menu;