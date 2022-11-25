import React from "react";

import { UserContextProvider } from "../contexts/UserContext";
import { CartContextProvider } from "../contexts/CartContext";

const GeneralProvider = ({ children }) => {
	return (
		<React.Fragment>
			<UserContextProvider>
				<CartContextProvider>{children}</CartContextProvider>
			</UserContextProvider>
		</React.Fragment>
	);
};

export default GeneralProvider;
