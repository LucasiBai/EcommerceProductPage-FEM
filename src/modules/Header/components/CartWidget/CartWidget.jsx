import React, { useState } from "react";

import CartCounter from "../CartCounter/CartCounter";

import CartCard from "../CartCard/CartCard";

import "./CartWidget.css";

const CartWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<React.Fragment>
			<CartCounter onClick={() => setIsOpen(true)} />

			<div
				className="cart-menu__card"
				style={{
					top: isOpen && "0vh",
				}}
				onClick={() => setIsOpen(false)}
			>
				<CartCard />
			</div>
		</React.Fragment>
	);
};

export default CartWidget;
