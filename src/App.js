import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import getDateNow from './functions/getDateNow'

import './App.css';

export const TimeOfUpdateData = React.createContext()



function App() {
  const [updateTime, setUpdateTime] = React.useState({})

  const timeUpdate = ()=>{
		setUpdateTime(getDateNow)
	}

  // get the time when user open this app
  React.useEffect(()=>{
    timeUpdate()
  }, [])

  return (
    <div className="app">
      <Header timeUpdate={timeUpdate}/>
      <TimeOfUpdateData.Provider value={updateTime}>
        <Main />
      </TimeOfUpdateData.Provider>
      <Footer />
    </div>
  );
}

export default App;
