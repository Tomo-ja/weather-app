import React from "react";
import setLocationApi from '../apis/setLocation'
import SetLocation from "./SetLocation";

import '../css/header.css';
import reloadIcon from '../images/icon_reload.svg'


export default function Header(props){
	const [registeredLocations, setRegisteredLocations] = React.useState([])
	const [openSetLocations, setOpenSetLocations] = React.useState(false)

	// recall the location user set last time and assign to the state
	React.useEffect(()=>{
		if (localStorage.getItem("currentLocation")){
			const current = JSON.parse(localStorage.getItem("currentLocation"))
			props.setCurrentLocation({
				"cityName": current.cityName,
				"country": current.country,
				"lat": current.lat,
				"lon": current.lon
			})
		}
		if(localStorage.getItem("registeredLocations")){
			const locations = JSON.parse(localStorage.getItem("registeredLocations"))
			locations.forEach(town=>{
				setRegisteredLocations(prev => (
					prev.push({
						"cityName": town.cityName,
						"country": town.country,
						"lat": town.lat,
						"lon": town.lon
					})
				))
			})
		}
	}, [])

	// memorize the current location on browser local storage
	React.useEffect(()=>{
		localStorage.setItem("currentLocation", JSON.stringify(props.currentLocation))
	}, [props.currentLocation])

	// memorize the registered locations on browser local storage
	React.useEffect(()=>{
		localStorage.setItem("registeredLocations", JSON.stringify(registeredLocations))
	}, [registeredLocations])

	
	// get location's geo information based on the name of city
	const getLocation = async()=>{
		try{
		  const location = await setLocationApi.get('geo/1.0/direct?q=London&limit=&appid=748752212852e7cf71bcfcf6066d4ab0')
		  const { name, country, lat, lon} = location.data[0]
		}catch(err){
		  console.log(err)
		}
	  }

	  const test = ()=>{
		  console.log(props.currentLocation.cityName)
	  }

	  const toggleOpenSetLocation = ()=>{
		setOpenSetLocations(!openSetLocations)
	  }
	
	return(
		<div className="outer header">
			<div 
				onClick={toggleOpenSetLocation}
				className="header_hamburger-menu">
				<span className="header_hamburger-menu_btn"></span>
			</div>
			<h1 className="header_location-name location-name">{props.currentLocation.cityName}, {props.currentLocation.country}</h1>
			<img 	className="icon header_icon-reload"
					src= {reloadIcon} 
					alt="reload icon"
					onClick={props.timeUpdate} />
			<p onClick={test}>click here</p>
			{openSetLocations && <SetLocation />}
		</div>
	)
}