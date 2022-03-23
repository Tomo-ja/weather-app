import axios from "axios";

export default axios.create({
	baseURL: "http://api.openweathermap.org"
})

// https://openweathermap.org/api/geocoding-api