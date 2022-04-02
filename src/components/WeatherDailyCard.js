

export default function WeatherDailyCard(props){
	return(
		<div className="outer daily-card">
			<div className="daily-card_dates">
				<p className="daily-card_date daily-card_dates_name">{props.dayName}</p>
				<p className="daily-card_date daily-card_dates_num">{props.dayNum}</p>
			</div>
			<img className="daily-card_icon"
				src={`${process.env.PUBLIC_URL}/images/icon_weather_moon.png`}
				alt="icon"/>
			<p className="daily-card_name">{props.weatherInfo.weather.description}</p>
			<p className="daily-card_temp">{props.weatherInfo.temp.max}°c / {props.weatherInfo.temp.min}°c</p>
		</div>
	)
}