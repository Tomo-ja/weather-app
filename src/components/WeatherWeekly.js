import WeatherWeeklyCard from "./WeatherWeeklyCard"
import "../css/weatherWeekly.css"

export default function WeatherWeekly(){
	return(
		<section className="section weather-weekly">
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
			<WeatherWeeklyCard/>
		</section>
	)
}