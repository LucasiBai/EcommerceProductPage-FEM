import "./ItemPrice.css";
const ItemPrice = ({ price, discount }) => {
	return (
		<div className="item-price__box">
			<span>
				<h5>${discount ? price - (price * discount) / 100 : price}</h5>
				{discount ? <h6>{discount}%</h6> : <></>}
			</span>
			{discount ? <h6>${price}</h6> : <></>}
		</div>
	);
};

export default ItemPrice;
