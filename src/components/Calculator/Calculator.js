const { useEffect, useState } = React;

const calculatorContent = {
	titleBold: "Koosta soovinimekiri",
	title: "ja vaata oma uue sisustuse kuumakset",
	productNameTitle: "Toode",
	productPriceTitle: "Hind",
};

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
		<div className='calculatorContainer'>
			<h2 className='calculatorTitle'>
				<strong>{calculatorContent.titleBold} </strong>
				{calculatorContent.title}
			</h2>
			<div className='calculator'>
				<div className='calculatorLeft'>
					<div className='titleContainer'>
						<p className='productNameTitle'>
							{calculatorContent.productNameTitle}
						</p>
						<p className='productPriceTitle'>
							{calculatorContent.productPriceTitle}
						</p>
					</div>
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
				</div>
				<div className='calculatorRight'>
					{totalPrice}
					<button>taotle sisustuslaenu</button>
					<a>tutvu tingimustega</a>
				</div>
			</div>
		</div>
	);
};
