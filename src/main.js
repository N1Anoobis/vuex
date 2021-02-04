import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/store";

const app = createApp(App)
app.use(store)
app.mount('#app')

// new Vue({
//   store,
//   render: (h) => h(App),
// }).mount("#app");
