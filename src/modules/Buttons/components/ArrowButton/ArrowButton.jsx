import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAngleLeft,
	faAngleUp,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./ArrowButton.css";

const ArrowButton = ({ direction, className, handleOnClick }) => {
	const arrow =
		direction === "right"
			? faAngleRight
			: direction === "left"
			? faAngleLeft
			: direction === "up"
			? faAngleUp
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
