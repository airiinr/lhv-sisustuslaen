const { useState } = React;

const appContent = { pageTitle: "Sisustuslaen" };

const App = () => {
	const [products, setProducts] = useState([
		{ productName: "", productPrice: 0 },
	]);

	const isMobile = useCheckMobileScreen();

	return (
		<GlobalContext.Provider
			value={{
				products,
				setProducts,
			}}>
			<div className='appContainer'>
				{isMobile ? (
					<h2 className='pageTitle'>
						{appContent.pageTitle}
					</h2>
				) : null}
				<Banner />
				<Calculator />
				<Footer />
			</div>
		</GlobalContext.Provider>
	);
};
