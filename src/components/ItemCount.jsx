//R34c7
import React, { useState } from "react";

//Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

//Bootstrap
import Card from "react-bootstrap/Card";

import "./ItemCount.scss";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubstract = () => {
    setCount(count - 1);
  };

  return (
    <div className="item-count-main">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={ "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2020-07-27_at_17.52.26_1596194403.jpeg?itok=mlXfrxh2"}
          />
          <Card.Body>
            <Card.Title>Remera Tiger</Card.Title>
            <Card.Text>Remera con estampado Tiger.</Card.Text>
            <div className="count-container">
              <ButtonGroup
                aria-label="contained  primary button group"
                variant="contained"
              >
                <Button
                  onClick={handleSubstract}
                  disabled={count === 1 && "disabled"}
                >
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
                <Button
                  onClick={handleAdd}
                  disabled={count === stock && "disabled"}
                >
                  {" "}
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemCount;
