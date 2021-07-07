//R34c7
import React from "react";
import logo2 from "../assets/img/logo.svg";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Logo2 = () => {
  return (
    <>
      <div className="logo-container">
        <Container>
          <Row>
            <Col className="col-3">
                <img src={logo2} alt="logo" style={{marginTop: '.89em'}}></img>
            </Col>
            <Col className="col-9 fauto logo-text">
                {window.brandName}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Logo2;
