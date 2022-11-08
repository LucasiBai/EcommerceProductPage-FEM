import "./ItemPrice.css";

const formatter = new Intl.NumberFormat("en", {
	minimumFractionDigits: 2,
});

const ItemPrice = ({ price, discount }) => {
	return (
		<div className="item-price__box">
			<span>
				<h5>
					$
					{formatter.format(
						discount ? price - (price * discount) / 100 : price,
					)}
				</h5>
				{discount ? <h6>{discount}%</h6> : <></>}
			</span>
			{discount ? <h6>${formatter.format(price)}</h6> : <></>}
		</div>
	);
};

export default ItemPrice;
