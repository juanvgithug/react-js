//R34c7
import React from "react";
import { NavLink } from "react-router-dom";

//Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import Badge from "@material-ui/core/Badge";

//Custom Components
import useAppContext from "../context/useAppContext";

import "./CartWidget.scss";

const CartWidget = (props) => {
  const { productsQuantity } = useAppContext();

  let nProdCount = productsQuantity();

  return (
    <>
      {nProdCount === 0 ? (
        " "
      ) : (
        <div
          className="cart-container"
          style={{ textAlign: "center", marginTop: 13, marginLeft: 52 }}
        >
          <NavLink to={props.url}>
            <Badge badgeContent={nProdCount} color="primary">
              <ShoppingCartIcon className="cartIcon" /> {"\u00A0"}
            </Badge>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default CartWidget;
