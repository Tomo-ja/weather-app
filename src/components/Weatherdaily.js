import React from "react"
import futureWeatherApi from "../apis/futureWeather";


import WeatherDailyCard from "./WeatherDailyCard"
import "../css/weatherWeekly.css"
import { TimeOfUpdateData } from "../App";


export default function WeatherWeekly(){
	const updateTime = React.useContext(TimeOfUpdateData)
	const [dailyWeather, setDailyWeather] = React.useState([])

	//access api to get daily date
	const getDailyWeather = () =>{
		return new Promise ((resolve, reject) => {
			try{
				const data = futureWeatherApi.get(`data/2.5/onecall?lat=35&lon=139&exclude=current,hourly,minutely,alerts&appid=748752212852e7cf71bcfcf6066d4ab0`)
				return resolve(data)
			}catch(err){
				return reject(err)
			}
		})
	}

	//set next 7 days day number and day name when user update the date
	const days = []
	let day = new Date()
	const addDate = 1
	const addDateTill = 7
	const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	React.useEffect(()=>{
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
				key={days[index].dayNum}
				dayNum={days[index].dayNum}
				dayName={days[index].dayName}
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