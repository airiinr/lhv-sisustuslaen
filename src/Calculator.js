const { useEffect } = React;

const Calculator = () => {
	const { products } = useGlobalContext();

	const handleClick = () => {
		console.log("add");
	};

	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<div>
			This is calculator
			<Field />
			<button
				type='button'
				onClick={() => handleClick()}>
				Lisa
			</button>
		</div>
	);
};

// module.exports = Calculator;
