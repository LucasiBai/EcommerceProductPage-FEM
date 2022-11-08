import ItemCount from "../ItemCount/ItemCount";
import ItemPrice from "../ItemPrice/ItemPrice";

import "./ItemDescription.css";

const ItemDescription = ({ item }) => {
	return (
		<div className="item-description__box">
			<h4>{item.brand.toUpperCase()}</h4>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<ItemPrice price={item.price} discount={item.discount} />
			<ItemCount />
		</div>
	);
};

export default ItemDescription;
