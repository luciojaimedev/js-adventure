const d = document,
  $songSearch = d.getElementById("song-search"),
  $artistSearch = d.getElementById("artist-search"),
  $artist = d.querySelector(".artist");

const getArtist = async () => {
  try {
    let artist = $artistSearch.value;
    let res = await fetch(
      `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist}`
    );

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let json = await res.json();
    console.log(json.artists);

    const template = document.getElementById("artist-template").content;
    const clone = document.importNode(template, true);

    d.querySelector(".artist-container").innerHTML = "";

    clone.querySelector("h3").textContent = json.artists[0].strArtist;
    clone.querySelector("img").src = json.artists[0].strArtistThumb;
    clone.querySelector("img").alt = json.artists[0].strArtist;
    clone.querySelector(".biography-box").textContent =
      json.artists[0].strBiographyEN;
    clone.querySelector("a").href = json.artists[0].strWebsite;
    clone.querySelector("a").textContent = "Website";

    d.querySelector(".artist-container").innerHTML = "";
    d.querySelector(".artist-container").appendChild(clone);
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $artist.innerHTML = `<p>Error ${err.status}: ${message}`;
  }
};

const getSong = async (e, url) => {
  try {
  } catch (err) {}
};

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#artist-search")) {
    if (e.key === "Enter") {
      console.log($artistSearch.value);
      getArtist();
    }
  }
  if (e.target.matches("#song-search")) {
    if (e.key === "Enter") {
      console.log($songSearch.value);
      getArtist();
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches("#artist-search-btn")) {
    getArtist();
  }

  if (e.target.matches("#song-search-btn")) {
    getSong();
  }
});
