import React from "react"
import trashIcon from "../images/icon_trash-can.svg"

export default function LocationCard(props){

	const isItInCurrentLocation = props.handleForm ? true: false
	const isItInSavedLocation = props.handleDelete ? true : false
	console.log(isItInSavedLocation)

	return(
		<div className="outer location-card" onClick={isItInCurrentLocation ? props.handleForm : props.handleClick} id={props.city}>
			<h2 className="location-card-text location-card-city">{props.city}</h2>
			<p className="location-card-text location-card-country">{props.country}</p>
			{isItInSavedLocation && 
				<img 	className="icon location-card_icon-trash-can"
						src={trashIcon}
						alt="delete button"
						onClick={(e: React.MouseEvent<HTMLElement>) => {
							props.handleDelete()
							e.stopPropagation()
						}
						}
				/>
			}
		</div>
	)
}