import React from "react";

import { CartContextProvider } from "./contexts/CartContext";
import ItemDetailContainer from "./modules/ItemDetail/components/ItemDetailContainer/ItemDetailContainer";

import "./App.css";
import HeaderContainer from "./modules/Header/components/HeaderContainer/HeaderContainer";

function App() {
	return (
		<CartContextProvider>
			<HeaderContainer />
			<ItemDetailContainer />
		</CartContextProvider>
	);
}

export default App;
