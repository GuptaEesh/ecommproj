import React from "react";
import { useNavigate } from "react-router-dom";
import { Card2 } from "../components/Card2";
import { useProducts } from "../helper";

const CartPage = () => {
  const {
    productsHandler: { cart },
  } = useProducts();
  const navigate = useNavigate();
  const moveToProducts = () => {
    navigate("/");
  };
  return (
    <div className="page">
      <div className="flex align-center g-1">
        <h1>Cart Page</h1>
        <button onClick={moveToProducts}>Move to Products</button>
      </div>
      {cart.length === 0 ? (
        <>
          <h2>Add some products in cart</h2>
          <button onClick={moveToProducts}>Add Products</button>
        </>
      ) : (
        cart?.map((item) => <Card2 key={item.id} item={item} />)
      )}
    </div>
  );
};

export { CartPage };
