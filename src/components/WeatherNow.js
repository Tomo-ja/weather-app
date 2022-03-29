import React from 'react';

import currentWeatherApi from '../apis/currentWeather';
import changerKtoC from '../functions/changerKtoC'
import getDateNow from '../functions/getDateNow'
import arrowIcon from '../images/icon_arrow.svg'
import rainIcon from '../images/icon_drop-rain.svg'
import '../css/weatherNow.css'

export default function WeatherNow(){
	const [currentWeather, sectCurrentWeather] = React.useState({})
	const [updateTime, setUpdateTime] = React.useState({})

	const getCurrentWeatherData = ()=>{
		return new Promise ((resolve, reject)=>{
			try{
				const data = currentWeatherApi.get(`data/2.5/weather?lat=35&lon=139&appid=748752212852e7cf71bcfcf6066d4ab0`)
				return resolve(data)
			}catch(err){
				return reject(err)
			}
		})
	}

	React.useEffect(()=>{
		const data = getCurrentWeatherData()
		data.then(res=>{
			const capitalCondition = res.data.weather[0].description[0].toUpperCase() + res.data.weather[0].description.slice(1)
			sectCurrentWeather({
				"condition": capitalCondition,
				"temperature": res.data.main.temp,
				"temperatureMax": res.data.main.temp_max,
				"temperatureMin": res.data.main.temp_min,
				"humidity": res.data.main.humidity,
			  })
		})
		setUpdateTime(getDateNow)
	}, [])

	return(
		<section className="outer section weather-now">
			<div className="weather-now_weather-icon-area">
				<img 
					className="weather-now_weather-icon-area-icon"
					src={`${process.env.PUBLIC_URL}/images/icon_weather_rain.png`}
					alt="weather icon" 
				/>
			</div>
			<div className="weather-now_temp-box">
				<p className="weather-now_temp-box_now">
					<span className="weather-now_temp-box_now-temp">
						{changerKtoC(currentWeather.temperature)}
					</span>
					°c
				</p>
				<p className="weather-now_temp-box_temp">
					<img 
						className="weather-now_temp-box_temp-arrow weather-now_temp-box_temp-arrow-high"
						src={arrowIcon} 
						alt="arrow"
					/>
					{changerKtoC(currentWeather.temperatureMax)}°c
				</p>
				<p className="weather-now_temp-box_temp">
					<img 
						className="weather-now_temp-box_temp-arrow weather-now_temp-box_temp-arrow-low"
						src={arrowIcon} 
						alt="arrow"
					/>
					{changerKtoC(currentWeather.temperatureMin)}°c
				</p>
			</div>
			<div className="weather-now_details">
				<p className="weather-now_details_time">{updateTime.week}, {updateTime.hour}:{updateTime.min}</p>
				<p className="weather-now_details_name">{currentWeather.condition}</p>
				<p className="weather-now_details_rate rain-rate">
					<img 	className="weather-now_details_rate_icon"
							src={rainIcon}
							alt="icon"
					/>
					{currentWeather.humidity}%
				</p>
			</div>

		</section>
	)
}