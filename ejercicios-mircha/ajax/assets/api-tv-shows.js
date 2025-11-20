const d = document;
const $show = d.getElementById("shows-query"); // <- CORREGIDO
const $template = d.getElementById("show-template").content;
const $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        let query = e.target.value.toLowerCase();
        let api = `http://api.tvmaze.com/search/shows?q=${query}`;
        let res = await fetch(api);
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $show.innerHTML = "";

        if (json.length === 0) {
          $show.innerHTML = `<p>No hay shows que mostrar</p>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary
              ? el.show.summary
              : "Sin descripcion.";

            $template.querySelector("img").src = el.show.image
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img/no-imgportrait-exit";

            $template.querySelector("img").style.maxWidth = "100%";
            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url
              ? "blank_"
              : "_self";
            $template.querySelector("a").textContent = el.show.url
              ? "See more"
              : "";

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });

          $show.appendChild($fragment);
        }
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $show.innerHTML = `<p> Error ${err.status}: ${message}`;
      }
    }
  }
});
