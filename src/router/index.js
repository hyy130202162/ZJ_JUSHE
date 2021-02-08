import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Appraisal from "../views/Appraisal.vue";
import NewCenter from "../views/NewsCenter.vue";
import Train from "../views/Train.vue";
import CertificateQuery from "../views/CertificateQuery.vue";
import ContainUs from "../views/ContainUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about_us",
    name: "About",
    component: AboutUs
  },
  {
    path: "/appraisal",
    name: "Appraisal",
    component: Appraisal
  },
  {
    path: "/new_center",
    name: "NewCenter",
    component: NewCenter
  },
  {
    path: "/train",
    name: "Train",
    component: Train
  },
  {
    path: "/certificate_query",
    name: "CertificateQuery",
    component: CertificateQuery
  },
  {
    path: "/contain_us",
    name: "ContainUs",
    component: ContainUs
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
