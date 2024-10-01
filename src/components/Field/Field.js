const { useState, useEffect } = React;

const Field = ({ product, index }) => {
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

	// inserts product data to component state
	useEffect(() => {
		setProductData(product);
	}, []);

	// updates products list
	useEffect(() => {
		const productsCopy = [...products];
		productsCopy[index] = productData;
		setProducts(productsCopy);
	}, [productData]);

	return (
		<div className='inputFields'>
			<input
				name='productName'
				className='productName'
				type='text'
				onChange={handleProductInput}
			/>
			<label className='priceLabel'>
				<input
					name='productPrice'
					className='productPrice'
					type='number'
					onChange={handleProductInput}
				/>
				&euro;
			</label>
		</div>
	);
};
