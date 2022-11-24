import { useContext } from "react";
import DeleteButton from "../../../Buttons/components/DeleteButton/DeleteButton";

import CartContext from "../../../../contexts/CartContext";

import "./CartCardItem.css";

const formatter = new Intl.NumberFormat("en", {
	minimumFractionDigits: 2,
});

const CartCardItem = ({ item }) => {
	const { removeItem } = useContext(CartContext);

	const price = item.discount
		? item.price - (item.price * item.discount) / 100
		: item.price;

	return (
		<span
			className="cart-card-item__box"
			style={{ display: "flex", alignItems: "center" }}
		>
			<img src={item.imgs[0].url} alt={item.title} />
			<div>
				<h6 className="cart-card-item__title">{item.title}</h6>
				<h6 className="cart-card-item__price">
					${formatter.format(price)} x {item.count}{" "}
					<span>${formatter.format(price * item.count)}</span>
				</h6>
			</div>
			<DeleteButton onClick={() => removeItem(item.id)} />
		</span>
	);
};

export default CartCardItem;
