import { useContext, useState } from "react";
import CartContext from "./cart-context";
import ProductContext from "./product-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const productCtx = useContext(ProductContext);

  const onAddItems = (item, size) => {
    let existingItemIndex = items.findIndex(
      (prevItem) => prevItem.id === item.id
    );
    let updatedItems;
    if (existingItemIndex >= 0) {
      updatedItems = [...items];
      if (size === "LARGE") {
        updatedItems[existingItemIndex].large += 1;
      } else if (size === "MEDIUM") {
        updatedItems[existingItemIndex].medium += 1;
      } else {
        updatedItems[existingItemIndex].small += 1;
      }
    } else {
      const formattedItem = {
        name: item.name,
        id: item.id,
        price: item.price,
        large: size === "LARGE" ? 1 : 0,
        medium: size === "MEDIUM" ? 1 : 0,
        small: size === "SMALL" ? 1 : 0,
      };
      updatedItems = [...items, formattedItem];
    }
    setItems(updatedItems);
    if (size === "LARGE") {
      productCtx.removeItem(item.id, "LARGE");
    } else if (size === "MEDIUM") {
      productCtx.removeItem(item.id, "MEDIUM");
    } else {
      productCtx.removeItem(item.id, "SMALL");
    }
  };

  const onRemoveItem = (id) => {};

  const onClearCart = () => {
    setItems((prevItems) => []);
  };

  const cartCtx = {
    items: items,
    addItem: onAddItems,
    removeItem: onRemoveItem,
    clearCart: onClearCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
