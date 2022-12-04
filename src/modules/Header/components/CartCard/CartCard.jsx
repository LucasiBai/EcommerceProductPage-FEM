import React, { useContext } from "react";

import CartContext from "../../../../contexts/CartContext";

import Button from "../../../Buttons/components/Button/Button";
import CartCardItem from "../CartCardItem/CartCardItem";

import "./CartCard.css";

const CartCard = ({ className, ...rest }) => {
	const { getCartProducts } = useContext(CartContext);

	return (
		<div className={`cart-card__box ${className}`} {...rest}>
			<h4>Cart</h4>
			<hr />
			<div className="cart-card__items">
				{getCartProducts().length === 0 ? (
					<h5>Your cart is empty.</h5>
				) : (
					<React.Fragment>
						<ul>
							{getCartProducts().map((item) => (
								<li key={item.id}>
									<CartCardItem item={item} />
								</li>
							))}
						</ul>
						<Button
							title={"Checkout"}
							width={"88%"}
							margin={"0.5rem 0 1.5rem"}
						/>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default CartCard;
