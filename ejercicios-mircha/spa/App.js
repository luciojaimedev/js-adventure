import api from "./app/helpers/wp_api.js";
import { ajax } from "./app/helpers/ajax.js";
import { Header } from "./app/components/Header.js";
import { Posts } from "./app/components/Posts.js";
import { PostCard } from "./app/components/PostCard.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      let html = "";
      console.log(posts);
      posts.forEach((post) => (html += PostCard(post)));
      d.getElementById("posts").innerHTML = html;
    },
  });
}
