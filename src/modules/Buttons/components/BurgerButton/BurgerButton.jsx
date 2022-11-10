const BurgerIcon = () => (
	<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
			fill="#69707D"
			fillRule="evenodd"
		/>
	</svg>
);

const BurgerButton = ({ onClick }) => {
	return (
		<button
			style={{
				border: "none",
				background: "none",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			onClick={onClick}
		>
			<BurgerIcon />
		</button>
	);
};

export default BurgerButton;
