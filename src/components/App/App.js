const { useState } = React;

const App = () => {
	const [products, setProducts] = useState([
		{ productName: "", productPrice: 0 },
	]);

	return (
		<GlobalContext.Provider
			value={{
				products,
				setProducts,
			}}>
			<div class='container'>
				<Banner />
				<Calculator />
			</div>
		</GlobalContext.Provider>
	);
};
