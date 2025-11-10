document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = async (el, url) => {
    try {
      let res = await fetch(url);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      let html = await res.text();

      el.outerHTML = html;
    } catch (err) {
      let message = err.statusText || "Hubo un error";
      el.outerHTML = `<p><b> ${err.status}: ${message}</b></p>`;
    }
  };

  document.querySelectorAll("[data-include]").forEach((el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
});
