//R34c7
import React from "react";

//Custom Components
import ItemList from "../functional/ItemList";
import logo from "../../assets/img/logo.svg";
import "./ItemListContainer.scss";

const ItemListContainer = ( props ) => {
  return (
    <>
      <main className="App-header">
        <h1>
          <code>{props.greeting}</code>
        </h1>
        <ItemList props />
      </main>
    </>
  );
};

export default ItemListContainer;
