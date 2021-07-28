//R34c7
import React from "react";

//Custom Components
import ItemList from "./ItemList";
import FlickerTitle from "./FlickerTitle";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {

  let myCat = props.catId;

  if (isNaN(myCat) === true) {
    myCat = 1;
  }

  return (
    <>
      <main className="App-container">
        <FlickerTitle props greeting={props.greeting} />
        <ItemList props catID={myCat} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default ItemListContainer;
