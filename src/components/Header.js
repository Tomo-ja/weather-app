import React from "react";
import setLocationApi from '../apis/setLocation'
import SetLocation from "./SetLocation";

import '../css/header.css';
import reloadIcon from '../images/icon_reload.svg'


export default function Header(){
	const [locationNow, setLocationNow] = React.useState({});

	React.useEffect(()=>{
		const locationInfo = JSON.parse(localStorage.getItem("locationInfo")) 
		setLocationNow(locationInfo)
		console.log(locationInfo)
	}, [])

	React.useEffect(()=>{
		localStorage.setItem("locationInfo", JSON.stringify(locationNow))
	}, [locationNow])

	const getLocation = async()=>{
		try{
		  const location = await setLocationApi.get('geo/1.0/direct?q=London&limit=&appid=748752212852e7cf71bcfcf6066d4ab0')
		  const { name, country, lat, lon} = location.data[0]
		  setLocationNow({
			"cityName": name,
			"country": country,
			"lat": lat,
			"lon": lon
		  })
		}catch(err){
		  console.log(err)
		}
	  }
	
	return(
		<div className="outer header">
			<div className="header_hamburger-menu">
				<span className="header_hamburger-menu_btn"></span>
			</div>
			<h1 className="header_location-name location-name">{locationNow.cityName}, {locationNow.country}</h1>
			<img 	className="icon header_icon-reload"
					src= {reloadIcon} 
					alt="reload icon"
					onClick={getLocation} />
			<SetLocation />
		</div>
	)
}