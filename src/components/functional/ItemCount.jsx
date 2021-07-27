//R34c7
import React, { useState } from "react";

//Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./ItemCount.scss";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div className="item-count-main">
      <div className="count-container">
        <ButtonGroup
          aria-label="contained  primary button group"
          variant="contained"
        >
          <Button onClick={handleSubtract} disabled={count === 1 && "disabled"}>
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <span className="count-container__number">
            {"\u00A0"}{count}{"\u00A0"}/{"\u00A0"}{stock}{"\u00A0"}{" "}
          </span>
          <Button onClick={handleAdd} disabled={count === stock && "disabled"}>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ItemCount;
