import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from "./contexts/CartContext";

import ItemDetailContainer from "./modules/ItemDetail/components/ItemDetailContainer/ItemDetailContainer";
import HeaderContainer from "./modules/Header/container/HeaderContainer/HeaderContainer";

import "./App.css";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<HeaderContainer />
				<Routes>
					<Route path="/items/:itemId" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
