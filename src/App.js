import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GeneralProvider from "./GeneralProvider/GeneralProvider";

import ItemDetailContainer from "./modules/ItemDetail/components/ItemDetailContainer/ItemDetailContainer";
import HeaderContainer from "./modules/Header/container/HeaderContainer/HeaderContainer";

import "./App.css";

function App() {
	return (
		<GeneralProvider>
			<BrowserRouter>
				<HeaderContainer />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<ItemDetailContainer />} />
					<Route path="/items/:itemId" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</GeneralProvider>
	);
}

export default App;
