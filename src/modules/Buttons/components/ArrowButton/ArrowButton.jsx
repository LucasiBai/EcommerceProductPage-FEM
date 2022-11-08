import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./ArrowButton.css";

const RightAngle = () => (
	<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m2 1 8 8-8 8"
			stroke="#1D2026"
			stroke-width="3"
			fill="none"
			fill-rule="evenodd"
		/>
	</svg>
);

const LeftAngle = () => (
	<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11 1 3 9l8 8"
			stroke="#1D2026"
			stroke-width="3"
			fill="none"
			fill-rule="evenodd"
		/>
	</svg>
);

const ArrowButton = ({ direction, className, handleOnClick }) => {
	const arrow = direction === "up" ? faAngleUp : faAngleDown;

	return (
		<button
			className={`arrow-button ${className && className}`}
			onClick={handleOnClick}
		>
			{direction === "right" ? (
				<RightAngle />
			) : direction === "left" ? (
				<LeftAngle />
			) : (
				<FontAwesomeIcon icon={arrow} />
			)}
		</button>
	);
};

export default ArrowButton;
