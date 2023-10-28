import React, { useContext, useReducer } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./NewProduct.module.css";
import ProductContext from "../../store/product-context";

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME_CHANGE":
      return { ...state, name: action.val };
    case "DESC_CHANGE":
      return { ...state, desc: action.val };
    case "PRICE_CHANGE":
      return { ...state, price: action.val };
    case "LARGE_CHANGE":
      return { ...state, large: action.val };
    case "MEDIUM_CHANGE":
      return { ...state, medium: action.val };
    case "SMALL_CHANGE":
      return { ...state, small: action.val };
    default:
      return {
        name: "",
        desc: "",
        price: "",
        large: "",
        medium: "",
        small: "",
      };
  }
};

const NewProduct = () => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    name: "",
    desc: "",
    price: "",
    large: "",
    medium: "",
    small: "",
  });

  const productCtx = useContext(ProductContext);

  const onNameChange = (e) => {
    dispatchForm({ type: "NAME_CHANGE", val: e.target.value });
  };
  const onDescChange = (e) => {
    dispatchForm({ type: "DESC_CHANGE", val: e.target.value });
  };
  const onPriceChange = (e) => {
    dispatchForm({ type: "PRICE_CHANGE", val: e.target.value });
  };
  const onLargeChange = (e) => {
    dispatchForm({ type: "LARGE_CHANGE", val: e.target.value });
  };
  const onMediumChange = (e) => {
    dispatchForm({ type: "MEDIUM_CHANGE", val: e.target.value });
  };
  const onSmallChange = (e) => {
    dispatchForm({ type: "SMALL_CHANGE", val: e.target.value });
  };
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    productCtx.addItem({
      ...formState,
      id: Math.random(),
      price: +formState.price,
      large: +formState.large,
      medium: +formState.medium,
      small: +formState.small,
    });
    dispatchForm({ type: "CLEAR" });
  };

  return (
    <Card className={classes["form-div"]}>
      <form className={classes.form} onSubmit={onFormSubmitHandler}>
        <Input
          label="Tshirt Name:"
          input={{
            type: "text",
            id: "name",
            value: formState.name,
            onChange: onNameChange,
          }}
        />
        <Input
          label="Description:"
          input={{
            type: "text",
            id: "desc",
            value: formState.desc,
            onChange: onDescChange,
          }}
        />
        <Input
          label="Price:"
          input={{
            type: "number",
            id: "price",
            min: "1",
            step: "0.01",
            value: formState.price,
            onChange: onPriceChange,
          }}
        />
        <div className={classes.qty}>Quantity Available</div>
        <Input
          label="Large:"
          input={{
            type: "number",
            id: "large",
            min: "0",
            step: "1",
            value: formState.large,
            onChange: onLargeChange,
          }}
        />
        <Input
          label="Medium:"
          input={{
            type: "number",
            id: "medium",
            min: "0",
            step: "1",
            value: formState.medium,
            onChange: onMediumChange,
          }}
        />
        <Input
          label="Small:"
          input={{
            type: "number",
            id: "small",
            min: "0",
            step: "1",
            value: formState.small,
            onChange: onSmallChange,
          }}
        />
        <Button button={{ type: "submit" }}>Add Product</Button>
      </form>
    </Card>
  );
};

export default NewProduct;
