import Vue from "vue";

import router from "../routes";
import Layout from "../components/layout.vue";

import "../axios_client";

import "../stylesheets/application.css";

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    render: (h) => h(Layout),
    router,
  }).$mount();

  document.body.appendChild(app.$el);
});
