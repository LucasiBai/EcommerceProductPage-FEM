import ItemCount from "../ItemCount/ItemCount";

import "./ItemDescription.css";

const ItemDescription = ({ item }) => {
	return (
		<div className="item-description__box">
			<h4>{item.brand.toUpperCase()}</h4>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<ItemCount />
		</div>
	);
};

export default ItemDescription;
