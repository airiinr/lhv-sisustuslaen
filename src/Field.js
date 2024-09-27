const { useState } = React;

const Field = () => {
	const [productData, setProductData] = useState({});

	const handleProductInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setProductData({ ...productData, [name]: value });
	};

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
