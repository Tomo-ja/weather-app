

export default function LocationCard(props){
	return(
		<div className="outer location-card" onClick={props.handleClick, props.handleForm} id={props.city}>
			<h2 className="location-card-text location-card-city">{props.city}</h2>
			<p className="location-card-text location-card-country">{props.country}</p>
		</div>
	)
}