import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Education from "./pages/Education";
import Admin from "./pages/Admin";

// SOCIAL MEDIA CAMPAIGN PAGES
import SocialMediaCampaigns from "./pages/socialMediaCampaigns/SocialMediaCampaigns";
import Excelerate from "./pages/socialMediaCampaigns/Excelerate";
import Gojuju from "./pages/socialMediaCampaigns/Gojuju";
import Creatives from "./pages/socialMediaCampaigns/Creatives";
import EcoClimate from "./pages/socialMediaCampaigns/EcoClimate";

// ⭐ NEW PAGES YOU CREATED
import ContentCalendar from "./pages/socialMediaCampaigns/ContentCalendar";
import Graphics from "./pages/socialMediaCampaigns/Graphics";

function App() {
  return (
    <Router>
      <Routes>

        {/* Main Layout (with navbar + footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonials" element={<Testimonials />} />

          {/* SOCIAL MEDIA CAMPAIGNS */}
          <Route path="social-media-campaigns" element={<SocialMediaCampaigns />} />
          <Route path="social-media-campaigns/excelerate" element={<Excelerate />} />
          <Route path="social-media-campaigns/gojuju" element={<Gojuju />} />
          <Route path="social-media-campaigns/creatives" element={<Creatives />} />
          <Route path="social-media-campaigns/eco-climate" element={<EcoClimate />} />

          {/* ⭐ NEW ROUTES (Content Calendar + Graphics) */}
          <Route
            path="social-media-campaigns/content-calendar"
            element={<ContentCalendar />}
          />
          <Route
            path="social-media-campaigns/graphics"
            element={<Graphics />}
          />
        </Route>

        {/* Admin - no layout */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;
