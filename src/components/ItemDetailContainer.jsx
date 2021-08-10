//R34c7
import React from "react";

//Custom Components
import ItemDetail from "./ItemDetail";
import "./ItemListContainer.scss"; 
import FlickerTitle from "./FlickerTitle";

const ItemDetailContainer = ({ greeting, itemId }) => {
  return (
    <>
      <main className="App-container">
        <FlickerTitle props greeting={greeting} />
        <ItemDetail id={itemId ? itemId : 0} />
      </main>
    </>
  );
};

export default ItemDetailContainer;
