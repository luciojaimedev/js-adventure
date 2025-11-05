const $table = document.querySelector(".crud-table");
const $form = document.querySelector(".crud-form");
const $title = document.querySelector(".crud-title");
const $template = document.getElementById("crud-template").content;
const $fragment = document.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:5555/marines");
    let json = await res.data;

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.name;
      $template.querySelector(".rank").textContent = el.rank;

      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.name = el.name;
      $template.querySelector(".edit").dataset.rank = el.rank;

      $template.querySelector(".delete").dataset.id = el.id;
      $template.querySelector(".delete").dataset.name = el.name;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    console.error(err);

    let message;

    if (err.response) {
      message = err.response.statusText || "Hubo un error";
      $table.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.response.status}: ${message}</b></p>`
      );
    } else if (err.request) {
      message = "No hubo respuesta del servidor";
      $table.insertAdjacentHTML("afterend", `<p><b>${message}</b></p>`);
    } else {
      message = err.message || "Error desconocido";
      $table.insertAdjacentHTML("afterend", `<p><b>${message}</b></p>`);
    }
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
          data: JSON.stringify({
            name: e.target.name.value,
            rank: e.target.rank.value,
          }),
        };
        let res = await axios("http://localhost:5555/marines", options);
        let json = await res.data;

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Marine";

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
          data: JSON.stringify({
            name: e.target.name.value,
            rank: e.target.rank.value,
          }),
        };
        let res = await axios(
          `http://localhost:5555/marines/${e.target.id.value}`,
          options
        );
        let json = await res.data;

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Marine";

        location.reload();
      } catch (err) {
        let message = err.response.statusText || "Hubo un error";
        $table.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Marine";
    $form.name.value = e.target.dataset.name;
    $form.rank.value = e.target.dataset.rank;
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
          `http://localhost:5555/marines/${e.target.dataset.id}`,
          options
        );

        $form.reset();
        $form.id.value = "";
        $title.textContent = "Agregar Marine";
        location.reload();
      } catch (err) {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      }
    }
  }
});
