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

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <Container fluid>
            <Row>
              <Col className="col-3 fauto">
                <Logo2 />{" "}
              </Col>
              <Col className="col-6 fauto menu-text">
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
            </Row>
          </Container>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
