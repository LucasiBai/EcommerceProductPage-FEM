import React from "react";

import { CartContextProvider } from "./contexts/CartContext";
import ItemDetailContainer from "./modules/ItemDetail/components/ItemDetailContainer/ItemDetailContainer";

import "./App.css";

function App() {
	return (
		<CartContextProvider>
			<ItemDetailContainer />
		</CartContextProvider>
	);
}

export default App;
