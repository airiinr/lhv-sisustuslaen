const { useEffect, useState } = React;

const Calculator = () => {
	const { products, setProducts } = useGlobalContext();
	const [totalPrice, setTotalPrice] = useState(0);

	// functionality to add one row at a time
	let canAddNewProduct = false;
	products.filter((product) => {
		if (
			product.productName !== "" &&
			product.productPrice !== 0
		) {
			canAddNewProduct = true;
		} else canAddNewProduct = false;
	});

	const addField = () => {
		if (canAddNewProduct) {
			const productsCopy = [...products];
			productsCopy.push({
				productName: "",
				productPrice: 0,
			});
			setProducts(productsCopy);
		}
	};

	const removeField = () => {
		if (products.length > 1) {
			const productsCopy = [...products];
			productsCopy.pop();
			setProducts(productsCopy);
		}
	};

	// total sum calculation
	useEffect(() => {
		let total = [];
		products.forEach((product) => {
			total.push(product.productPrice);
		});
		const totalSum = total.reduce(
			(accumulator, currentValue) =>
				accumulator + currentValue
		);
		setTotalPrice(totalSum);
	}, [products]);

	return (
		<div>
			{products.map((product, i) => {
				return (
					<Field
						product={product}
						key={i}
						index={i}
					/>
				);
			})}
			<button
				type='button'
				onClick={() => addField()}>
				Lisa
			</button>
			<button
				type='button'
				onClick={() => removeField()}>
				Kustuta
			</button>
			{totalPrice}
		</div>
	);
};
