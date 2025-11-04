const $table = document.querySelector(".crud-table");
const $form = document.querySelector(".crud-form");
const $title = document.querySelector(".crud-title");
const $template = document.getElementById("crud-template").content;
const $fragment = document.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5555/pirates");
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.name;
      $template.querySelector(".crew").textContent = el.crew;

      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.name = el.name;
      $template.querySelector(".edit").dataset.crew = el.crew;

      $template.querySelector(".delete").dataset.id = el.id;
      $template.querySelector(".delete").dataset.name = el.name;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Hubo un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      try {
        let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            name: e.target.name.value,
            crew: e.target.crew.value,
          }),
        };
        let res = await fetch("http://localhost:5555/pirates", options);
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Pirata";

        location.reload();
      } catch (err) {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      }
    }
    // Update - PUT
    else {
      try {
        let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            name: e.target.name.value,
            crew: e.target.crew.value,
          }),
        };
        let res = await fetch(
          `http://localhost:5555/pirates/${e.target.id.value}`,
          options
        );
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Pirata";

        location.reload();
      } catch (err) {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      }
    }
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Pirata";
    $form.name.value = e.target.dataset.name;
    $form.crew.value = e.target.dataset.crew;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar a ${e.target.dataset.name}?`
    );

    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };
        let res = await fetch(
          `http://localhost:5555/pirates/${e.target.dataset.id}`,
          options
        );
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Pirata";
        location.reload();
      } catch (err) {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      }
    }
  }
});
