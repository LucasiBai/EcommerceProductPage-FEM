import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./ItemCount.css";

const ItemCount = ({ stock, initial, handleButtonFunction }) => {
	const [counter, setCounter] = useState(initial);

	const handleChangeCounter = (operation) => {
		const newCount =
			operation === "+" && counter < stock
				? counter + 1
				: operation === "-" && counter > initial
				? counter - 1
				: null;

		if (newCount || newCount === 0) {
			setCounter(newCount);
			handleButtonFunction(newCount);
		}
	};

	useEffect(() => {
		setCounter(0);
		handleButtonFunction(0);
	}, [stock, handleButtonFunction]);

	return (
		<div className="item-count__box">
			<button onClick={() => handleChangeCounter("-")}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<span>{counter}</span>
			<button onClick={() => handleChangeCounter("+")}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
};

export default ItemCount;
