//R34c7
import React from "react";
import { Link } from "react-router-dom";

//Custom Components
import "./ItemCat.scss";

const Item = (props) => {
  return (
    <article className="cat-container">
      <Link to={props.url}>
        <div className="cat__image-container">
          <img src={props.image} alt={`${props.name}`} />
          <div>
            <div>
              <div className="glitch-container">
                <h6 className="cat__name ">
                  {props.name}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Item;
