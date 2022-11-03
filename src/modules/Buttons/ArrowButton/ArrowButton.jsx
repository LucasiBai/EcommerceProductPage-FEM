import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAngleLeft,
	faAngleUp,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const ArrowButton = ({ direction }) => {
	const arrow =
		direction === "right"
			? faAngleRight
			: direction === "left"
			? faAngleLeft
			: direction === "up"
			? faAngleUp
			: faAngleDown;

	return (
		<button>
			<FontAwesomeIcon icon={arrow} />
		</button>
	);
};

export default ArrowButton;
