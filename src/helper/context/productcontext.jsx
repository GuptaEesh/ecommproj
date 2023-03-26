import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../../helper";

const ProductsContext = createContext();
const initialProductData = {
  products: [],
  cart: [],
};
const ProductsProvider = ({ children }) => {
  const [productsHandler, dispatchProducts] = useReducer(
    productsReducer,
    initialProductData
  );

  return (
    <ProductsContext.Provider value={{ productsHandler, dispatchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);
export { useProducts, ProductsProvider };
