

export default function WeatherDailyCard(props){
	return(
		<div className="outer daily-card">
			<div className="daily-card_dates">
				<p className="daily-card_date daily-card_dates_name">Wed</p>
				<p className="daily-card_date daily-card_dates_num">3/23</p>
			</div>
			<img className="daily-card_icon"
				src={`${process.env.PUBLIC_URL}/images/icon_weather_moon.png`}
				alt="icon"/>
			<p className="daily-card_name">Light Rain</p>
			<p className="daily-card_temp">9°c / 5°c</p>
		</div>
	)
}