export const productsReducer = (productsHandler, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...productsHandler,
        products: action.payload.map((product) => ({
          ...product,
          quantity: 1,
        })),
      };
    case "ADD_TO_CART":
      return {
        ...productsHandler,
        cart: [...productsHandler.cart, action.payload],
      };
    case "INCREASE":
      return {
        ...productsHandler,
        cart: productsHandler.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE":
      const { id, quantity } = action.payload;
      return {
        ...productsHandler,
        cart:
          quantity === 1
            ? productsHandler.cart.filter((item) => item.id !== id)
            : productsHandler.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
      };
    default:
      return productsHandler;
  }
};
