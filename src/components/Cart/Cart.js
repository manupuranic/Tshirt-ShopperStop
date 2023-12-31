import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      large={item.large}
      medium={item.medium}
      small={item.small}
    />
  ));
  const totalAmount = cartCtx.items.reduce((currNum, item) => {
    return currNum + (item.large + item.medium + item.small) * item.price;
  }, 0);
  const onOrder = () => {
    cartCtx.clearCart();
    console.log("Ordering...");
  };
  return (
    <Modal onClose={props.onClick}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button onClick={onOrder} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
