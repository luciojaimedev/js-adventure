const d = document;
const $pokemons = d.querySelector(".pokemons");
const $courtain = d.querySelector(".courtain");

let offset = 0;

setTimeout(() => {
  $courtain.classList.add("open");
}, 1600);

const getPokemons = async (url) => {
  const $fragment = document.createDocumentFragment();
  try {
    let res = await fetch(url);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let json = await res.json();

    for (const el of json.results) {
      let pokemonRes = await fetch(el.url);

      if (!pokemonRes.ok)
        throw { status: res.status, statusText: res.statusText };

      let pokemon = await pokemonRes.json();

      const $div = d.createElement("div");
      const $img = d.createElement("img");
      const $h3 = d.createElement("h3");

      $div.setAttribute("data-id", `${pokemon.id}`);
      $img.setAttribute("src", `${pokemon.sprites.front_default}`);
      $h3.textContent = pokemon.name;

      $div.appendChild($img);
      $div.appendChild($h3);
      $fragment.appendChild($div);
    }

    $pokemons.innerHTML = "";
    $pokemons.appendChild($fragment);
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Hubo un error";
    $pokemons.innerHTML = `Error ${err.status}: ${message}`;
  }
};

getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);

const getPokemonCard = async (url) => {
  const $fragment = document.createDocumentFragment();
  try {
    let res = await fetch(url);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let json = await res.json();

    for (const el of json.results) {
      let pokemonRes = await fetch(el.url);

      if (!pokemonRes.ok)
        throw { status: res.status, statusText: res.statusText };

      let pokemon = await pokemonRes.json();

      $div.setAttribute("data-id", `${pokemon.id}`);
      $img.setAttribute("src", `${pokemon.sprites.front_default}`);
      $h3.textContent = pokemon.name;
      $p.innerHTML = `<p>Tipo de Pokemon: <b>${pokemon.types[0].type.name} </b>
      <br>
      <b>${pokemon.types[1].type.name}</b> `;

      $div.appendChild($img);
      $div.appendChild($h3);
      $div.appendChild($p);
      $fragment.appendChild($div);
    }

    $pokemons.innerHTML = "";
    $pokemons.appendChild($fragment);
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Hubo un error";
    $pokemons.innerHTML = `Error ${err.status}: ${message}`;
  }
};

d.addEventListener("click", (e) => {
  if (e.target.matches(".next")) {
    offset += 20;
    getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
  }

  if (e.target.matches(".prev")) {
    if (offset <= 0) return;
    offset -= 20;
    getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
  }

  if (e.target.closest(".pokemons div")) {
    e.preventDefault();
    getPokemonCard(e.target.href);
  }
});
