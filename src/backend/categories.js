import { getFirestore } from "./firebase/index";
import imgCat1 from "../assets/img/remeras.jpg";
import imgCat2 from "../assets/img/pantalones.jpg";
import imgCat3 from "../assets/img/lenceria.jpg";
import imgCat4 from "../assets/img/paletas.png";

export default function getCategory() {
	return new Promise((resolve, reject) => {
		const query = getFirestore().collection("categorias");
		// Pedimos los datos
		query.get().then((response) => {
			if (response.size === 0) reject("Empty");
			const data = response.docs.map((doc) => ({
				...doc.data(),
				id: doc.itemID,
				image: doc.image,
			}));

			console.log("data",data);
			resolve(data);
		});
	});
}
