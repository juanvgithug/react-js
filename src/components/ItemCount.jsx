//R34c7
import React, { useState } from "react";

//Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./ItemCount.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    let nCount = Number(count) + 1;
    setCount(nCount);
    onAdd(nCount);
    //console.log(`ItemCount::handleAdd() count=${nCount}`);
    return nCount;
  };
  const handleSubstract = () => {
    let nCount = Number(count) - 1;
    setCount(nCount);
    onAdd(nCount);
    //console.log(`ItemCount::handleSubstract() count=${nCount}`);
    return nCount;
  };

  return (
    <div className="item-count-main">
      <div className="count-container">
        <ButtonGroup
          aria-label="contained  primary button group"
          variant="contained"
        >
          <Button onClick={handleSubstract} disabled={Boolean(Number(count)  === 0)  && "disabled"}>
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <span className="count-container__number">
            {"\u00A0"}
            {count}
            {"\u00A0"}/{"\u00A0"}
            {stock}
            {"\u00A0"}{" "}
          </span>
          <Button onClick={handleAdd} disabled={Number(count) === Number(stock) && "disabled"}>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ItemCount;
