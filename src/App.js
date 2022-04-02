import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import getDateNow from './functions/getDateNow'

import './App.css';

export const TimeOfUpdateData = React.createContext()
export const LocationInfo = React.createContext()



function App() {
  const [updateTime, setUpdateTime] = React.useState({})
  const [currentLocation, setCurrentLocation] = React.useState({
    "cityName": "London",
    "country": "GB",
    "lat": 51.5073219,
    "lon": -0.1276474
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
              currentLocation={currentLocation}
              setCurrentLocation={setCurrentLocation}/>
      <TimeOfUpdateData.Provider value={updateTime}>
      <LocationInfo.Provider value={currentLocation}>
        <Main />
      </LocationInfo.Provider>
      </TimeOfUpdateData.Provider>
      <Footer />
    </div>
  );
}

export default App;
