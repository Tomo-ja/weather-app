import React from "react"
import futureWeatherApi from "../apis/futureWeather";

import WeatherHourlyCard from "./WeatherHourlyCard"
import '../css/weatherHourly.css'
import { TimeOfUpdateData } from "../App";

export default function WeatherHourly(){

		const updateTime = React.useContext(TimeOfUpdateData)
		const [hourlyWeather, setHourlyWeather] = React.useState([])

		// based on the current time declare next 24 hours and put in an array
		const hours = []
		let hour = updateTime.hour
		let isAm = updateTime.amOrPm === "AM" ? true : false
		while(hours.length < 24){
			hour ++
			if(hour === 13){
				hour = 1
				isAm = !isAm
			}
			hours.push(`${hour} ${isAm ? "AM": "PM"}`)
		}

		//access api
		const getHourlyWeather = ()=>{
			return new Promise ((resolve, reject)=>{
				try{
					const data = futureWeatherApi.get(`data/2.5/onecall?lat=35&lon=139&exclude=current,minutely,daily,alerts&appid=748752212852e7cf71bcfcf6066d4ab0`)
					return resolve(data)
				}catch(err){
					return reject(err)
				}
			})
		}
	
		// store only hourly weather information and assign each of them as object into the state
		React.useEffect(()=>{
			const data = getHourlyWeather()
			data.then(res=>{
				setHourlyWeather([])
				for(let i=1; i<25; i++)
				setHourlyWeather(prev => ([
					...prev,
					res.data.hourly[i],
				]))
			})
		}, [updateTime])

	// create each hour's weather card
	const elementHourlyWeather = hourlyWeather.map((weather, index) =>{
		return(
			<WeatherHourlyCard
				key={hours[index]}
				hours={hours[index]}
				weatherInfo={weather}
			/>
		)
	})

	return(
		<section className="outer section weather-hourly">
			{elementHourlyWeather }
		</section>
	)
}