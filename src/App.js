//R34c7
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./App.scss";
import "./assets/css/fonts.scss";
import desktopImage from './assets/img/denim_back.jpg';
import mobileImage from './assets/img/denim_back.jpg';

//Material UI
import Spinner from "./components/Spinner";

//Components
const NavBar = React.lazy(() => import("./components/NavBar"));
const AppFooter = React.lazy(() => import("./components/AppFooter"));

//Begin App
window.camadaID = 16915;
window.claseID = "Clase 8";
window.claseNombre = "Routing & Navegación";
window.brandName = "TiendaReactX";

function App() {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  
  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <div className="App content-container" style={{ backgroundImage: `url(${imageUrl})` }}>
            <NavBar brandname={window.brandName} />
          </div>
        </Router>
        <AppFooter />
      </React.Suspense>
    </>
  );
}


const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};


export default App;
