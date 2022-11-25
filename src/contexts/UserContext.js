import { createContext } from "react";

const UserContext = createContext(null);

const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
	const user = {
		name: "Juan Fabrizzi",
		img: "../images/image-avatar.png",
	};

	const getUserData = () => {
		return user;
	};
	return <Provider value={{ getUserData }}>{children}</Provider>;
};

export default UserContext;
export { UserContextProvider };
