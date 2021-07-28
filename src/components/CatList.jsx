//R34c7
import React, { useEffect, useState } from "react";

//Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

//Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Custom Components
import ItemCat from "./ItemCat";
import catList from "../data/_d_categorias.js";

import "./CatList.scss";

const CatList = (props) => {
  const [cats, setCats] = useState([]);

  const getCats = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catList);
    }, 2000);
  });
  

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

  const loadCats = async () => {
    try {
      const result = await getCats;
      setCats(result);
    } catch (error) {
      myAlert(
        "Atención, no se pudo obtener la lista de categorías. Por favor reintente en unos instantes."
      );
    }
  };

  useEffect(() => {
    loadCats();
  });

  return (
    <div className="cat-list-container">
      {cats.length ? (
        <>
          {cats.map((cat) => {
            return (
              <div key={cat.itemID}>
                <ItemCat
                  props
                  itemID={cat.itemID}
                  image={cat.image}
                  url={cat.url}
                  name={cat.name}
                  catID={cat.catID}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>{<CircularProgress />}</p>
      )}
    </div>
  );
};

export default CatList;
