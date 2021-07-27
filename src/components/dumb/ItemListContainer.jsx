//R34c7
import React from "react";

//Custom Components
import ItemList from "../functional/ItemList";
import logo from "../../assets/img/logo.svg";
import "./ItemListContainer.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <main className="App-header">
        <h1>
          <code>{greeting}</code>
        </h1>
        <ItemList />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default ItemListContainer;
