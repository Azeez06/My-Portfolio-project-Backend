"use client";
import { motion } from "framer-motion";

export default function Graphics() {
  const designs = [
    { title: "Chops Graphics", image: "/Graphics/Chops Business infographic.jpg" },
    { title: "Raalee Chops", image: "/Graphics/Rali graphics.jpg" },
    { title: "Independent Day Design", image: "/Graphics/National flag.jpg" },
    { title: "Wear Design", image: "/Graphics/wearmade.jpg" },
    { title: "Eco Climate Foundation Design", image: "/Graphics/THE EDITED COPY OF 3rs.jpg" },
  ];

  return (
    <section className="py-20 px-6 bg-[#0B1120] text-gray-300 text-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">My Graphic Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {designs.map((item, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: i * 0.1 }}
  className="bg-[#121826] border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/40 transition h-[520px]"
>
  <img src={item.image} alt={item.title} className="w-full h-[400px] object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
  </div>
</motion.div>
        ))}
      </div>
    </section>
  );
}
