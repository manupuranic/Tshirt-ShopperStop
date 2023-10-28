import { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [items, setItems] = useState([]);

  const onAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const onRemoveItem = (id, size) => {
    let updatedItems = [...items];
    let existingItemIndex = updatedItems.findIndex((item) => item.id === id);
    if (size === "LARGE") {
      updatedItems[existingItemIndex].large -= 1;
    } else if (size === "MEDIUM") {
      updatedItems[existingItemIndex].medium -= 1;
    } else {
      updatedItems[existingItemIndex].small -= 1;
    }
  };

  const productCtx = {
    items: items,
    addItem: onAddItems,
    removeItem: onRemoveItem,
  };

  return (
    <ProductContext.Provider value={productCtx}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
