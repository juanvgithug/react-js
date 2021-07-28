// import {useState, useEffect} from 'react';
import Item2 from "./Item2";
import Spinner from "./Spinner";
import "./ItemList.scss";

export default function ItemList({ products }) {
  return (
    <div id="itemList" className="itemList">
      {products ? (
        products.map((product, index) => {
          return <Item2 item={product} key={index} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
