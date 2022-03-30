export default function getDateNow(){
	const date = new Date()

	const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const day = date.getDate()
	const week = date.getDay()
	let hour = date.getHours()
	let min = date.getMinutes()
	let amOrPm = "AM"

	// convert hours either AM or PM
	if ( hour > 11 ){
		hour = hour - 12
		amOrPm = "PM"
	}

	// put 0 if the minute is only one number
	if (min.toString().length == 1){
		min = `0${min}`
	}

	return ({
		"day": day,
		"week": weekName[week],
		"hour": hour,
		"amOrPm": amOrPm,
		"min": min
	})
}