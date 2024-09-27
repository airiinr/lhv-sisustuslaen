const Calculator = () => {
	const handleClick = () => {
		console.log("add");
	};

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
