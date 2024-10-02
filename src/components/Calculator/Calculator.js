const { useEffect, useState } = React;

const calculatorContent = {
	titleOne: "Koosta soovinimekiri",
	titleTwo: "ja vaata oma uue sisustuse kuumakset",
	productNameTitle: "Toode",
	productPriceTitle: "Hind",
	addProductButton: "Lisa toode",
	removeProductButton: "Kustuta",
	loanButton: "Taotle sisustuslaenu",
	termsAndConditionsLink: "Tutvu tingimustega",
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
		<div
			id='calculator'
			className='calculatorContainer'>
			<h2 className='calculatorTitle'>
				<span>{calculatorContent.titleOne} </span>
				{calculatorContent.titleTwo}
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
					<div className='buttonsContainer'>
						<button
							className='addButton'
							type='button'
							onClick={() => addField()}>
							<img
								className='circlePlusIcon'
								src='./img/addIcon.png'
							/>
							<p className='addButtonText'>
								{calculatorContent.addProductButton}
							</p>
						</button>
						<button
							className='removeButton'
							type='button'
							onClick={() => removeField()}>
							<img
								className='trashIcon'
								src='./img/trashIcon.png'
							/>
							<p className='removeButtonText'>
								{calculatorContent.removeProductButton}
							</p>
						</button>
					</div>
				</div>
				<div className='calculatorRight'>
					<h1 className='totalPrice'>
						{totalPrice} <span>&euro;</span>
					</h1>
					<button
						className='loanButton'
						type='button'>
						{calculatorContent.loanButton}
					</button>
					<div className='termsAndConditions'>
						<a className='termsAndConditionsLink'>
							{calculatorContent.termsAndConditionsLink}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
