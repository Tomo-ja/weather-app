import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherHourly from "./WeatherHourly";
import WeatherWeekly from "./WeatherWeekly";


export default function Main (){
	return(
		<main>
			<div>
				weather icon will be here
			</div>
			<WeatherNow />
			<WeatherHourly />
			<WeatherWeekly />
		</main>
	)
}