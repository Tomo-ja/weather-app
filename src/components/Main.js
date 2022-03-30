import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherHourly from "./WeatherHourly";
import WeatherWeekly from "./WeatherWeekly";


export default function Main (){


	return(
		<main className="main outer">
			<WeatherNow />
			<h2 className="main_section-title">24 HOUR FORECAST</h2>
			<WeatherHourly />
			<h2 className="main_section-title">7 DAY FORECAST</h2>
			<WeatherWeekly />
		</main>
	)
}