import '../css/footer.css';
import homeIcon from "../images/icon_home.svg";

export default function Footer(){
	return(
		<footer className="footer outer">
			<img className="footer_icon"
				src={homeIcon} 
				alt="icon" />
		</footer>
	)
}