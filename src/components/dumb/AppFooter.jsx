//R34c7
import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//custom obj
import CoderLogo from '../../assets/img/coderhouse_logo_black.jpg';

//font awesome
import { faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../assets/css/main.scss';

const AppFooter = () => {
  return (
    <footer className="footer--pin">  
        <div className="sticky-bottom App-footer" style={{color:'white', fontSize: '.89em'}}>
          <Container fluid>
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={4}>
            <FontAwesomeIcon icon={ faUserGraduate } /> : Juan Vidal - <FontAwesomeIcon icon={ faUniversity } /> : {window.camadaID}
            </Col>
            <Col xs={6} md={4}>
            { window.claseID } - { window.claseNombre }
            </Col>
            <Col xs={6} md={4}>
                <Row>
                <Col style={{textAlign:'right', fontStyle: 'italic'}}>
                    Powered By{'\u00A0'}
                    <img src={CoderLogo} className="Coder-logo" alt="logo" height="19" />
                </Col>
                </Row>          
            </Col>
          </Row>
          </Container>
        </div>
      </footer>
  )
}

export default AppFooter;