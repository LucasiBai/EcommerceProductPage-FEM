import "./Button.css";

const Button = ({
	children,
	onClick,
	title,
	color,
	margin,
	padding,
	width,
	textColor,
}) => {
	return (
		<button
			className="generic-button"
			style={{
				backgroundColor: color && color,
				color: textColor && textColor,
				margin: margin && margin,
				padding: padding && padding,
				width: width && width,
			}}
			onClick={onClick}
		>
			{children}
			{title && title}
		</button>
	);
};

export default Button;
