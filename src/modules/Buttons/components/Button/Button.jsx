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
	style,
	shadow,
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
				boxShadow: shadow && "0px 26px 25px hsl(26deg 100% 55% / 20%)",
				...style,
			}}
			onClick={onClick}
		>
			{children}
			{title && title}
		</button>
	);
};

export default Button;
