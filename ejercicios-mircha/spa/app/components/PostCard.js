export function PostCard(props) {
  let { date, id, slug, title, _embedded } = props;

  let featured = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "https://via.placeholder.com/300";

  let dateFormat = new Date(date).toLocaleDateString();

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
    <article class="post-card">
      <img src="${featured}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
        <time datetime="${date}">Fecha: ${dateFormat}</time>
        <a href="#/${id}" data-id="${id}">Ver Publicación</a>
      </p>
    </article>
    `;
}
