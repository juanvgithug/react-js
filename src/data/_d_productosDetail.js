import imgRemeraTiger1 from "../assets/img/remera.jpeg";
import imgRemeraTiger2 from "../assets/img/remeraLowCoste.jpg";
import imgRemeraTiger3 from "../assets/img/remeraTiger2.jpg";
import imgRemeraTiger4 from "../assets/img/nevado.jpg";
import imgRemeraTiger5 from "../assets/img/vs2.jpg";
import imgRemeraTiger6 from "../assets/img/paletas.png";


const productDetailList = [
  {
    itemID: 1,
    catID: 1,
    image: imgRemeraTiger1,
    name: "Remera Tiger",
    descr: "Remera mangas cortas de algodón gris coleccion '21",
    color: "Gris",
    brand: "Kosiuko",
    price: 2600,
    stock: 13,
  },
  {
    itemID: 2,
    catID: 1,
    image: imgRemeraTiger2,
    name: "Remera Low Cost",
    descr: "Remera sin mangas algodón blanca coleccion '21",
    color: "Blanco",
    brand: "LaCroste",
    price: 89.99,
    stock: 7,
  },
  {
    itemID: 3,
    catID: 1,
    image: imgRemeraTiger3,
    name: "Remera Golden Tiger",
    descr: "Remera 100% algodón blanca coleccion '21",
    color: "Blanco",
    brand: "Rapsodia",
    price: 3600,
    stock: 26,
  },
{
    itemID: 4,
    catID: 2,
    image: imgRemeraTiger4,
    name: "Pantalon Nevado",
    descr: "Pantalon Nevado Jeans coleccion '21",
    color: "Celeste",
    brand: "Rapsodia",
    price: 1313,
    stock: 1,
    url: "/item/4",
  },
  {
    itemID: 5,
    catID: 3,
    image: imgRemeraTiger5,
    name: "Conjunto Victoria's Secret",
    descr: "Conjunto Victoria's Secret Negro - Colección 2021",
    color: "Negro",
    brand: "Victoria's Secret",
    price: 2626,
    stock: 1,
    url: "/item/5",
  },
  {
    itemID: 6,
    catID: 4,
    image: imgRemeraTiger6,
    name: "Paletas",
    descr: "Paletas de Helado",
    color: "Chocolate con Granas",
    brand: "Pedri & Jose",
    price: 56,
    stock: 1,
    url: "/item/6",
  },

];

export default productDetailList;
