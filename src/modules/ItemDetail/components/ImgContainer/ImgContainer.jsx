import { useState } from "react";

import ArrowButton from "../../../Buttons/components/ArrowButton/ArrowButton";

import "./ImgContainer.css";

const ImgContainer = ({ images }) => {
	const [currentIdx, setCurrentIdx] = useState(0);
	const [currentImg, setCurrentImg] = useState(images[currentIdx]);

	const handleChangeImg = (direction) => {
		if (direction === "right") {
			const index = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
			setCurrentIdx(index);
			setCurrentImg(images[index]);
		} else {
			const index = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
			setCurrentIdx(index);
			setCurrentImg(images[index]);
		}
	};

	return (
		<div className="img-slider__box">
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
				className="img-slider"
				src={currentImg.url}
				alt={currentImg.alt}
				onClick={() => handleChangeImg("right")}
			/>
		</div>
	);
};

export default ImgContainer;
