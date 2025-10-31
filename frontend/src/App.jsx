import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Education from "./pages/Education";
import Admin from "./pages/Admin"; // ✅ New import

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site layout with navbar, footer, etc. */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>

        {/* ✅ Admin page (standalone, no navbar/footer) */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
