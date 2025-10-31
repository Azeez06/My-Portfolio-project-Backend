"use client";
import { motion } from "framer-motion";
import { Globe, Share2, FileText, Laptop, Brush, Cpu, CheckSquare } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Business Website Development",
      description:
        "A responsive business website built with React and Tailwind CSS, featuring clean UI, SEO optimisation, and fast loading time.",
      link: "#",
      icon: <Globe className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "Social Media Marketing Campaign",
      description:
        "Planned and executed a digital campaign that boosted client engagement by 45% through strategic content scheduling and analytics.",
      link: "https://drive.google.com/drive/folders/1FY3QaHiSzfAhBulCPOeUYsfqP_7Ceq87",
      icon: <Share2 className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "Technical Writing Project",
      description:
        "Produced well-structured documentation for a tech startup, including API guides, product manuals, and blog tutorials.",
      link: "#",
      icon: <FileText className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a sleek, mobile-friendly portfolio to showcase skills and projects, integrating animations and dark mode.",
      link: "#",
      icon: <Laptop className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "Graphic Design Showcase",
      description:
        "Created professional visual assets using Canva and Adobe tools — posters, flyers, and brand identity designs for social media.",
      link: "graphics",
      icon: <Brush className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "Website Testing / Quality Assurance",
      description:
        "Performed website quality checks focusing on functionality, responsiveness, and accessibility to ensure optimal user experience.",
      link: "https://github.com/Azeez06/cypress-automation-task.git",
      icon: <CheckSquare className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
    {
      title: "AI Research Project",
      description:
        "Investigated the influence of generative AI on journalism ethics and news credibility — blending communication research with AI innovation.",
      link: "https://drive.google.com/drive/folders/1eV4fhQernMz2RO7T-F__buev1xagGWVi?usp=drive_link",
      icon: <Cpu className="w-10 h-10 text-blue-500 mb-3 mx-auto" />,
    },
  ];

  return (
    <section className="bg-[#0b1120] text-white py-8 min-h-[80vh] text-center">
      {/* Centered Section heading */}
      <h2 className="text-3xl font-bold text-blue-400 mb-2">MY Projects</h2>
      <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
        A selection of my recent projects that reflect my creativity, technical
        skill, and passion for digital solutions.
      </p>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#121826] shadow-xl rounded-2xl p-6 hover:shadow-blue-900/30 border border-gray-700 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {project.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
