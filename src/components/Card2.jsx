import React from "react";
import { useProducts } from "../helper";
import "./card.css";
const Card2 = ({ item }) => {
  const {
    id,
    category,
    description,
    image,
    price,
    rating: { rate },
    title,
    quantity,
  } = item;
  const { dispatchProducts } = useProducts();
  const increaseQuantity = () => {
    dispatchProducts({ type: "INCREASE", payload: id });
  };
  const decreaseQuantity = () => {
    dispatchProducts({ type: "DECREASE", payload: { id, quantity } });
  };
  return (
    <div className="card">
      <img style={{ height: "5rem", width: "5rem" }} src={image} alt={title} />
      <small>{title}</small>₹{price * quantity}
      <div className="flex align-center g-1">
        <button onClick={increaseQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
};

export { Card2 };
