//R34c7
import React, { useEffect, useContext } from "react";
import "../../App.scss";
import "../../assets/css/fonts.scss";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.scss";

//Components
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemContext from "./ItemContext";
import Spinner from "./Spinner";

const MainContainer = (props) => {
  const productID = useContext(ItemContext);
  const loadContainer = () => {
    if (productID !== 0) {
      return (
        <>
          <ItemListContainer greeting="Mi Catálogo" />
        </>
      );
    } else {
      return (
        <>
          <ItemDetailContainer greeting="Mi Catálogo / Detalle" itemId="1" />
        </>
      );
    }
  };

  useEffect(() => {
    loadContainer();
  });

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <div className="workarea-container">{loadContainer()}</div>
      </React.Suspense>
    </>
  );
};

export default MainContainer;
