//R34c7
import React from "react";
import { useEffect, useState } from "react";

//Material UI
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

//Custom Components
import useAppContext from "../context/useAppContext";

function CartCounter({ initialValue, product }) {
  const [contador, setContador] = useState(0);
  const { handleQuantity } = useAppContext();
  const { getStock } = useAppContext();
  const { myAlert } = useAppContext();

  const addToCounter = () => {
    if (contador < getStock(product.itemID)) {
      setContador((prevContador) => {
        let contador = prevContador + 1;
        handleQuantity(product, contador);
        return contador;
      });
    }
    if (contador === product.stock) {
      myAlert(`Lo sentimos! No existe stock suficiente para agregar un nuevo ejemplar del producto seleccionado.`);
    }
  };

  const substractCounter = () => {
    if (contador > 1) {
      setContador((prevContador) => {
        let contador = prevContador - 1;
        handleQuantity(product, contador);
        return contador;
      });
    }
  };

  useEffect(() => {
    setContador(initialValue);
  }, [initialValue]);

  return (
    <>
      <div className="cart__flechas">
        <ButtonGroup
          variant=" "
          color="#4e6096"
          aria-label="text primary button group"
        >
          <Button aria-label="reduce" onClick={substractCounter}>
            <RemoveIcon fontSize="small" />
          </Button>
          <Button className="cart__cantidad"> {contador} </Button>
          <Button aria-label="increase" onClick={addToCounter}>
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default CartCounter;
