import React from 'react';
import IndicatorBar from '../Indicators/IndicatorBar';
import cs from './Menu.module.css'
import ProgressBar from "@ramonak/react-progress-bar";
import ToggleComp from '../UI/ToggleComp';






const Menu = (props) => {

    const values = Object.keys(props.data)


    return (
        <main className={cs.menu}>
            <div className={cs.indicatorMenu}>
                <IndicatorBar key={Math.random()} data={values[0]} value={props.data.Humidity}/>
                <IndicatorBar key={Math.random()} data={values[4]} value={props.data.Temperature}/>
                <IndicatorBar key={Math.random()} data={values[1]} value={props.data.LED}/>
                <IndicatorBar key={Math.random()} data={values[2]} value={props.data.Motor}/>
            </div>

            <div className={cs.indicatorMenu}>
                
            </div>
            
            <div className={cs.progressMenu}>
                <h2>Soil level {props.data.Soil >  824 ? 'is LOW' : 'is Normal'}</h2>
                <ProgressBar 
                    completed={props.data.Soil} 
                    maxCompleted={1024} 
                    bgColor={props.data.Soil >  824 ? '#FF9E9E' : '#64DE95'} 
                    width={'60vw'} 
                    height={'30px'} 
                    margin={'15px'}
                />
                <h2>Water level {props.data.Waterlvl >  10 ? 'is LOW' : 'is Normal'}</h2>
                <ProgressBar 
                    completed={props.data.Waterlvl} 
                    maxCompleted={16} 
                    bgColor={props.data.Waterlvl >  10 ? '#FF9E9E' : '#64DE95'} 
                    width={'60vw'} 
                    height={'30px'} 
                    margin={'15px'}
                />

            </div>
            
            <div className={cs.indicatorMenu}>
                <ToggleComp name={'Light'} property={'LED'} />
		        <ToggleComp name={'Motor'} property={'Motor'} />
                <ToggleComp name={'Waterpump'} property={'Waterpump'} />
            </div>
        </main>
        
    );
};

export default Menu;