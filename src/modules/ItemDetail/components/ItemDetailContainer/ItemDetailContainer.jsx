import ImgContainer from "../ImgContainer/ImgContainer";
import ItemDescription from "../ItemDescription/ItemDescription";

const images = [
	{ url: "./images/image-product-1.jpg", alt: "sneackers" },
	{ url: "./images/image-product-2.jpg", alt: "sneackers" },
	{ url: "./images/image-product-3.jpg", alt: "sneackers" },
	{ url: "./images/image-product-4.jpg", alt: "sneackers" },
];

const item = {
	brand: "Sneaker Company",
	title: "Fall Limited Edition Sneakers",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	price: 250,
	discount: 50,
};

const ItemDetailContainer = () => {
	return (
		<main>
			<ImgContainer images={images} />
			<ItemDescription item={item} />
		</main>
	);
};

export default ItemDetailContainer;
