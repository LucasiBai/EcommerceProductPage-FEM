import React, { useState } from "react";

import CartCounter from "../CartCounter/CartCounter";

import CartCard from "../CartCard/CartCard";

import "./CartWidget.css";

const CartWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<React.Fragment>
			<CartCounter
				handlePointerEvents={!isOpen}
				onClick={() => setIsOpen(true)}
			>
				<div
					className="cart-menu__card"
					style={{ top: isOpen && "0vh", cursor: "default" }}
				>
					<CartCard />
				</div>
			</CartCounter>
			<div
				className="cart-menu__background"
				style={{
					top: isOpen ? "0vh" : "-150vh",
					right: "0vw",
					pointerEvents: isOpen && "all",
					height: "100vh",
					width: "100vw",
					position: "fixed",
				}}
				onClick={() => setIsOpen(false)}
			/>
		</React.Fragment>
	);
};

export default CartWidget;
