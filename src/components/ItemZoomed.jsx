//R34c7
import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Custom Components
import ItemCount from "./ItemCount";
import "./ItemZoomed.scss";

const ItemZoomed = (props) => {
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
        <ItemCount initial={1} stock={props.stock} />
      </div>
    </Container>
  );
};

export default ItemZoomed;
