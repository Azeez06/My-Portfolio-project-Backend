import { GraduationCap, Code, Brain, Printer, Wifi, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "B.Sc. Mass Communication",
      institution: "Ahmadu Bello University, Zaria",
      period: "2020 – 2025",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Web Development Training",
      institution: "PLP (Power Learn Project)",
      period: "2025-Present",
      icon: <Code className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "AI Research & Safety Fellowship",
      institution: "Blue Dot / Transformative AI",
      period: "2025",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Printing & Publishing Internship",
      institution: "ABU Printing Press",
      period: "2024",
      icon: <Printer className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Huawei ICT Certification (WLAN, Datacom, Security)",
      institution: "ABU Huawei Academy",
      period: "2023",
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Digital Marketing Internship",
      institution: "Excelerate Africa",
      period: "2025",
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="py-16 text-center text-white bg-[#0B1120]">
      <h2 className="text-3xl font-bold text-blue-400 mb-2">
        Education & Training
      </h2>
      <p className="text-gray-300 mb-12">
        A timeline of my academic journey and professional certifications.
      </p>

      {/* Grid container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#0B1120] border border-blue-800 w-72 h-56 flex flex-col items-center justify-center rounded-2xl shadow-lg hover:shadow-blue-700/40 transition relative"
          >
            <div className="mb-3">{edu.icon}</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-1">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-300 px-4">{edu.institution}</p>
            <p className="text-xs text-gray-500 mt-2">{edu.period}</p>

            {/* Decorative connector line */}
            {(index !== education.length - 1 && index !== 2 && index !== 5) && (
              <div className="hidden md:block absolute right-[-2rem] top-1/2 w-8 h-[2px] bg-blue-500"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
