import React from "react";

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
    </div>
  );
}

export default ItemListContainer;
