const { useState } = React;

const appContent = { pageTitle: "Sisustuslaen" };

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
			<div className='appContainer'>
				<h2 className='pageTitle'>
					{appContent.pageTitle}
				</h2>
				<Banner />
				<Calculator />
				<Footer />
			</div>
		</GlobalContext.Provider>
	);
};
