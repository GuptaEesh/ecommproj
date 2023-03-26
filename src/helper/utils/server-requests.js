import axios from "axios";

export const getAllProducts = async () =>
  await axios.get("https://fakestoreapi.com/products");
