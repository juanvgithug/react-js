//R34c7
import React, { useEffect, useState } from "react";

//Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

//Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Custom Components
import Item from "./Item";
import productList from "../data/_d_productos.js";

import "./ItemList.scss";
const ItemList = (props) => {
  const catID = Number(props.catID);
  const [products, setProducts] = useState([]);

  console.log("ItemList.catID=" + catID);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const noItems = () => {
    myAlert(
      "Atención, no se pudo obtener la lista de productos. Por favor reintente en unos instantes."
    );
  };

  const myAlert = (message) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Atención</p>,
      footer: "{ window.brandName }",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>{message}</p>);
    });
  };

  const loadProducts = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      myAlert(
        "Atención, no se pudo obtener la lista de productos. Por favor reintente en unos instantes."
      );
    }
  };

  useEffect(() => {
    loadProducts();
  });

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.filter((product) => product.catID === catID).length > 0
            ? products
                .filter((product) => product.catID === catID)
                .map((product) => {
                  return (
                    <div key={product.itemID}>
                      <Item
                        props
                        itemID={product.itemID}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        stock={product.stock}
                        url={product.url}
                      />
                    </div>
                  );
                })
            : noItems}
        </>
      ) : (
        <p>{<CircularProgress />}</p>
      )}
    </div>
  );
};

export default ItemList;
