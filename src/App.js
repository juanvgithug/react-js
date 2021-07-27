//r34c7
import React from "react";

//components
import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"


//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.scss";
import "./assets/css/main.scss";
import "./assets/css/fonts.scss";
import desktopImage from './assets/img/denim_back.jpg';

//Begin App
window.camadaID = 16915;
window.claseID = "Clase 5";
window.claseNombre = " COMPONENTES II";
window.brandName = "TiendaReactX";

function App() {
  const imageUrl = desktopImage;
  return (
    <div>
      <div className="App content-container" style={{backgroundImage: `url(${imageUrl})`,}}>
        <NavBar />
        <ItemListContainer greeting = "Hola Mundo"/>
      </div>{" "}
      <AppFooter />
    </div>
  );
}

export default App;
