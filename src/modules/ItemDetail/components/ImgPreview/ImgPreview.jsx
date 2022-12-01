import React, { useState } from "react";

import ArrowButton from "../../../Buttons/components/ArrowButton/ArrowButton";
import ImgSelector from "../ImgSelector/ImgSelector";

import "./ImgPreview.css";

const ImgPreview = ({ images, handleCurrentIdx, handleClosePreview }) => {
	// const reorderedImgs = [
	// 	...images.slice(currentIdx),
	// 	...images.slice(0, currentIdx),
	// ];

	const [currentIdx, setCurrentIdx] = useState(handleCurrentIdx);
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
		<div className="img-preview__box">
			<div className="img-preview__interactive">
				{images.length > 1 && (
					<React.Fragment>
						<ArrowButton
							direction={"left"}
							className="preview-left"
							handleOnClick={handleChangeImg}
						/>
						<ArrowButton
							direction={"right"}
							className="preview-right"
							handleOnClick={() => handleChangeImg("right")}
						/>
					</React.Fragment>
				)}
				<img
					className="img-preview img-preview__main"
					src={currentImg.url}
					alt={currentImg.alt}
				/>

				<ImgSelector
					images={images}
					currentIdx={currentIdx}
					handleSetImage={handleSetImage}
					length={images.length}
					style={{ width: "auto", gap: "1.4rem", justifyContent: "center" }}
				/>
			</div>

			<div
				className="img-preview__background"
				onClick={handleClosePreview}
			></div>
		</div>
	);
};

export default ImgPreview;
