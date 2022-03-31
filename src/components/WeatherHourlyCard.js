import changerKtoC from "../functions/changerKtoC"

export default function WeatherHourlyCard(props){
	return(
		<div className="hourly-card">
			<p className="hourly-card_time">{props.hours}</p>
			<p className="hourly-card_temp">{changerKtoC(props.weatherInfo.temp)}</p>
			<img className="hourly-card_icon"
				src={`${process.env.PUBLIC_URL}/images/icon_weather_moon.png`}
				alt="icon"/>
			<p className="hourly-card_rate rain-rate">{props.weatherInfo.clouds}%</p>
		</div>
	)
}