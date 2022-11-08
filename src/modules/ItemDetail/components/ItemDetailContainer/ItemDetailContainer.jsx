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
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everithing the weather can offer.",
	price: 250,
	discount: 50,
	stock: 10,
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
