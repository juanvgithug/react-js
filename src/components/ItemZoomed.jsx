//R34c7
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Material UI
import Button from "@material-ui/core/Button";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";

//Custom Components
import ItemCount from "./ItemCount";
import "./ItemZoomed.scss";

import useAppContext from "../context/useAppContext";

const ItemZoomed = (props) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useAppContext();
  const product = { ...props };
  const { productsQuantity } = useAppContext();
  let nProdCount = productsQuantity();

  const handleCounter = (contador) => {
    setQuantity(contador);
  };

  const addToCart = () => {
    //console.log("ItemZoomed::addToCart props=", product);
    addItem(product, quantity);
  };

  return (
    <Container fluid className="product-containerz">
      <Row>
        <Col sm={4}>
          <div>
            {" "}
            <div className="product__image-containerz">
              <img src={props.image} alt={`${props.name}`} />
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <br />
          <Row>
            <h3 className="product__namez">{props.name}</h3>
          </Row>
          <Row>
            <Col>
              <h6 className="product__props__titlez">Descripción: </h6>
            </Col>
            <Col>
              <h6 className="product__propsz ">{props.descr}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="product__props__titlez">Color: </h6>
            </Col>
            <Col>
              <h6 className="product__propsz">{props.color}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="product__props__titlez">Marca: </h6>
            </Col>
            <Col>
              <h6 className="product__propsz">{props.brand}</h6>
            </Col>
          </Row>
          <br />
          <Row>
            <br />
            <p className="product__pricez">${props.price}</p>
          </Row>
        </Col>
      </Row>

      <div className="product__counter-containerz">
        <ItemCount initial={0} stock={props.stock} onAdd={handleCounter} />
      </div>
      <Row>
        <Col>
          <div
            className="product__counter__addcart-container"
            style={{
              display: Boolean(Number(quantity) === Number(0))
                ? "none"
                : "block",
            }}
          >
            <Button
              className="button__agregar"
              onClick={addToCart}
              disabled={
                (Boolean(Number(quantity) === Number(0)) ||
                  Number(quantity) > Number(props.stock)) &&
                "disabled"
              }
            >
              Añadir al carrito{" "}
              <AddShoppingCartTwoToneIcon className="cartIcon2" color="white" />{" "}
              {"\u00A0"}({quantity})
            </Button>
          </div>
        </Col>
        {nProdCount > 0 ? (
          <Col>
            <div
              className="product__counter__checkout-container"
              style={{
                display: Boolean(Number(quantity) === Number(0))
                  ? "none"
                  : "block",
              }}
            >
              <Link to="/cart">
                <Button
                  className="button__terminar"
                  disabled={
                    (Boolean(Number(quantity) === Number(0)) ||
                      Number(quantity) > Number(props.stock)) &&
                    "disabled"
                  }
                >
                  Terminar Compra{"\u00A0"}
                  <PaymentTwoToneIcon className="cartIcon3" color="white" />
                  {"\u00A0"}
                </Button>
              </Link>
            </div>
          </Col>
        ) : (
          " "
        )}
      </Row>
    </Container>
  );
};

export default ItemZoomed;
