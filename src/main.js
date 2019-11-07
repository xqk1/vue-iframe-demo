import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import VueRouter from "vue-router";
import F1 from "./components/f1";
import F2 from "./components/f2";

const Index = { template: "<div>Index</div>" };
const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/f1",
    name: "f1",
    component: F1
  },
  {
    path: "/f2",
    name: "f2",
    component: F2
  },
  {
    path: "*",
  }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
