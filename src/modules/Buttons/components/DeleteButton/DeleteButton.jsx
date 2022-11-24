import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({
	children,
	onClick,
	title,
	color,
	margin,
	padding,
	textColor,
}) => {
	return (
		<Button
			children={children}
			onClick={onClick}
			title={title}
			color={color ? color : "white"}
			margin={margin}
			padding={padding ? padding : "5px"}
			textColor={textColor ? textColor : "#C3CAD9"}
			width={24}
			style={{ fontSize: 16 }}
		>
			<FontAwesomeIcon icon={faTrashCan} />
		</Button>
	);
};

export default DeleteButton;
