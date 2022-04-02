export default function returnWeatherIcon(icon){
	const base = "images/icon_weather_"
	switch (icon) {
		case "01d":
		case "01n":
			return `${base}sunny.png`
		case "02d":
		case "02n":
			return `${base}sunny-cloud.png`
		case "03d":
		case "03n":
		case "04d":
		case "04n":
			return `${base}cloud.png`
		case "09d":
		case "09n":
		case "10d":
		case "10n":
			return `${base}rain.png`
		case "11d":
		case "11n":
			return `${base}rain-thunder.png`
		case "13d":
		case "13n":
			return `${base}snow.png`
		case "50d":
		case "50n":
			return `${base}mist.png`
		default:
			return `${base}unknown.png`
	}
}