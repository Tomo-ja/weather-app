import WeatherHourlyCard from "./WeatherHourlyCard"
import '../css/weatherHourly.css'

export default function WeatherHourly(){
	return(
		<section className="outer section weather-hourly">
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
			<WeatherHourlyCard />
		</section>
	)
}