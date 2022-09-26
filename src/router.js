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
    name: "company-details",
    component: () => import("./components/Company"),
  },
  {
    path: "/add-company",
    name: "add-company",
    component: () => import("./components/AddCompany"),
  },
  {
    path: "/",
    alias: "/boats",
    name: "boats",
    component: () => import("./components/BoatsList"),
  },
  {
    path: "/boats/:id",
    name: "boat-details",
    component: () => import("./components/Boat"),
  },
  {
    path: "/add-boat",
    name: "add-boat",
    component: () => import("./components/AddBoat"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
