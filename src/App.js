import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import ToggleComp from './components/UI/ToggleComp';


function App() {
  return (
    <>
		<Header/>
		<Menu/>

		<ToggleComp name={'Light'}/>
    </>
  );
}

export default App;
