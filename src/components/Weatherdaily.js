import React from "react"
import futureWeatherApi from "../apis/futureWeather";


import WeatherDailyCard from "./WeatherDailyCard"
import "../css/weatherDaily.css"
import { TimeOfUpdateData } from "../App";
import { LocationInfo } from '../App';


export default function WeatherWeekly(){
	const updateTime = React.useContext(TimeOfUpdateData)
	const locationInfo = React.useContext(LocationInfo)
	const [dailyWeather, setDailyWeather] = React.useState([])

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

	//set next 7 days day number and day name when user update the date
	let days = [{"dayNum": 0, "dayName": 0}]
	let day = new Date()
	const addDate = 1
	const addDateTill = 7
	const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	React.useEffect(()=>{
		days = []
		day = new Date()
		for (let i = 1; i<= addDateTill; i++){
			day.setDate(day.getDate() + addDate)
			days.push({"dayNum": day.getDate(), "dayName": weekName[day.getDay()]})
		}
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
			<WeatherDailyCard
			key={weather}
			dayNum="1"
			dayName="wed"
			weatherInfo={weather}
		/>

			// <WeatherDailyCard
			// 	key={days[index].dayNum}
			// 	dayNum={days[index].dayNum}
			// 	dayName={days[index].dayName}
			// 	weatherInfo={weather}
			// />
		)
	})




	return(
		<section className="section weather-daily">
			{elementDailyWeather}
		</section>
	)
}