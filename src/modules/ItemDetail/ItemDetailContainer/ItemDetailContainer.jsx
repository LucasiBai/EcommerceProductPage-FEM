import ImgContainer from "../ImgContainer/ImgContainer";
import ItemDescription from "../ItemDescription/ItemDescription";

const ItemDetailContainer = () => {
	return (
		<main>
			<ImgContainer images={[{ url: "", alt: "" }]} />
			<ItemDescription />
		</main>
	);
};

export default ItemDetailContainer;
