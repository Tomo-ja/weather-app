import React from "react";
import setLocationApi from '../apis/setLocation'

import LocationCard from "./LocationCard";
import SearchIcon from '../images/icon_search.svg'
import '../css/locationSet.css';



export default function SetLocation(props){

	const [inputCityName, setInputCityName] = React.useState({"cityName": ""})

	const handleInput = (e)=>{
		setInputCityName({
			"cityName": e.target.value
		})
	}

	// get location's geo information based on the name of city
	const getLocationGeo = (cityName)=>{
		return new Promise((resolve, reject)=>{
			try{
				const info =  setLocationApi(`geo/1.0/direct?q=${cityName}&limit=&appid=7c946d2ea4cdcba86920391803ac6ba1`)
				return resolve(info)
			}catch(err){
				reject(alert(err))
			}
		})
	}

	//過去に保存したことがあるか調べる。その後あれば今の場所と入れ替える
	const isCityRegistered = (city)=>{
		props.registeredLocations.forEach((cityInfo, index)=>{
			if (cityInfo.cityName === city){
				return index
			}
		})
		return false
	}

	const checkCityExist= async (e) =>{
		e.preventDefault()
		let targetCity = inputCityName.cityName[0].toUpperCase() + inputCityName.cityName.slice(1)
		const data = await getLocationGeo(targetCity)

		// deal with un-property name of city
		if (data.data.length === 0){
			alert("Sorry, We could not find your city")
			document.getElementById('inputCityName').value = ""
			return
		}
		// set inputted city as current city user wants to know
		const {name, country, lat, lon} = data.data[0]
		props.setCurrentLocation({
			"cityName": name,
			"country": country,
			"lat": lat,
			"lon": lon
		})
		
	}


	return(
		<div className="set-location outer">
			<form className="set-location_form">
				<input 
						id="inputCityName"
						type="text"
						placeholder="Add a location"
						className="set-location_form-item set-location_form_input"
						onChange={handleInput}
				/>
				<button 
						type="submit"
						className="set-location_form-item set-location_form_submit"
						onClick={checkCityExist}>
						<img 	className="icon"
								src={SearchIcon}
								alt="icon" 
						/>
				</button>
			</form>
			<div className="set-location_location-options current-location">
				<h2 className="set-location_location-options_category">Current Location</h2>
				<LocationCard city={props.currentLocation.cityName} country={props.currentLocation.country}/>
			</div>
			<div className="set-location_location-options saved-location">
				<h2 className="set-location_location-options_category set-location_location-options_saved">Saved Location</h2>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
				<LocationCard city="Vancouver" country="Canada"/>
			</div>
		</div>
	)
}