import ImgSelectorItem from "../ImgSelectorItem/ImgSelectorItem";

import "./ImgSelector.css";

const ImgSelector = ({ images, currentIdx, handleSetImage, length }) => {
	return (
		<div className="img-slider__previews">
			{images.map((image, idx) => (
				<ImgSelectorItem
					idx={idx}
					isCurrentImg={currentIdx === idx}
					image={image}
					handleSetImage={handleSetImage}
				>
					{idx === images.length - 1 && length > images.length && (
						<span className="img-selector__rest-counter">
							+{length + 1 - images.length}
						</span>
					)}
				</ImgSelectorItem>
			))}
		</div>
	);
};

export default ImgSelector;
