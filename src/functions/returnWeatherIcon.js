export default function returnWeatherIcon(description){
	const weather = description.toLowerCase()
	const base = "images/icon_weather_"
	switch (weather) {
		case "clear sky":
			return `${base}sunny.png`
		case "few clouds":
			return `${base}sunny-cloud.png`
		case "scattered clouds":
			return `${base}cloud.png`
		case "broken clouds":
			return `${base}cloud.png`
		case "shower rain":
			return `${base}rain.png`
		case "rain":
			return `${base}rain.png`
		case "thunderstorm":
			return `${base}rain-thunder.png`
		case "snow":
			return `${base}snow.png`
		case "mist":
			return `${base}mist.png`
		default:
			return `${base}unknown.png`
	}
}