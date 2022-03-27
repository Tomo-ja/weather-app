import React from "react";
import '../css/header.css';
import { locationData } from "../App";


export default function Header(){
	const location = React.useContext(locationData)
	return(
		<div className="header outer">
			<div className="header_hamburger-menu">
				<span className="header_hamburger-menu_btn"></span>
			</div>
			<h1 className="header_location-name location-name">{location}</h1>
		</div>
	)
}