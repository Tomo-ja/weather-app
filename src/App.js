import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import getDateNow from './functions/getDateNow'

import './App.css';

export const TimeOfUpdateData = React.createContext()
export const LocationsInfo = React.createContext()



function App() {
  const [updateTime, setUpdateTime] = React.useState({})
  const [locations, setLocations] = React.useState({
      "current": "London",
      "registered": []
  })

  const timeUpdate = ()=>{
		setUpdateTime(getDateNow)
	}

  // get the time when user open this app
  React.useEffect(()=>{
    timeUpdate()
  }, [])

  return (
    <div className="app">
      <Header timeUpdate={timeUpdate}
              locations={locations}
              registerLocation={setLocations}/>
      <TimeOfUpdateData.Provider value={updateTime}>
      <LocationsInfo.Provider value={locations.current}>
        <Main />
      </LocationsInfo.Provider>
      </TimeOfUpdateData.Provider>
      <Footer />
    </div>
  );
}

export default App;
