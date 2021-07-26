//R34c7
import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//font awesome
import {
  faAt,
  faHome,
  faInfo,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom components
import "./NavBar.scss";
import Logo2 from "./Logo";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Logo2 />{" "}
              </Col>
              <Col md="auto" className ="fauto menu-text">
                <Col>
                  <p>
                    <FontAwesomeIcon icon={faHome} /> Principal
                  </p>
                </Col>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={faShoppingBag} /> Productos
                  </p>
                </Col>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={faInfo} /> Nosotros
                  </p>
                </Col>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={faAt} /> Contacto
                  </p>
                </Col>
              </Col>
              <Col xs lg="1" className ="fauto menuText">
                <p>
                  <CartWidget/>
                </p>
              </Col>
            </Row>
          </Container>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
