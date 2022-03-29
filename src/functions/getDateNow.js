export default function getDateNow(){
	const date = new Date()

	const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const day = date.getDate()
	const week = date.getDay()
	const hour = date.getHours()
	const min = date.getMinutes()
	return ({
		"day": day,
		"week": weekName[week],
		"hour": hour,
		"min": min
	})
}