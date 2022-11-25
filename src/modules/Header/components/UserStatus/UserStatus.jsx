import { useContext } from "react";

import UserContext from "../../../../contexts/UserContext";

import "./UserStatus.css";

const UserStatus = () => {
	const { getUserData } = useContext(UserContext);

	return (
		<div className="user-status__box">
			<img src={getUserData().img} alt={getUserData().name} />
		</div>
	);
};

export default UserStatus;
