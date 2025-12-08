import { Header } from "./app/components/Header.js";
import { Main } from "./app/components/Main.js";
import { Router } from "./app/components/Router.js";
import { InfiniteScroll } from "./app/helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = "";

  $root.appendChild(Header());
  $root.appendChild(Main());

  Router();
  InfiniteScroll();
}
