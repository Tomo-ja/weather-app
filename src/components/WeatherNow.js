
import arrowIcon from '../images/icon_arrow.svg'
import rainIcon from '../images/icon_drop-rain.svg'
import '../css/weatherNow.css'

export default function WeatherNow(){
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
						9
					</span>
					°c
				</p>
				<p className="weather-now_temp-box_temp">
					<img 
						className="weather-now_temp-box_temp-arrow weather-now_temp-box_temp-arrow-high"
						src={arrowIcon} 
						alt="arrow"
					/>
					10°c
				</p>
				<p className="weather-now_temp-box_temp">
					<img 
						className="weather-now_temp-box_temp-arrow weather-now_temp-box_temp-arrow-low"
						src={arrowIcon} 
						alt="arrow"
					/>
					7°c
				</p>
			</div>
			<div className="weather-now_details">
				<p className="weather-now_details_time">Tue, 12:05 PM</p>
				<p className="weather-now_details_name">Overcast Clouds</p>
				<p className="weather-now_details_rate rain-rate">
					<img 	className="weather-now_details_rate_icon"
							src={rainIcon}
							alt="icon"
					/>
					75%
				</p>
			</div>

		</section>
	)
}