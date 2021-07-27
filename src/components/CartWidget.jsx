//R34c7
import React from "react";

//Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div>
      {"\u00A0"}
      <div
        style={{ textAlign: "center", marginTop: 0, marginLeft: 78 }}
      >
        <ShoppingCartIcon className ="cartIcon" /> {"\u00A0"}
      </div>
    </div>
  );
};

export default CartWidget;
