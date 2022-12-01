import ImgSelectorItem from "../ImgSelectorItem/ImgSelectorItem";

import "./ImgSelector.css";

const ImgSelector = ({
	images,
	currentIdx,
	handleSetImage,
	handleOpenPreview,
	length,
	...rest
}) => {
	return (
		<div className="img-slider__previews" {...rest}>
			{images.map((image, idx) => (
				<ImgSelectorItem
					key={idx}
					idx={idx}
					isCurrentImg={currentIdx === idx}
					image={image}
					handleSetImage={
						idx === images.length - 1 && length > images.length
							? handleOpenPreview
							: handleSetImage
					}
				>
					{idx === images.length - 1 && length > images.length && (
						<span
							className="img-selector__rest-counter"
							onClick={handleOpenPreview}
						>
							+{length + 1 - images.length}
						</span>
					)}
				</ImgSelectorItem>
			))}
		</div>
	);
};

export default ImgSelector;
