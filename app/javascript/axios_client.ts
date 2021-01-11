import VueAxios from "vue-axios";
import Vue from "vue";
import axios from "axios";

const token = document.getElementsByName("csrf-token")[0].getAttribute("content");
axios.defaults.headers.common["X-CSRF-Token"] = token;

Vue.use(VueAxios, axios);

export default axios;
