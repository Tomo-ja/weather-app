export default function getNext7Days(){
	const days = []
	let day = new Date()
	const addDate = 1
	const addDateTill = 7
	const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i=1; i<=addDateTill; i++){
		day.setDate(day.getDate() + addDate)
		days.push({"dayNum": day.getDate(), "dayName": weekName[day.getDay()]})
	}
	return days
}