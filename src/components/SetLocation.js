import React from "react";
import setLocationApi from '../apis/setLocation'

import LocationCard from "./LocationCard";
import SearchIcon from '../images/icon_search.svg'
import '../css/locationSet.css';



export default function SetLocation(props){

	const [inputCityName, setInputCityName] = React.useState({"cityName": ""})
	//update city name constantly
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

	// check weather the city searched before or new
	const isCityRegistered = (city)=>{
		const index = props.registeredLocations.findIndex(target => target.cityName === city)
		return index
	}

	// add current location into registered location
	const takeBackCurrentLocation = ()=> {
		props.setRegisteredLocations(prev=>{
			const array = prev
			array.push(props.currentLocation)
			return array
		})
	}


	// set the registered location to current location
	const switchLocation = (arr) => {

		takeBackCurrentLocation()
		let indexNumber = arr
		// if this event is occurred by click, search the index number in the registered location array
		if (typeof(indexNumber) === "object"){
			indexNumber = isCityRegistered(indexNumber.currentTarget.id)
		}
		// set target location as current location
		props.setCurrentLocation(props.registeredLocations[indexNumber])
		// delete target location from registered location array
		props.setRegisteredLocations(prev =>{
			const prevArray = prev
			prevArray.splice(indexNumber, 1)
			return prevArray
		})
	}

	const registerNewLocation = async(targetCity) =>{
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

	const handleSubmit= (e) =>{
		e.preventDefault()
		const targetCity = inputCityName.cityName[0].toUpperCase() + inputCityName.cityName.slice(1)
		document.getElementById('inputCityName').value = ""
		const cityIndexNum = isCityRegistered(targetCity)
		if (cityIndexNum < 0){
			takeBackCurrentLocation()
			registerNewLocation(targetCity)
		}else{
			switchLocation(cityIndexNum)
		}
		
	}

	const elementLocationCard = props.registeredLocations.map(location=>{
		return(
			<LocationCard 
					key={location.cityName}
					city={location.cityName}
					country={location.country}
					handleClick={switchLocation}
			/>
		)
	})

	console.log(props.registeredLocations)
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
						onClick={handleSubmit}>
						<img 	className="icon"
								src={SearchIcon}
								alt="icon" 
						/>
				</button>
			</form>
			<div className="set-location_location-options current-location">
				<h2 className="set-location_location-options_category">Current Location</h2>
				<LocationCard city={props.currentLocation.cityName} country={props.currentLocation.country} handleForm={props.handleForm}/>
			</div>
			<div className="set-location_location-options saved-location">
				<h2 className="set-location_location-options_category set-location_location-options_saved">Saved Location</h2>
				{elementLocationCard}
			</div>
		</div>
	)
}