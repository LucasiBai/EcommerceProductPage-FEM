import { useState } from "react";

import ArrowButton from "../../../Buttons/components/ArrowButton/ArrowButton";
import ImgPreview from "../ImgPreview/ImgPreview";
import ImgSelector from "../ImgSelector/ImgSelector";

import "./ImgContainer.css";

const ImgContainer = ({ images }) => {
	const firstImages = images.slice(0, 4);

	const [showPreview, setShowPreview] = useState(false);

	const [currentIdx, setCurrentIdx] = useState(0);
	const [currentImg, setCurrentImg] = useState(images[currentIdx]);

	const handleSetImage = (index) => {
		setCurrentIdx(index);
		setCurrentImg(images[index]);
	};

	const handleChangeImg = (direction) => {
		if (direction === "right") {
			const index = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
			handleSetImage(index);
		} else {
			const index = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
			handleSetImage(index);
		}
	};

	return (
		<div className="img-slider__box">
			{showPreview && (
				<ImgPreview
					images={images}
					handleClosePreview={() => setShowPreview(false)}
					handleCurrentIdx={currentIdx}
				/>
			)}
			<ArrowButton
				direction={"left"}
				className="left"
				handleOnClick={handleChangeImg}
			/>
			<ArrowButton
				direction={"right"}
				className="right"
				handleOnClick={() => handleChangeImg("right")}
			/>
			<img
				className="img-slider img-slider__main"
				src={currentImg.url}
				alt={currentImg.alt}
				onClick={() => {
					window.innerWidth >= 576
						? setShowPreview(true)
						: handleChangeImg("right");
				}}
			/>

			<ImgSelector
				images={firstImages}
				currentIdx={currentIdx}
				handleSetImage={handleSetImage}
				handleOpenPreview={() => setShowPreview(true)}
				length={images.length}
			/>
		</div>
	);
};

export default ImgContainer;
