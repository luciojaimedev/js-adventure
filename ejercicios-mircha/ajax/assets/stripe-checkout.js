import { STRIPE_KEYS } from "./stripe-keys.js";

const d = document;
const $weapons = d.getElementById("weapons");
const $template = d.getElementById("weapon-template");
const $fragment = d.createDocumentFragment();
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

let products;
let prices;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;

    const paymentLinks = {
      prod_TOkTYkLOD056P2:
        "https://buy.stripe.com/test_eVqdR93scbkK2gj4fT63K01",
      prod_TOkRz99zxmslPa:
        "https://buy.stripe.com/test_8x200jfaU9cCf357s563K02",
      prod_TOkONhp9dBi7vS:
        "https://buy.stripe.com/test_9B64gzbYI0G61cf6o163K03",
      prod_TOkNfJ0jcoOznJ:
        "https://buy.stripe.com/test_8x2cN53sc1Ka1cfeUx63K04",
      prod_TOkMsYLg1jrvi9:
        "https://buy.stripe.com/test_fZufZh7IsbkK9IL3bP63K05",
    };

    prices.forEach((el) => {
      let productData = products.find((product) => product.id === el.product);
      console.log(productData);

      const link = paymentLinks[productData.id] || "#";
      $template.content.querySelector(".weapon").dataset.url = link;

      const $clone = d.importNode($template.content, true);
      $clone.querySelector("img").src = productData.images[0];
      $clone.querySelector("figcaption").innerHTML = `
    ${productData.name}<br>
    ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
  `;
      $fragment.appendChild($clone);
    });
    $weapons.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Hubo un error";
    $weapons.innerHTML = `<p> Error ${err.status}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  if (e.target.matches(".weapon *")) {
    const url = e.target.closest(".weapon").dataset.url;
    window.open(url, "_blank");
  }
});
