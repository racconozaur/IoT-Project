import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import ToggleComp from './components/UI/ToggleComp';
import {db} from './firebase-config'
import { set, ref, onValue} from "firebase/database";



function App() {

	const [data, setData] = useState([])

	// function getData(){
	// 	onValue(ref(db), async (snapshot) => {
	
	// 		const data = await snapshot.val()
			
	// 		if(data !== null){
	// 			setData(data)
	// 		}
	// 	})
	// }

	const getAll = async () => {
		try {
			onValue(ref(db), async (snapshot) => {
	
				const data = await snapshot.val()
				
				if(data !== null){
					setData(data)
					return data
				}
			})
		} catch (error) {
			alert(error)
		}
	}

	useEffect(() => {
		getAll()
	}, [])

	





	return (
	<>
		<Header/>
		<Menu data={data}/>
		
	</>
	);
}

export default App;
