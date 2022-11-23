import React from "react";
import Button from "../../../Buttons/components/Button/Button";

import "./CartCardItem.css";

const CartCardItem = ({ item }) => {
	return (
		<span
			className="cart-card-item__box"
			style={{ display: "flex", alignItems: "center" }}
		>
			<img src={item.imgs[0].url} alt={item.title} />
			<div>
				<h4>{item.title}</h4>
				<h5>
					{item.price} x {item.count} <span>{item.price * item.count}</span>
				</h5>
			</div>
			<Button>X</Button>
		</span>
	);
};

export default CartCardItem;
