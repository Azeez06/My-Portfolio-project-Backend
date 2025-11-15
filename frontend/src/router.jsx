import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Graphics from "./Graphics/Graphics"; 
import Admin from "./pages/Admin";

// Social Media Campaign Pages
import SocialMediaCampaigns from "./pages/socialMediaCampaigns/SocialMediaCampaigns";
import Excelerate from "./pages/socialMediaCampaigns/Excelerate";
import Gojuju from "./pages/socialMediaCampaigns/Gojuju";
import Creatives from "./pages/socialMediaCampaigns/Creatives";
import EcoClimate from "./pages/socialMediaCampaigns/EcoClimate";

// ⭐ NEW PAGES
import ContentCalendar from "./pages/socialMediaCampaigns/ContentCalendar";
import GraphicsPage from "./pages/socialMediaCampaigns/Graphics";

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

      // Social Media Campaigns
      { path: "social-media-campaigns", element: <SocialMediaCampaigns /> },
      { path: "social-media-campaigns/excelerate", element: <Excelerate /> },
      { path: "social-media-campaigns/gojuju", element: <Gojuju /> },
      { path: "social-media-campaigns/creatives", element: <Creatives /> },
      { path: "social-media-campaigns/eco-climate", element: <EcoClimate /> },

      // ⭐ NEW ROUTES your EcoClimate boxes will use
      {
        path: "social-media-campaigns/content-calendar",
        element: <ContentCalendar />,
      },
      {
        path: "social-media-campaigns/graphics",
        element: <GraphicsPage />,
      },
    ],
  },

  // Admin page
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
