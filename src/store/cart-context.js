import React from "react";

const CartContext = React.createContext({
  items: [{ id: "", name: "", price: 0.0, large: 0, medium: 0, small: 0 }],
  addItem: (item, size) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
