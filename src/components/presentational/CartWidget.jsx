//R34c7
import React from "react";

//Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartWidget = () => {
  return (
    <>
      {"\u00A0"}
      <div
        className="cart-container"
        style={{ textAlign: "center", marginTop: 2.6 }}
      >
        <ShoppingCartIcon /> {"\u00A0"}
      </div>
    </>
  );
};

export default CartWidget;
