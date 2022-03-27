import React from 'react';
import weatherDataApi from './apis/weatherData';
import setLocationApi from './apis/setLocation';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export const locationData = React.createContext()
export const weatherData = React.createContext()

function App() {
  const getLocation = async()=>{
    try{
      const location = await setLocationApi.get('geo/1.0/direct?q=London&limit=&appid=748752212852e7cf71bcfcf6066d4ab0')
      const { lat, lon} = location.data[0]
      console.log(`${lat} and ${lon}`)
    }catch(err){
      console.log(err)
    }
  }
  const getWeatherData = async()=>{
    try{
      const data = await weatherDataApi.get(`data/2.5/weather?lat=35&lon=139&appid=748752212852e7cf71bcfcf6066d4ab0`)
      console.log(data.data.weather[0].main)
    }catch(err){
      console.log(err)
      
    }
  }
  return (
    <div className="app" onClick={getWeatherData}>
      <locationData.Provider value="Vancouver" >
        <weatherData.Provider>
          <Header/>
        </weatherData.Provider>
      </locationData.Provider>
      <weatherData.Provider>
        <Main />
      </weatherData.Provider>
    </div>
  );
}

export default App;
