import React, { useContext } from "react";
import Button from "../UI/Button";
import classes from "./ProductListItem.module.css";
import CartContext from "../../store/cart-context";

const ProductListItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onLargeBtnHandler = () => {
    if (props.item.large > 0) {
      cartCtx.addItem(props.item, "LARGE");
    } else {
      alert("Item out of stock!!!");
    }
  };

  const onMediumBtnHandler = () => {
    if (props.item.medium > 0) {
      cartCtx.addItem(props.item, "MEDIUM");
    } else {
      alert("Item out of stock!!!");
    }
  };

  const onSmallBtnHandler = () => {
    if (props.item.small > 0) {
      cartCtx.addItem(props.item, "SMALL");
    } else {
      alert("Item out of stock!!!");
    }
  };

  return (
    <li className={classes.li}>
      <div>
        <div className={classes.name}>{props.item.name}</div>
        <div className={classes.desc}>{props.item.desc}</div>
        <div className={classes.price}>₹{props.item.price.toFixed(2)}</div>
      </div>
      <div className={classes.actions}>
        <Button button={{ type: "button", onClick: onLargeBtnHandler }}>
          Large ({props.item.large})
        </Button>
        <Button button={{ type: "button", onClick: onMediumBtnHandler }}>
          Medium ({props.item.medium})
        </Button>
        <Button button={{ type: "button", onClick: onSmallBtnHandler }}>
          small ({props.item.small})
        </Button>
      </div>
    </li>
  );
};

export default ProductListItem;
