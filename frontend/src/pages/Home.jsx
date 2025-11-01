"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
      "/Graphics/myphoto.jpg",
  "/Graphics/my photo 2.jpg",
  "/Graphics/Anotherhd.png"  ,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Background images for section 2 (digital/web themed)
  const bgImages = [
    "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=100",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=100",
  ];
  const [bgIndex, setBgIndex] = useState(0);

  const testimonials = [
    {
      name: "Alawode Khalid",
      position: "Brand Manager",
      feedback:
        "Azeez’s design sense and communication clarity are exceptional. He brings structure and purpose to every project he handles.",
    },
    {
      name: "Ahmad Sami",
      position: "Social media codinator, Excelerate",
      feedback:
        "Working with Azeez was inspiring. His mix of storytelling and analytical thinking makes him stand out in any team.",
    },
    {
      name: "Bola",
      position: "Editor, The Pioneer Magazine",
      feedback:
        "He’s a very thoughtful, humble, and committed to excellence. Every publication he led had a distinct voice.",
    },
     {
      name: "Abdul Salam, President, ABU CAMPUS PRESS",
      position: "Editor, The Pioneer Magazine",
      feedback:
        "Azeez dedication is just massive. He consistently delivered high-quality work under tight deadlines.",
    },
    {
      name: "Adeniyi Yusuf",
      position: "Editor, Campus Herald",
      feedback:
        "He’s a very thoughtful, humble, and committed to excellence. Every publication he led had a distinct voice.",
    },
      {
      name: "Feyikemi",
      position: "2025 ABU MASS COMMUNICATION GRADUATE",
      feedback:
        "Azeez is a natural leader with a keen eye for detail.",
    },
    {
      name: "Hassan",
      position: "Classrepresentative, ABU Mass Communication",
      feedback:
        "Azeez merges creativity with professionalism in a way few young designers can. His branding work is top-tier.",
    },
    {
      name: "Tosin",
      position: "Digital Strategist, NovaTech",
      feedback:
        "His campaigns are data-driven and creative. Azeez knows how to make audiences care about the message.",
    },
    {
      name: "Mariam",
      position: "Content Creator",
      feedback:
        "Azeez always goes beyond expectations to deliver projects that truly stand out.",
    },
  ];

  // auto switch profile images
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // auto switch background images (section 2)
  useEffect(() => {
    const bint = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(bint);
  }, [bgImages.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 1.05,
    }),
  };

  const glowText = {
    rest: { opacity: 1, color: "#9CA3AF" },
    hover: {
      opacity: [1, 0.6, 1],
      color: "#60A5FA",
      textShadow: "0 0 8px rgba(96,165,250,0.8)",
      transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <>
      {/* 1 — Intro */}
      <section className="pt-12 pb-16 bg-[#0B1120] text-gray-300 text-center">
  <div className="flex justify-center mb-8 flex-wrap">
          {Array.from("My Portfolio").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: -60, opacity: 0 }}
              animate={{
                y: [0, -8, 0],
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut",
              }}
              className="text-4xl md:text-5xl font-bold text-blue-400 inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* left: profile slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-[45%] flex justify-center relative overflow-hidden rounded-2xl"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Azeez Sulaiman"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border border-blue-900"
              />
            </AnimatePresence>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl" />
          </motion.div>

          {/* right: text */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="md:w-[50%] text-center md:text-left space-y-6 cursor-pointer"
            variants={glowText}
          >
            <motion.p variants={glowText} className="text-gray-400 leading-relaxed">
              I’m <span className="text-blue-300 font-semibold">Azeez Sulaiman</span>, a
              recent Mass Communication graduate at Ahmadu Bello University, Zaria. I'm a creative designer and AI
              researcher who is passionate about the intersection of storytelling,
              technology and design. My work focuses on transforming complex
              ideas into clear, engaging narratives that connect people, inspire
              learning, and drive social impact.
            </motion.p>

            <motion.p variants={glowText} className="text-gray-400 leading-relaxed">
              Over the years, I’ve led editorial teams, managed digital campaigns, and
              built innovative projects that merge communication strategy with
              data-driven insights. My exploration of AI continues to shape how
              I approach journalism ethics, media innovation, and digital
              storytelling across emerging industries.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="/testimonials"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2563EB",
                  boxShadow: "0 0 12px rgba(59,130,246,0.7)",
                }}
                className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow transition"
              >
                View My Work
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1E3A8A",
                  boxShadow: "0 0 12px rgba(59,130,246,0.7)",
                }}
                className="inline-block bg-transparent border border-blue-500 text-blue-400 font-medium px-6 py-3 rounded-lg shadow transition"
              >
                Let’s Talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    {/* 2 — Compact Quote Section (Faster Background Transition) */}
<section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center text-center px-4 md:px-10 overflow-hidden">
  <div className="absolute inset-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }} // faster fade
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImages[bgIndex]}')` }}
      />
    </AnimatePresence>

    {/* Background wave motion – faster and smoother */}
    <motion.div
      animate={{ opacity: [0.15, 0.3, 0.15], x: [0, 25, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // faster loop
      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent"
    />
  </div>

  <div className="absolute inset-0 bg-[#0B1120]/70 backdrop-blur-sm" />

  <div className="relative z-10 max-w-3xl mx-auto">
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-4xl font-semibold text-blue-300 leading-relaxed italic drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]"
    >
      “Digital communication isn’t just about creating but, connecting
      minds and inspiring new ways of seeing the world.”
    </motion.blockquote>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 text-gray-300 text-sm md:text-base uppercase tracking-widest font-light"
    >
      — Azeez Sulaiman
    </motion.p>
  </div>
</section>


     {/* 3 — Testimonials (Faster Carousel) */}
<section className="py-16 bg-[#0D132A] text-gray-200 text-center relative overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
  >
    Clients Comments
  </motion.h2>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden group">
    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 10, // ⚡ much faster than before
        ease: "linear",
        repeat: Infinity,
      }}
      whileHover={{ x: 0 }} // pause when hovered
    >
      {[...testimonials, ...testimonials].map((t, index) => (
        <motion.div
          key={index}
          className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-[#1B223A] border border-blue-900 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-blue-500/30 transition-all"
        >
          <p className="text-gray-300 italic mb-4 text-sm sm:text-base">
            “{t.feedback}”
          </p>
          <h4 className="text-blue-400 font-semibold text-base sm:text-lg">{t.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{t.position}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Gradient fade edges */}
    <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0D132A] to-transparent pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0D132A] to-transparent pointer-events-none"></div>
  </div>
</section>


    </>
  );
}
