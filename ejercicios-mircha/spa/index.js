import { App } from "./App.js";
import { Router } from "./app/components/Router.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => Router());
