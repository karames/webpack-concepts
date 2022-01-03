import test1 from "./test1.js";
import test2 from "./test2.js";
import blackCat from "../img/black-cat.jpg";

console.log("Saludos desde main.js 🏠");
console.log(`${test1}`);
console.log(`${test2}`);

const img = document.createElement("img");
img.src = blackCat;
document.body.appendChild(img);
