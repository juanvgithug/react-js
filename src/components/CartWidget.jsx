//R34c7
import React from "react";

//Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <>
      {"\u00A0"}
      <div
        className="cart-container"
        style={{ textAlign: "center", marginTop: 13, marginLeft: 52 }}
      >
        <ShoppingCartIcon className ="cartIcon" /> {"\u00A0"}
      </div>
    </>
  );
};

export default CartWidget;
