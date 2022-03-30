import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import getDateNow from './functions/getDateNow'

import './App.css';

export const WeatherData = React.createContext()



function App() {
  const [updateTime, setUpdateTime] = React.useState({})

  const timeUpdate = ()=>{
		setUpdateTime(getDateNow)
    console.log(updateTime)
	}

  return (
    <div className="app">
      <Header timeUpdate={timeUpdate}/>
      <Main updateTime={updateTime}/>
      <Footer />
    </div>
  );
}

export default App;
