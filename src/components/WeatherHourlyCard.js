import changerKtoC from "../functions/changerKtoC"
import returnWeatherIcon from '../functions/returnWeatherIcon';


export default function WeatherHourlyCard(props){
	return(
		<div className="hourly-card">
			<p className="hourly-card_time">{props.hours}</p>
			<p className="hourly-card_temp">{changerKtoC(props.weatherInfo.temp)}°</p>
			<img className="hourly-card_icon"
				src={`${process.env.PUBLIC_URL}/${returnWeatherIcon(props.weatherInfo.weather[0].icon)}`}
				alt="icon"/>
			<p className="hourly-card_rate rain-rate">{Math.round(props.weatherInfo.pop * 100)}%</p>
		</div>
	)
}