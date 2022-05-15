import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/captains",
    name: "captains",
    component: () => import("./components/CaptainsList"),
  },
  {
    path: "/captains/:id",
    name: "captain-details",
    component: () => import("./components/Captain"),
  },
  {
    path: "/add-captain",
    name: "add-captain",
    component: () => import("./components/AddCaptain"),
  },
  {
    path: "/",
    alias: "/companies",
    name: "companies",
    component: () => import("./components/CompaniesList"),
  },
  {
    path: "/companies/:id",
    name: "companie-details",
    component: () => import("./components/Companie"),
  },
  {
    path: "/add-companie",
    name: "add-companie",
    component: () => import("./components/AddCompanie"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
