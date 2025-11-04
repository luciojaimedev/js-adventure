const $table = document.querySelector(".crud-table");
const $form = document.querySelector(".crud-form");
const $title = document.querySelector(".crud-title");
const $template = document.getElementById("crud-template").content;
const $fragment = document.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(data));
};

const getAllMarines = () => {
  ajax({
    method: "GET",
    url: "http://localhost:5555/marines",
    success: (res) => {
      console.log(res);
      const $tbody = $table.querySelector("tbody");
      $tbody.innerHTML = "";

      res.forEach((el) => {
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

      $tbody.appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
  });
};

document.addEventListener("DOMContentLoaded", getAllMarines);

document.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      ajax({
        url: "http://localhost:5555/marines",
        method: "POST",
        success: () => {
          $form.reset();
          $form.id.value = "";
          $title.textContent = "Agregar Marine";
          location.reload();
        },
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          name: e.target.name.value,
          rank: e.target.rank.value,
        },
      });
    } else {
      // Update - PUT
      ajax({
        url: `http://localhost:5555/marines/${e.target.id.value}`,
        method: "PUT",
        success: () => {
          $form.reset();
          $form.id.value = "";
          $title.textContent = "Agregar Marine";
          location.reload();
        },
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          name: e.target.name.value,
          rank: e.target.rank.value,
        },
      });
    }
  }
});

document.addEventListener("click", (e) => {
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
      ajax({
        url: `http://localhost:5555/marines/${e.target.dataset.id}`,
        method: "DELETE",
        success: () => {
          location.reload();
        },
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
      });
    }
  }
});
