import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card1 } from "../components/Card1";
import { getAllProducts, useProducts } from "../helper";

const ProductListingPage = () => {
  const { productsHandler, dispatchProducts } = useProducts();
  const { products } = productsHandler;
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await getAllProducts();
      dispatchProducts({ type: "ADD_PRODUCTS", payload: res.data });
    })();
  }, []);
  const moveToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="page">
      <div className="flex align-center g-1">
        <h1>Product Listing Page</h1>
        <button onClick={moveToCart}>Move to Cart</button>
      </div>
      {products?.map((product) => (
        <Card1 key={product.id} product={product} />
      ))}
    </div>
  );
};

export { ProductListingPage };
