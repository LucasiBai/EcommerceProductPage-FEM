import React, { useState } from "react";

import CartCounter from "../CartCounter/CartCounter";

import CartCard from "../CartCard/CartCard";

import "./CartWidget.css";

const CartWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<CartCounter handlePointerEvents={!isOpen} onClick={() => setIsOpen(true)}>
			<div className="cart-menu__card" style={{ top: isOpen && "0vh" }}>
				<div
					style={{
						top: isOpen && "0vh",
						pointerEvents: isOpen && "all",
						height: "100vh",
						width: "100vw",
					}}
					onClick={() => setIsOpen(false)}
				/>
				<CartCard />
			</div>
		</CartCounter>
	);
};

export default CartWidget;
