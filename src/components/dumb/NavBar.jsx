//R34c7
import React from "react";
import NavBarItem from "../presentational/NavBarItem";

import "./NavBar.scss";
import Logo2 from "../presentational/Logo";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartWidget from "../presentational/CartWidget";

const NavBar = () => {
  return (
    <header>
          <nav>
            <Container fluid>
              <Row>
                <Col className="col-3 fauto" >
                  <Logo2 />{" "}
                </Col>
                <Col className="col-6 fauto" >
                  <NavBarItem name="Principal" url="/" className="col fauto"/>
                  <NavBarItem name="Productos" url="/" className="col fauto"/>
                  <NavBarItem name="Nosotros" url="/" className="col fauto"/>
                  <NavBarItem name="Contacto" url="/" className="col fauto"/>
                </Col>
                <Col className="col-1 fauto" >
                  <CartWidget/>
                </Col>
            </Row>
            </Container>
          </nav>
    </header>
  );
};

export default NavBar;
