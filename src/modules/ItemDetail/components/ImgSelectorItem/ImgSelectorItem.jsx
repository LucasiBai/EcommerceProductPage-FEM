import "./ImgSelectorItem.css";

const ImgSelectorItem = ({
	isCurrentImg,
	handleSetImage,
	image,
	idx,
	children,
}) => {
	return (
		<button
			className="img-selector-item"
			style={isCurrentImg ? { border: "#ff7d1a solid 2px" } : { margin: 2 }}
			onClick={() => handleSetImage(idx)}
		>
			{children}
			<img
				className="img-selector-item__img"
				src={image.url}
				alt={image.alt}
				style={isCurrentImg || children ? { filter: "opacity(0.45)" } : {}}
			/>
		</button>
	);
};

export default ImgSelectorItem;
