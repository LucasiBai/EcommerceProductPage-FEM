import { createContext, useState } from "react";

const CartContext = createContext(null);

const { Provider } = CartContext;

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// Funciones

	const getCartProducts = () => cart;

	// Agregar productos al carrito
	const addItem = (item, count) => {
		if (isInCart(item.id)) {
			const updatedCart = cart.map((prod) => {
				prod.id === item.id && (prod.count += count);
				return prod;
			});
			setCart(updatedCart);
		} else {
			const newItem = { ...item, count };
			setCart([...cart, newItem]);
		}
	};

	// Eliminar item del carrito
	const removeItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	// Limpiar carrito
	const clearCart = () => {
		setCart([]);
	};

	// Comprobar si está en el carrito
	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};

	// Retornar Cantidad de items de un producto
	const getItemCount = (id) => {
		const item = cart.find((item) => item.id === id) || 0;
		return item ? item.count : 0;
	};

	// Retornar total de objetos en carrito
	const getCartCount = () => {
		return cart
			.map((item) => item.count)
			.reduce((acc, count) => acc + count, 0);
	};

	const getTotalPrice = () => {
		return cart.reduce((acc, item) => acc + item.price * item.count, 0);
	};

	const changeItemCount = (id, count) => {
		const updatedCart = cart.map((prod) => {
			prod.id === id && (prod.count = count);
			return prod;
		});
		setCart(updatedCart);
	};

	return (
		<Provider
			value={{
				getCartProducts,
				addItem,
				removeItem,
				clearCart,
				isInCart,
				getItemCount,
				getCartCount,
				getTotalPrice,
				changeItemCount,
			}}
		>
			{children}
		</Provider>
	);
};

export default CartContext;
export { CartContextProvider };
