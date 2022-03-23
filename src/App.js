import weatherData from './apis/weatherData';
import setLocation from './apis/setLocation';
import './App.css';

function App() {
  const getLocation = async()=>{
    try{
      const location = await setLocation.get('geo/1.0/direct?q=London&limit=&appid=748752212852e7cf71bcfcf6066d4ab0')
      const { lat, lon} = location.data[0]
      console.log(`${lat} and ${lon}`)
    }catch(err){
      console.log(err)
    }
  }
  const getWeatherData = async()=>{
    try{
      const data = await weatherData.get(`data/2.5/weather?lat=35&lon=139&appid=748752212852e7cf71bcfcf6066d4ab0`)
      console.log(data.data.weather[0].main)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="App" onClick={getWeatherData}>
      here
    </div>
  );
}

export default App;
