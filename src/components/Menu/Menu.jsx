import React from 'react';
import IndicatorBar from '../Indicators/IndicatorBar';
import cs from './Menu.module.css'


const DATA = {
    "Humidity": 33,
    "LED": 0,
    "Temperature": 25.8
  }

// const objDATA = JSON.parse(DATA)


const values = Object.keys(DATA)

const data = values.map(i => 
  <IndicatorBar key={Math.random()} data={i} value={DATA[i]}/>
)

const Menu = () => {
    return (
        <main className={cs.menu}>
            {data}
        </main>
        
    );
};

export default Menu;