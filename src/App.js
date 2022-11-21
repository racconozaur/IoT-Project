import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import ToggleComp from './components/UI/ToggleComp';
import {db} from './firebase-config'
import { set, ref, onValue} from "firebase/database";



function App() {

	const [data, setData] = useState([])

	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			setData([])
			const data = snapshot.val()
			
			if(data !== null){
				setData(data)
			}
		})
	}, [])

	return (
	<>
		<Header/>
		<Menu data={data}/>
		

		<ToggleComp name={'Light'} data={data}/>
	</>
	);
}

export default App;
