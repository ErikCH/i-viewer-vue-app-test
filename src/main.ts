import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// import ViewerPlugin from "./ViewerPlugin";

// createApp(App).mount("#app");
const app = createApp(App);
// app.use(ViewerPlugin, { img: "https://picsum.photos/1000/1000" });
// app.use(ViewerPlugin);
app.mount("#app");
