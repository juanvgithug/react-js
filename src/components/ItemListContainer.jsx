//r3ac7
import React from "react";
//custom components
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 13,
        fontFamily: "Raleway",
        fontWeight: 600,
        color: "white",
      }}
    >
      <h1>ItemListContainer: {props.greeting}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
