//R34c7
import React from "react";
import { Link } from "react-router-dom";

//Material UI
import Button from "@material-ui/core/Button";
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';

//Custom Components
import CartList from "./CartList";
import "./CartContainer.scss";

import useAppContext from "../context/useAppContext";



function CartContainer(props) {
  const { products } = useAppContext();

  return (
    <div id="CartContainer" className="cartContainer">
      <h3> <br /></h3>
      {products.length === 0 ? (
        <div className="cart__vacio">
          <h3 className="titulo">Actualmente no hay artículos en tu Carrito</h3>
          <Link to="/">
            <br/> 
              <Button
                className="button__home"
              >
              Ver productos{"\u00A0"}
                <LocalMallTwoToneIcon className="cartIcon3" color="white" />{"\u00A0"}
              </Button>
            </Link>
          {/* <Button
              path="/"
              content="Volver a comprar"
              className="button__agregar"
            /> */}
        </div>
      ) : (
        <div>
          <CartList products={products} />
        </div>
      )}
    </div>
  );
}

export default CartContainer;
