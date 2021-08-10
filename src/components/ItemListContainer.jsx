//R34c7
import React from "react";

//Custom Components
import FlickerTitle from "./FlickerTitle";
import "./ItemListContainer.scss";
import Spinner from "./Spinner";
const ItemList = React.lazy(() => import("./ItemList"));

const ItemListContainer = (props) => {
  let myCat = props.catId;

  if (isNaN(myCat) === true) {
    myCat = 1;
  }

  return (
    <>
      <main className="App-container">
        <FlickerTitle props greeting={props.greeting} />
        <React.Suspense fallback={<Spinner />}>
          <ItemList props catID={myCat} />
        </React.Suspense>
      </main>
    </>
  );
};

export default ItemListContainer;
