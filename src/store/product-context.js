import React from "react";

const ProductContext = React.createContext({
  items: [
    { id: "", name: "", desc: "", price: 0.0, large: 0, medium: 0, small: 0 },
  ],
  addItem: (item) => {},
  removeItem: (id, size) => {},
});

export default ProductContext;
