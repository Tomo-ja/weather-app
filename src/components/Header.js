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
				setRegisteredLocations(prev => {
					const array = prev
					array.push({
						"cityName": town.cityName,
						"country": town.country,
						"lat": town.lat,
						"lon": town.lon
					})
					return array
				}
				)
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
	}, [props.currentLocation, registeredLocations.length])


	  const toggleOpenSetLocation = ()=>{
		setOpenSetLocations(!openSetLocations)
		if (!openSetLocations){
			document.getElementsByClassName("header_hamburger-menu_btn")[0].classList.add("hamburger-menu_active")
		}else{
			document.getElementsByClassName("header_hamburger-menu_btn")[0].classList.remove("hamburger-menu_active")
		}
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
			{openSetLocations && <SetLocation 
									registeredLocations={registeredLocations}
									setRegisteredLocations={setRegisteredLocations}
									currentLocation={props.currentLocation}
									setCurrentLocation={props.setCurrentLocation}
									handleForm={toggleOpenSetLocation}
									/>
			}
		</div>
	)
}