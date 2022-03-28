import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherHourly from "./WeatherHourly";
import WeatherWeekly from "./WeatherWeekly";


export default function Main (){
	return(
		<main className="main outer">
			<WeatherNow />
			<WeatherHourly />
			<WeatherWeekly />
		</main>
	)
}