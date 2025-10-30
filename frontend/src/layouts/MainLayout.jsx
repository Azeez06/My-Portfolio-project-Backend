import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F19] text-white">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-20 pb-10">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
