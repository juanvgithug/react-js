import { useState, useEffect } from "react";
import ItemHome from "./ItemHome";

import Spinner from "./Spinner";
import foto from "../assets/img/remeras.jpg";
import "./Home.scss";
import getProducts from "../data/_d_productos";

export default function Home({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Traer Array de Productos
  useEffect(() => {
    setTimeout(() => {
      getProducts().then((result) => {
        setProducts(result);
        setLoading(false); // aca recibimos los resultados por eso sacamos el loading
      });
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div id="Home" className="home">
          <Spinner />
        </div>
      ) : (
        <main>
          <section className="banner">
            <img src={foto} alt="foto1" className="w-100" />
          </section>
          <div className="container">
            <div>
              <h1 className="text-center p-4">{greeting}</h1>
            </div>
            <ItemHome products={products} />
          </div>
        </main>
      )}
    </>
  );
}
