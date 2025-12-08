import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import BiographyPage from "./pages/BiographyPage";
import GalleryPage from "./pages/GalleryPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "/donate",
    element: <DonatePage />,
  },
  {
    path: "/biography",
    element: <BiographyPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

export default router;
