import React from "react";
import futureWeatherApi from "../apis/futureWeather";
import WeatherNow from "./WeatherNow";
import WeatherHourly from "./WeatherHourly";
import WeatherWeekly from "./WeatherWeekly";


export default function Main (props){

	const [futureWeather, setFutureWeather] = React.useState({})


	const getFutureWeatherData = ()=>{
		return new Promise ((resolve, reject)=>{
			try{
				const data = futureWeatherApi.get(`data/2.5/onecall?lat=35&lon=139&exclude=minutely,alerts&appid=748752212852e7cf71bcfcf6066d4ab0`)
				return resolve(data)
			}catch(err){
				return reject(err)
			}
		})
	}

	React.useEffect(()=>{
		const data = getFutureWeatherData()
		data.then(res=>{
			for(let i=1; i<25; i++)
			setFutureWeather(old => ({
				...old,
				[`hourLater${i}`]: res.data.hourly[i],
			  }))
		})
		.then(res=>{
			console.log(futureWeather)
		})
	}, [props.updateTime])


	return(
		<main className="main outer">
			<WeatherNow />
			<h2 className="main_section-title">24 HOUR FORECAST</h2>
			<WeatherHourly />
			<h2 className="main_section-title">7 DAY FORECAST</h2>
			<WeatherWeekly />
		</main>
	)
}