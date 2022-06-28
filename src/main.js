import App from "./App.svelte";
import "./common.css";

let target = document.getElementById("app");
const app = new App({
  target,
  props: {
    baseUrl: target.dataset.baseUrl,
  }
});

export default app;
