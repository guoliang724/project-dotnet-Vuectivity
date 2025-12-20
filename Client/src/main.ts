import { createApp } from "vue";
import router from "./route/route";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import "./assets/styles/index.css";
import "./assets/styles/reset.css";
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
