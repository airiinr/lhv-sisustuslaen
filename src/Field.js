const { useState, useEffect } = React;

const Field = () => {
	const [productData, setProductData] = useState({});
	const { products, setProducts } = useGlobalContext();

	const handleProductInput = (event) => {
		const name = event.target.name;
		let value;
		if (name === "productPrice") {
			value = parseFloat(event.target.value);
		} else {
			value = event.target.value;
		}
		setProductData({ ...productData, [name]: value });
	};

	useEffect(() => {
		setProducts(productData);
	}, [productData]);

	return (
		<div>
			<label>
				Toode
				<input
					name='productName'
					type='text'
					onChange={handleProductInput}
				/>
			</label>
			<label>
				Hind
				<input
					name='productPrice'
					type='number'
					onChange={handleProductInput}
				/>
			</label>
		</div>
	);
};
