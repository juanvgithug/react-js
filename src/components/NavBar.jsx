//R34c7
import React from "react";
import NavBarItem from "./NavBarItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./NavBar.scss";
import Logo2 from "./Logo";

//font awesome
import {
  faAt,
  faHome,
  faInfo,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Custom components
import Spinner from "./Spinner";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import CatListContainer from "./CatListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";

const NavBar = () => {
  function routeHandler(props) {
    const myPath = String(props.match.path);
    console.log("routeHandler path = " + myPath);
    console.log(props);

    switch (myPath) {
      case "/":
        return (
          <>
            <ItemListContainer
              greeting="Productos"
              itemId={props.match.params.id}
              catId={Number(props.match.params.id)}
            />
            {/* <Home greeting="Productos"/> */}
          </>
        );
      //break;
      case "/item":
        return (
          <>
            <ItemListContainer
              greeting="Categorías"
              itemId={props.match.params.id}
              catId={Number(props.match.params.id)}
            />
          </>
        );
      //break;
      case "/item/:id":
        return (
          <>
            <ItemDetailContainer
              greeting="Detalle de Producto"
              itemId={props.match.params.id}
              catId={Number(props.match.params.id)}
            />
          </>
        );
      //break;
      case "/category":
        return (
          <>
            <CatListContainer
              greeting="Categorías"
              itemId={props.match.params.id}
              catId={Number(props.match.params.id)}
            />
          </>
        );
      //break;
      case "/category/:id":
        switch (props.match.params.id) {
          case "1":
            return (
              <>
                <ItemListContainer
                  greeting="Remeras"
                  itemId={props.match.params.id}
                  catId={Number(props.match.params.id)}
                />
              </>
            );
          case "2":
            return (
              <>
                <ItemListContainer
                  greeting="Pantalones"
                  itemId={props.match.params.id}
                  catId={Number(props.match.params.id)}
                />
              </>
            );
          case "3":
            return (
              <>
                <ItemListContainer
                  greeting="Lencería"
                  itemId={props.match.params.id}
                  catId={Number(props.match.params.id)}
                />
              </>
            );
          default:
            return (
              <>
                <ItemListContainer
                  greeting="Sin Stock por el momento"
                  itemId={props.match.params.id}
                  catId={props.match.params.id}
                />
              </>
            );
        }
      //break;
      default:
        console.log("routeHandler path = " + myPath);
        return (
          <>
            <ItemListContainer greeting="Sin Items Para Mostrar" />
          </>
        );
      //break;
    }
  }
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <div>
          <header>
            <nav>
              <Container fluid>
                <Row>
                  <Col className="col-3 fauto">
                    <Logo2 />{" "}
                  </Col>
                  <Col className="col-6 fauto">
                    <NavBarItem
                      icon={faHome}
                      name="Productos"
                      url="/"
                      className="col fauto"
                    />
                    <NavBarItem
                      icon={faShoppingBag}
                      name="Categorías"
                      url="/category"
                      className="col fauto"
                    />
                    <NavBarItem
                      icon={faInfo}
                      name="Nosotros"
                      url="/"
                      className="col fauto"
                    />
                    <NavBarItem
                      icon={faAt}
                      name="Contacto"
                      url="/"
                      className="col fauto"
                    />
                  </Col>
                  <Col className="col-1 fauto">
                    <CartWidget />
                  </Col>
                </Row>
              </Container>
            </nav>
          </header>
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={routeHandler} />
            <Route exact path="/category" component={routeHandler} />
            <Route exact path="/item" component={routeHandler} />
            <Route path="/category/:id" component={routeHandler} />
            <Route path="/item/:id" component={routeHandler} />
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default NavBar;
