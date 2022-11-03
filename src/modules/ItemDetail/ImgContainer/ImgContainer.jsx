import { useState } from "react";

import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";

const ImgContainer = ({ images }) => {
	const [currentImg, setCurrentImg] = useState(images[0]);
	return (
		<div>
			<ArrowButton direction={"left"} />
			<ArrowButton direction={"right"} />
			<img src={currentImg.url} alt={currentImg.alt} />
		</div>
	);
};

export default ImgContainer;
