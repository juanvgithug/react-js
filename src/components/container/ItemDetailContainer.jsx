//R34c7
import React from "react";

//Custom Components
import ItemDetail from "../functional/ItemDetail";
import "./ItemListContainer.scss";

const ItemDetailContainer = ({ greeting, itemId }) => {
  return (
    <>
      <main className="App-header">
        <h1>
          <code>{greeting}</code>
        </h1>
        <ItemDetail id={itemId} />
      </main>
    </>
  );
};

export default ItemDetailContainer;
