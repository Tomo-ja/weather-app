

export default function WeatherHourlyCard(props){
	return(
		<div className="hourly-card">
			<p className="hourly-card_time">1 PM</p>
			<p className="hourly-card_temp">8°c</p>
			<img className="hourly-card_icon"
				src={`${process.env.PUBLIC_URL}/images/icon_weather_moon.png`}
				alt="icon"/>
			<p className="hourly-card_rate rain-rate">56%</p>
		</div>
	)
}