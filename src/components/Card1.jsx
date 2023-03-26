import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../helper";
import "./card.css";
const Card1 = ({ product }) => {
  const {
    id,
    category,
    description,
    image,
    price,
    rating: { rate },
    title,
  } = product;
  const { productsHandler, dispatchProducts } = useProducts();
  const { products, cart } = productsHandler;
  const navigate = useNavigate();
  const addToCart = () => {
    dispatchProducts({
      type: "ADD_TO_CART",
      payload: products?.filter((item) => item.id === id)[0],
    });
  };
  const moveToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="card">
      {title}
      {id}
      <img style={{ height: "5rem", width: "5rem" }} src={image} alt={title} />
      <small>{description}</small>₹{price}
      <div>Rating : {rate}</div>
      <button
        onClick={cart?.find((item) => item.id === id) ? moveToCart : addToCart}
      >
        {cart?.find((item) => item.id === id) ? "Move to Cart" : " Add to Cart"}
      </button>
    </div>
  );
};

export { Card1 };
