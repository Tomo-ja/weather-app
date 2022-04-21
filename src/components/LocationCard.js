

export default function LocationCard(props){

	const isControlForm = props.handleForm ? true: false

	return(
		<div className="outer location-card" onClick={isControlForm ? props.handleForm : props.handleClick} id={props.city}>
			<h2 className="location-card-text location-card-city">{props.city}</h2>
			<p className="location-card-text location-card-country">{props.country}</p>
		</div>
	)
}