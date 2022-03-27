import React from "react";
import '../css/header.css';
import reloadIcon from '../images/icon_reload.svg'
import { CurrentLocation } from "../App";


export default function Header(){
	const location = React.useContext(CurrentLocation)
	console.log(location.lat)
	return(
		<div className="outer header">
			<div className="header_hamburger-menu">
				<span className="header_hamburger-menu_btn"></span>
			</div>
			<h1 className="header_location-name location-name">{location.cityName}, {location.country}</h1>
			<img className="icon header_icon-reload" src= {reloadIcon} alt="reload icon" />
		</div>
	)
}