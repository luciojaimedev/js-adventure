const d = document;
const $pokemons = d.querySelector(".pokemons");
const $courtain = d.querySelector(".courtain");

const params = new URLSearchParams(window.location.search);
const pokemonName = params.get("name");

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

      $div.setAttribute("id", `${pokemon.id}`);
      $div.dataset.name = pokemon.name;

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

const getPokemonCard = (id, pokemonName) => {
  let $url = document.URL;
  $url = `http://127.0.0.1:5500/ejercicios-mircha/ajax/assets/pokemon-card.html?name=${pokemonName}`;
  open($url);
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
    const id = e.target.closest("div").id;
    const name = e.target.closest("div").dataset.name;

    getPokemonCard(id, name);
    console.log(id, name);
  }
});

if (pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Error ${res.status}`);
      return res.json();
    })
    .then((pokemon) => {
      d.querySelector("#pokemon-name").textContent = pokemon.name;
      d.querySelector("#pokemon-img").src = pokemon.sprites.front_default;

      const type1 = pokemon.types[0]?.type?.name || "";
      const type2 = pokemon.types[1]?.type?.name || "";

      const ability1 = pokemon.abilities[0]?.ability?.name || "";
      const ability2 = pokemon.abilities[1]?.ability?.name || "";

      if (!type2) {
        d.querySelector(".type-container:nth-of-type(2)").classList.remove(
          "type-container"
        );
      }

      d.querySelector("#pokemon-type1").textContent = type1;
      d.querySelector("#pokemon-type2").textContent = type2;

      d.querySelector("#pokemon-ability1").textContent = ability1;
      d.querySelector("#pokemon-ability2").textContent = ability2;

      d.querySelector("#pokemon-hp").textContent = pokemon.stats[0].base_stat;
      d.querySelector("#pokemon-atk").textContent = pokemon.stats[1].base_stat;
      d.querySelector("#pokemon-def").textContent = pokemon.stats[2].base_stat;
      d.querySelector("#pokemon-spa").textContent = pokemon.stats[3].base_stat;
      d.querySelector("#pokemon-spd").textContent = pokemon.stats[4].base_stat;
      d.querySelector("#pokemon-spe").textContent = pokemon.stats[5].base_stat;
    })

    .catch((err) => {
      d.querySelector("#error").textContent = err.message;
    });
} else {
  d.getElementById("error").textContent = "No Pokémon specified.";
}
