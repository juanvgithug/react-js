//R34c7
import React from "react";
import { NavLink } from "react-router-dom";

//Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";


import "./CartWidget.scss";

const CartWidget = (props) => {
  return (
    <>
      {"\u00A0"}
      <div
        className="cart-container"
        style={{ textAlign: "center", marginTop: 13, marginLeft: 52 }}
      >
        <NavLink to={props.url}>
          <ShoppingCartIcon className="cartIcon" /> {"\u00A0"}
        </NavLink>
      </div>
    </>
  );
};

export default CartWidget;
