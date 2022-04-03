import changerKtoC from "../functions/changerKtoC"
import returnWeatherIcon from '../functions/returnWeatherIcon';


export default function WeatherDailyCard(props){
	return(
		<div className="outer daily-card">
			<div className="daily-card_dates">
				<p className="daily-card_date daily-card_dates_name">{props.dayName}</p>
				<p className="daily-card_date daily-card_dates_num">{props.dayNum}</p>
			</div>
			<img className="daily-card_icon"
				src={`${process.env.PUBLIC_URL}/${returnWeatherIcon(props.weatherInfo.weather[0].icon)}`}
				alt="icon"/>
			<p className="daily-card_name">{props.weatherInfo.weather[0].description}</p>
			<p className="daily-card_temp">{changerKtoC(props.weatherInfo.temp.max)}°c / {changerKtoC(props.weatherInfo.temp.min)}°c</p>
		</div>
	)
}