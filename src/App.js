import React from 'react';
import weatherDataApi from './apis/weatherData';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export const WeatherData = React.createContext()



function App() {

  const getWeatherData = async()=>{
    try{
      const data = await weatherDataApi.get(`data/2.5/weather?lat=35&lon=139&appid=748752212852e7cf71bcfcf6066d4ab0`)
      console.log(data.data.weather[0].main)
    }catch(err){
      console.log(err)
      
    }
  }
  return (
    <div className="app">
        {/* <weatherData.Provider> */}
          <Header/>
        {/* </weatherData.Provider> */}
      {/* <weatherData.Provider> */}
        <Main />
      {/* </weatherData.Provider> */}
    </div>
  );
}

export default App;
