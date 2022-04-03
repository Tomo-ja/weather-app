import React from "react"
import futureWeatherApi from "../apis/futureWeather";
import getNext7Days from "../functions/getNext7Days";


import WeatherDailyCard from "./WeatherDailyCard"
import "../css/weatherDaily.css"
import { TimeOfUpdateData } from "../App";
import { LocationInfo } from '../App';


export default function WeatherWeekly(){
	const updateTime = React.useContext(TimeOfUpdateData)
	const locationInfo = React.useContext(LocationInfo)
	const [dailyWeather, setDailyWeather] = React.useState([])
	const [comingWeek, setComingWeek] = React.useState(getNext7Days())

	//access api to get daily date
	const getDailyWeather = () =>{
		return new Promise ((resolve, reject) => {
			try{
				const data = futureWeatherApi.get(`data/2.5/onecall?lat=${Math.round(locationInfo.lat)}&lon=${Math.round(locationInfo.lon)}&exclude=current,hourly,minutely,alerts&appid=7c946d2ea4cdcba86920391803ac6ba1`)
				return resolve(data)
			}catch(err){
				return reject(err)
			}
		})
	}

	React.useEffect(()=>{
		setComingWeek(getNext7Days())
	}, [updateTime])

	React.useEffect(()=>{
		const data = getDailyWeather()
		data.then(res=>{
			setDailyWeather([])
			for(let i=1; i<8; i++){
				setDailyWeather(prev =>([
					...prev,
					res.data.daily[i]
				]))
			}
		})
	}, [updateTime])

	const elementDailyWeather = dailyWeather.map((weather, index) =>{
		return(
		// 	<WeatherDailyCard
		// 	key={weather}
		// 	dayNum="1"
		// 	dayName="wed"
		// 	weatherInfo={weather}
		// />

			<WeatherDailyCard
				key={comingWeek[index].dayNum}
				dayNum={comingWeek[index].dayNum}
				dayName={comingWeek[index].dayName}
				weatherInfo={weather}
			/>
		)
	})




	return(
		<section className="section weather-daily">
			{elementDailyWeather}
		</section>
	)
}