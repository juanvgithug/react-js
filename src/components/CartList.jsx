//R34c7
import React from "react";
import { Link } from "react-router-dom";

//Material UI
import Button from "@material-ui/core/Button";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";

//Custom Components
import Cart from "./Cart";

import "./CartList.scss";

import useAppContext from "../context/useAppContext";

function CartList(props) {
  const { products } = useAppContext();
  const { totalPrice } = useAppContext();

  return (
    <div id="CartList" className="cartcontainer">
      <div className="cart__titulos container">
        <h6 className="cart__titulos__text">Producto</h6>
        <h6 className="cart__titulos__text">Descripción</h6>
        <h6 className="cart__titulos__text">Cantidad</h6>
        <h6 className="cart__titulos__text">Precio</h6>
        <h6 className="cart__titulos__text">Sub Total</h6>
        <h6 className="cart__titulos__text">Eliminar</h6>
      </div>
      <div>
        {products.map((product, key) => (
          <Cart key={key} product={product} />
        ))}
      </div>
      <div className="cart__buyTotal container">
        <h5 className="cart__buyTotal__title ">
          Total{" "}
          <span className="cart__buyTotal__title--bold">${totalPrice()}</span>
        </h5>
        <Link to="/checkout">
              <Button
                className="button__terminar"
              >
                Pagar{"\u00A0"}
                <PaymentTwoToneIcon className="cartIcon3" color="white" />{"\u00A0"}
              </Button>
            </Link>
      </div>
    </div>
  );
}

export default CartList;
