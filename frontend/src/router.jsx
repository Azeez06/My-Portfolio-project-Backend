import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Graphics from "./Graphics/Graphics";
import Admin from "./pages/Admin"; // ✅ Import your admin page

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "education", element: <Education /> },
      { path: "service", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
      { path: "graphics", element: <Graphics /> },
    ],
  },
  {
    path: "/admin", // ✅ Standalone admin page (no navbar/footer)
    element: <Admin />,
  },
]);

export default router;
