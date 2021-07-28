//R34c7
import React from "react";

//Custom Components
import CatList from "./CatList";
import "./CatListContainer.scss";
import FlickerTitle from "./FlickerTitle";

const CatListContainer = (props) => {
  return (
    <>
      <main className="App-container">
        <FlickerTitle props greeting={props.greeting} />
        <CatList props />
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

export default CatListContainer;
