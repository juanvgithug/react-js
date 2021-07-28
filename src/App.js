//r34c7
import React from "react";

//Components
import NavBar from "./components/dumb/NavBar";
import AppFooter from "./components/dumb/AppFooter";
import MainContainer from "./components/container/MainContainer";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.scss";
import "./assets/css/main.scss";
import "./assets/css/fonts.scss";
import desktopImage from "./assets/img/denim_back.jpg";

//Begin App
window.camadaID = 16915;
window.claseID = "Clase 7";
window.claseNombre = "Consumiendo APIs";
window.brandName = "TiendaReactX";

function App() {
  const imageUrl = desktopImage;
  return (
    <div>
      <div
        className="App content-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <NavBar brandname={window.brandName} />

        <MainContainer productID={1} />
        {
          //productID=1 Para desafío B
          //productID=0 Para desafío A
        }

      </div>{" "}
      <AppFooter />
    </div>
  );
}

export default App;
