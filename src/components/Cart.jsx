//R34c7
import React from "react";

//Material UI
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import Button from "@material-ui/core/Button";

//Custom Components
import CartCounter from "./CartCounter.jsx";

import useAppContext from "../context/useAppContext";

function Cart({ product }) {
  const { removeItem } = useAppContext();

  const deleteItem = (id) => {
    removeItem(id);
  };

  return (
    <div className="container cart">
      <div className="cart__detail container">
        <div className="cart__img cart__items">
          <img
            src={product.image}
            alt={`img-${product.id}`}
            className="cart__img-imagen"
          />
        </div>
        <div className="cart__items">
          <h5 className="cart__item"> {product.name} </h5>
        </div>
        <div className="cart__items">
          <CartCounter initialValue={product.quantity} product={product} />
        </div>
        <div className="cart__items">
          <h6 className="cart__precio"> {product.price} </h6>
        </div>
        <div className="cart__items">
          <h6 className="cart__precio">
            {" "}
            {Math.round(
              (product.price * product.quantity + Number.EPSILON) * 100
            ) / 100}{" "}
          </h6>
        </div>
        <div className="cart__items">
          <Button
            className="cart__eliminar"
            onClick={() => deleteItem(product.id)}
          >
            <DeleteTwoToneIcon />
            {"\u00A0"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
