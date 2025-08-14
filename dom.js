// Elementos del documento
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString()), 3000;
});

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("#menu li"));

console.log(document.documentElement.lang);
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://www.youtube.com/watch?v=ce6yxES9oLA");

// Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
$linkDOM.dataset.description = "Document Object Model";

console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none");

// Variables CSS - Custom Properties

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "black");

const $card = document.querySelector(".card");

$card.classList.add("rotate-45", "sepia");
$card.classList.remove("sepia");

// Tal como se pueden agregar o sacar clases, tambien se pueden togglear, en este caso se agrega sepia a las clases porque no la tenia, pero si la tuviera el toggle la eliminaria como un remove
$card.classList.toggle("sepia");

// Reemplaza el primer valor (en este caso sepia) con el segundo (opacity-30)
$card.classList.replace("sepia", "opacity-30");

const $whatIsDOM = document.getElementById("que-es");

let text = `<p> El Modelo de Objectos del Documento (<b><i> DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.</p>
<p><mark> El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark></p>`;

// textContent sirve para añadir texto en HTML pero lee las etiquetas como parte del texto, es decir que textualmente quedaria "<p>hola</p>"
$whatIsDOM.textContent = text;

// innerHTML y outerHTML sirven para casi lo mismo, imprimen el texto en HTML respetando las etiquetas (no se muestran en el sitio), aunque inner crea un <p> con las especificaciones del ID/clase y el outer unicamente imprime el texto que le es otorgado
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;

const $cards = document.querySelector(".cards");

console.log($cards.children);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body"));
