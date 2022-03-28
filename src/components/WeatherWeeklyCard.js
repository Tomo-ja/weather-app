

export default function WeatherWeeklyCard(){
	return(
		<div className="outer weekly-card">
			<div className="weekly-card_dates">
				<p className="weekly-card_date weekly-card_dates_name">Wed</p>
				<p className="weekly-card_date weekly-card_dates_num">3/23</p>
			</div>
			<img className="weekly-card_icon"
				src={`${process.env.PUBLIC_URL}/images/icon_weather_moon.png`}
				alt="icon"/>
			<p className="weekly-card_name">Light Rain</p>
			<p className="weekly-card_temp">9°c / 5°c</p>
		</div>
	)
}