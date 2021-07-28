//R34c7
import React from "react";
import { Link } from "react-router-dom";

//Custom Components
import ItemCount from "./ItemCount";
import "./Item.scss";

const Item = (props) => {
  return (
    <article className="product-container">
      <Link to={props.url}>
        <div className="product__image-container">
          <img src={props.image} alt={`${props.name}`} />
        </div>
        <h6 className="product__name">{props.name}</h6>
        <p className="product__price">${props.price}</p>
      </Link>
      <div className="product__counter-container">
        <ItemCount initial={1} stock={props.stock} />
      </div>
    </article>
  );
};

export default Item;
