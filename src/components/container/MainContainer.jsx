//R34c7
import React, { useEffect, useContext } from "react";
import "../../App.scss";
import "../../assets/css/fonts.scss";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemContext from "../functional/ItemContext";

const MainContainer = (props) => {
    const productID  = useContext(ItemContext);
    const loadContainer = () => {
    if (props.productID === 0) {
      return (
        <>
          <ItemListContainer greeting="Mi Catálogo" />
        </>
      );
    } else {
      return (
        <>
          <ItemDetailContainer
            greeting="Mi Catálogo / Detalle" itemId={props.productID}
          />
        </>
      );
    }
  };

  useEffect(() => {
    loadContainer();
  });

  return (
    <>
      <div className="workarea-container">{loadContainer()}</div>
    </>
  );
};

export default MainContainer;
