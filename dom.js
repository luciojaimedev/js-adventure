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
