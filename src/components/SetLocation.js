import React from "react";
import LocationCard from "./LocationCard";
import SearchIcon from '../images/icon_search.svg'
import '../css/locationSet.css';

export default function SetLocation(){
	return(
		<div className="set-location outer">
			<form className="set-location_form">
				<input 
						type="text"
						placeholder="Add a location"
						className="set-location_form-item set-location_form_input" />
				<button 
						type="submit"
						className="set-location_form-item set-location_form_submit">
						<img 	className="icon"
								src={SearchIcon}
								alt="icon" />
				</button>
			</form>
			<div className="set-location_location-options current-location">
				<h2 className="set-location_location-options_category">Current Location</h2>
				<LocationCard city="Vancouber" country="Canada"/>
			</div>
			<div className="set-location_location-options saved-location">
				<h2 className="set-location_location-options_category">Saved Location</h2>
				<LocationCard city="Vancouber" country="Canada"/>
				<LocationCard city="Vancouber" country="Canada"/>
				<LocationCard city="Vancouber" country="Canada"/>
			</div>
		</div>
	)
}