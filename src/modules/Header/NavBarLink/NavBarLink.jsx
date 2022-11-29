import { Link } from "react-router-dom";

const NavBarLink = ({ handleOver, over, name, link }) => {
	return (
		<li
			onMouseEnter={() => handleOver(name)}
			onMouseLeave={() => handleOver(null)}
		>
			<Link to={link}>{name}</Link>
			{over === name && <hr className="nav-bar-links__hover" />}
		</li>
	);
};

export default NavBarLink;
