import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const subTotal = (props.large + props.medium + props.small) * props.price;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <div>
            {props.large > 0 && (
              <div className={classes.large}>Large({props.large})</div>
            )}
            {props.medium > 0 && (
              <div className={classes.large}>Medium({props.medium})</div>
            )}
            {props.small > 0 && (
              <div className={classes.large}>Small({props.small})</div>
            )}
          </div>
        </div>
      </div>
      <div className={classes.subTotal}>₹{subTotal}</div>
    </li>
  );
};

export default CartItem;
