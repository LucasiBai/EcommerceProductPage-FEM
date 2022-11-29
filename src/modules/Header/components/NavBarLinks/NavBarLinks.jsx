import { useState } from "react";

import NavBarLink from "../../NavBarLink/NavBarLink";

import "./NavBarLinks.css";

const NavBarLinks = () => {
	const [overLink, setOverLink] = useState(null);

	return (
		<ul className="nav-bar-links">
			<NavBarLink
				name="Collections"
				handleOver={setOverLink}
				over={overLink}
				link="/"
			/>
			<NavBarLink
				name="Men"
				handleOver={setOverLink}
				over={overLink}
				link="/"
			/>
			<NavBarLink
				name="Women"
				handleOver={setOverLink}
				over={overLink}
				link="/"
			/>
			<NavBarLink
				name="About"
				handleOver={setOverLink}
				over={overLink}
				link="/"
			/>
			<NavBarLink
				name="Contact"
				handleOver={setOverLink}
				over={overLink}
				link="/"
			/>
		</ul>
	);
};

export default NavBarLinks;
