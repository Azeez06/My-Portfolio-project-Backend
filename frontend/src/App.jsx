import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Education from "./pages/Education"; // ✅ import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} /> {/* ✅ new route */}
          <Route path="contact" element={<Contact />} />
           <Route path="service" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
