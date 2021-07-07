//r34c7
import React from "react";

//components
import DefaultGreeting from "./components/DefaultGreeting";
import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.scss";
import "./assets/css/main.scss";
import "./assets/css/fonts.scss";
import desktopImage from './assets/img/denim_back.jpg';

//Begin App
window.camadaID = 16915;
window.claseID = "Clase 3";
window.claseNombre = "JSX & Transpiling";
window.brandName = "TiendaReactX";

function App() {
  const imageUrl = desktopImage;
  return (
    <>
      <div className="App content-container" style={{backgroundImage: `url(${imageUrl})`,}}>
        <NavBar />
        <DefaultGreeting />
      </div>{" "}
      <AppFooter />
    </>
  );
}

export default App;
