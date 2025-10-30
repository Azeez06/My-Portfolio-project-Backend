"use client";
import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML & CSS", level: 75 },
      { name: "React", level: 60 },
      { name: "Tailwinds", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "REST APIs", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 70 },
    ],
    design: [
      { name: "CorrelDraw", level: 80 },
      { name: "Photoshop", level: 60 },
      { name: "Adobe XD", level: 75 },
    ],
    marketing: [
      { name: "SEO & Social Media Audit", level: 90 },
      { name: "Social Media Ads", level: 70 },
      { name: "Email Marketing", level: 80 },
    ],
  };

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "design", label: "Design Tool" },
    { key: "marketing", label: "Marketing Tool" },
  ];

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="text-blue-400 uppercase tracking-widest mb-2">What I Do</p>
        <h1 className="text-4xl font-bold mb-4">My SKills</h1>
        <p className="text-gray-400 mb-12">
          Explore my skills and technical expertise across various categories.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-6 py-2 rounded-full font-medium border transition-all duration-300 ${
                activeTab === cat.key
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Box */}
        <div className="bg-[#121826] shadow-xl rounded-xl p-8 max-w-3xl mx-auto text-left border border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-blue-400">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Skills
          </h2>

          {skills[activeTab].map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-200">
                  {index + 1}. {skill.name}
                </span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}

          <div className="mt-8 text-gray-400 font-semibold text-center border-t border-gray-700 pt-4">
            Other Skills
          </div>
        </div>
      </div>
    </section>
  );
}
