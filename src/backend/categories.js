import { getFirestore } from "./firebase/index";
import imgCat1 from "../assets/img/remeras.jpg";
import imgCat2 from "../assets/img/pantalones.jpg";
import imgCat3 from "../assets/img/lenceria.jpg";
import imgCat4 from "../assets/img/paletas.png";

export default function getCategory() {
  function switchImage(params) {
    	console.log("getCategory()::switchImage(params)=", params);
	  switch (String(params)) { 
      case "imgCat1":
        return imgCat1;
      case "imgCat2":
        return imgCat2;
      case "imgCat3":
        return imgCat3;
      case "imgCat4":
        return imgCat4;
      default:
        return imgCat4; 
    }
  }

  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("categorias");
    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data("itemID"),
        //id: doc.data("itemID"),
        //image: switchImage(doc.data.catID),
      }));

      console.log("data", data);
      resolve(data);
    });
  });
}
