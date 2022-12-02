import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAngleUp,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./ArrowButton.css";

const ArrowButton = ({ direction, className, handleOnClick }) => {
	const arrow =
		direction === "up"
			? faAngleUp
			: direction === "right"
			? faAngleRight
			: direction === "left"
			? faAngleLeft
			: faAngleDown;

	return (
		<button
			className={`arrow-button ${className && className}`}
			onClick={handleOnClick}
		>
			<FontAwesomeIcon icon={arrow} />
		</button>
	);
};

export default ArrowButton;
