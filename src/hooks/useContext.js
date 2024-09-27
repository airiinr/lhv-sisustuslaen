const { createContext, useContext } = React;

const GlobalContext = createContext({
	products: [],
	setProducts: () => {},
});

const useGlobalContext = () => useContext(GlobalContext);
