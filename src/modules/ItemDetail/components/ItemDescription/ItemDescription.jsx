import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemPrice from "../ItemPrice/ItemPrice";

import "./ItemDescription.css";

const ItemDescription = ({ item }) => {
	const [counter, setCounter] = useState(0);

	return (
		<div className="item-description__box">
			<h4>{item.brand.toUpperCase()}</h4>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<ItemPrice
				price={counter ? counter * item.price : item.price}
				discount={item.discount}
			/>
			<ItemCount
				stock={item.stock}
				initial={0}
				handleButtonFunction={setCounter}
			/>
		</div>
	);
};

export default ItemDescription;
