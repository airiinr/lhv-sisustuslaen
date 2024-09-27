const { useState } = React;

const App = () => {
	const [products, setProducts] = useState([]);

	return (
		<GlobalContext.Provider
			value={{
				products,
				setProducts,
			}}>
			<div>
				<Calculator />
			</div>
		</GlobalContext.Provider>
	);
};
