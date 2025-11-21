const d = document;
const $show = d.getElementById("shows-query");
const $template = d.getElementById("show-template").content;
const $fragment = d.createDocumentFragment();

const getSeries = async (e) => {
  try {
    let query = d.getElementById("search").value.toLowerCase();
    let api = `http://api.tvmaze.com/search/shows?q=${query}`;
    let res = await fetch(api);
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    $show.innerHTML = "";

    if (json.length === 0) {
      $show.innerHTML = `<p>No hay shows que mostrar</p>`;
    } else {
      json.forEach((el) => {
        let completeText = el.show.summary
          ? el.show.summary.replace(/<[^>]*>/g, "")
          : "Sin descripción.";

        const maxChars = 200;
        const shortText =
          completeText.length > maxChars
            ? completeText.slice(0, maxChars) + "..."
            : completeText;

        $template.querySelector("h3").textContent = el.show.name;

        const $summary = $template.querySelector(".summary");
        $summary.textContent = shortText;

        const $btn = $template.querySelector(".toggle-summary");
        $btn.textContent = "Read More";

        const img = $template.querySelector("img");
        img.src = el.show.image
          ? el.show.image.medium
          : "http://static.tvmaze.com/images/no-img/no-imgportrait-exit";

        const link = $template.querySelector("a");
        link.href = el.show.url || "#";
        link.target = "_blank";
        link.textContent = "See more";

        let $clone = d.importNode($template, true);

        const summaryClone = $clone.querySelector(".summary");
        const btnClone = $clone.querySelector(".toggle-summary");

        let showAll = false;

        btnClone.addEventListener("click", () => {
          showAll = !showAll;

          if (showAll) {
            summaryClone.textContent = completeText;
            btnClone.textContent = "Read Less";
          } else {
            summaryClone.textContent = shortText;
            btnClone.textContent = "Read More";
          }
        });

        if (completeText.length <= maxChars) {
          btnClone.style.display = "none";
        }

        $fragment.appendChild($clone);
      });

      $show.appendChild($fragment);
    }
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $show.innerHTML = `<p>Error ${err.status}: ${message}`;
  }
};

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      getSeries(e);
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.closest("#search-btn")) {
    getSeries(e);
  }
});
