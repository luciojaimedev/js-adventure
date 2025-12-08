import { App } from "./App.js";
import { Router } from "./app/components/Router.js";
import api from "../spa/app/helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  api.page = 1;
  Router();
});
