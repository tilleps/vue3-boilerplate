import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./app.vue";
import Store from "./store/index.js";
import router from "./router/index.js";

const app = createApp(App);
const store = createStore(Store);

//app.config.devtools = true;
app.use(router);
app.use(store);
app.mount("#app");



