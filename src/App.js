//r34c7
import React from "react";

//Components
import NavBar from "./components/dumb/NavBar";
import AppFooter from "./components/dumb/AppFooter";
import ItemListContainer from "./components/dumb/ItemListContainer";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.scss";
import "./assets/css/main.scss";
import "./assets/css/fonts.scss";
import desktopImage from './assets/img/denim_back.jpg';

//Begin App
window.camadaID = 16915;
window.claseID = "Clase 6";
window.claseNombre = "Promises, Asincronía y Maps";
window.brandName = "TiendaReactX";

function App() {
  const imageUrl = desktopImage;
  return (
    <div>
      <div className="App content-container" style={{backgroundImage: `url(${imageUrl})`,}}>
        <NavBar brandname={window.brandName} />
        <ItemListContainer greeting = "Catálogo de Productos"/>
      </div>{" "}
      <AppFooter />
    </div>
  );
}

export default App;
