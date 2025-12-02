import api from "../helpers/wp_api.js";

export function PostCard(props) {
  let featured = props._embedded["wp:featuredmedia"]
    ? props._embedded["wp:featuredmedia"][0].source_url
    : "https://via.placeholder.com/300";

  let date = new Date(props.date).toLocaleDateString();

  return `
    <article class="post-card">
    <img src=${featured} alt=${props.title.rendered}>
    <h2>${props.title.rendered}</h2>
    <p>
    <time datetime=${date}>Fecha: ${date}</time>
    <a href="#/${props.link}" target="_blank">Ver Publicacion</a>
    </p>
    </article>
    `;
}
