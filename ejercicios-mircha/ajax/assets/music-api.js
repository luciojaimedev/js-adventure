const d = document,
  $songSearch = d.getElementById("song-search"),
  $artistSearch = d.getElementById("artist-search"),
  $artist = d.querySelector(".artist"),
  $song = d.querySelector(".song-container");

const getArtist = async () => {
  try {
    const artist = $artistSearch.value.trim();
    const $artistContainer = d.querySelector(".artist-container");

    if (!artist) {
      $artistContainer.innerHTML = "<p>Ingresa un artista</p>";
      return;
    }

    const res = await fetch(
      `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist}`
    );

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const json = await res.json();
    console.log(json.artists);

    $artistContainer.innerHTML = "";

    if (!json.artists) {
      $artistContainer.innerHTML = `<p>Artista no encontrado</p>`;
      return;
    }

    const data = json.artists[0];
    const template = d.getElementById("artist-template").content;
    const clone = d.importNode(template, true);

    clone.querySelector("img").src = data.strArtistThumb;
    clone.querySelector("img").alt = data.strArtist;
    clone.querySelector(".biography-box").textContent =
      data.strBiographyEN || "Sin biografía disponible";
    clone.querySelector("a").href = data.strWebsite || "#";
    clone.querySelector("a").textContent = data.strWebsite
      ? "Website"
      : "Sin sitio";

    $artistContainer.appendChild(clone);
  } catch (err) {
    console.log(err);
    const message = err.statusText || "Ocurrió un error";
    d.querySelector(".artist-container").innerHTML = `<p>Error: ${message}</p>`;
  }
};

const getSong = async () => {
  try {
    const artist = $artistSearch.value.trim();
    const song = $songSearch.value.trim();

    if (!artist || !song) {
      $song.innerHTML = "<p>Ingresa artista y canción</p>";
      return;
    }

    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const json = await res.json();
    console.log(json);

    $song.innerHTML = `<pre>${json.lyrics || "Letra no encontrada"}</pre>`;
  } catch (err) {
    console.log(err);
    const message = err.statusText || "Ocurrió un error";
    $song.innerHTML = `<p>Error: ${message}</p>`;
  }
};

d.addEventListener("keypress", (e) => {
  if (e.target.matches("#artist-search") && e.key === "Enter") {
    getArtist();
  }

  if (e.target.matches("#song-search") && e.key === "Enter") {
    getSong();
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches("#artist-search-btn")) getArtist();
  if (e.target.matches("#song-search-btn")) getSong();
});

const anArrayOfThings = [
  { name: "4K Monitor", price: 349.99 },
  { name: "Mechanical Keyboard", price: 129.5 },
  { name: "Wireless Mouse", price: 59.9 },
  { name: "Ergonomic Chair", price: 219.0 },
  { name: "ANC Headphones", price: 189.99 },
];

const filteredArray = anArrayOfThings.filter((el) => el.price > 150);

const discountArray = filteredArray.map((el) => ({
  ...el,
  discount: el.name.includes("4K") ? "20%" : "15%",
}));

console.log(filteredArray);
console.log(discountArray);
