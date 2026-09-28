import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ProjectDetailView from "./views/ProjectDetailView.vue";
import ContactView from "./views/ContactView.vue";
import CertificationsView from "./views/CertificationsView.vue";
import CertificationDetailView from "./views/CertificationDetailView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/projects", component: ProjectsView },
    { path: "/projects/:id", component: ProjectDetailView },
    { path: "/certifications", component: CertificationsView },
    { path: "/certifications/:id", component: CertificationDetailView },
    { path: "/contact", component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
