import { Link } from "react-router-dom";
import "./NavBarLinks.css";

const NavBarLinks = () => {
	return (
		<ul className="nav-bar-links">
			<li>
				<Link to="/">Collections</Link>
			</li>
			<li>
				<Link to="/">Men</Link>
			</li>
			<li>
				<Link to="/">Women</Link>
			</li>
			<li>
				<Link to="/">About</Link>
			</li>
			<li>
				<Link to="/">Contact</Link>
			</li>
		</ul>
	);
};

export default NavBarLinks;
