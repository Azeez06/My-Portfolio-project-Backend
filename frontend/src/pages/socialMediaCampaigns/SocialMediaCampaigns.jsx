import { Link } from "react-router-dom";

// Icons (Lucide)
import { GraduationCap, Megaphone, Camera, Leaf } from "lucide-react";

const campaigns = [
  {
    title: "Excelerate",
    description: "A student-focused internship & professional growth program.",
    link: "/social-media-campaigns/excelerate",
    icon: (
      <GraduationCap className="w-16 h-16" style={{ color: "#FF6A3D" }} />
    ),
    color: "from-[#FFE6D9] to-[#FFF2ED]", // Soft Excelerate orange gradient
  },
  {
    title: "Gojuju",
    description: "A marketing and lifestyle platform for ABU students.",
    link: "/social-media-campaigns/gojuju",
    icon: <Megaphone className="w-16 h-16" style={{ color: "#0047BA" }} />,
    color: "from-[#E6EEFF] to-[#F4F7FF]", // Soft Gojuju blue gradient
  },
  {
    title: "EcoClimate Foundation",
    description: "Climate change advocacy & environmental awareness.",
    link: "/social-media-campaigns/eco-climate",
    icon: <Leaf className="w-16 h-16" style={{ color: "#00923F" }} />,
    color: "from-[#DFF7E9] to-[#EEFDF6]", // Eco-friendly green gradient
  },
  {
    title: "The Creatives",
    description: "A media hub for creative storytelling and digital content.",
    link: "/social-media-campaigns/creatives",
    icon: <Camera className="w-16 h-16" style={{ color: "#F9C449" }} />,
    color: "from-[#FFF8DF] to-[#FFFAEA]", // Soft gold/cream gradient
  },
];

export default function SocialMediaCampaigns() {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
        Social Media Campaigns
      </h1>

      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
        Explore my digital campaign projects across education, environmental sustainability,
        student marketing, and creative media platforms.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {campaigns.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className={`bg-gradient-to-br ${item.color} border border-gray-300 
              shadow-lg rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-3 
              transition-all duration-300 cursor-pointer`}
          >
            <div className="flex justify-center mb-6">{item.icon}</div>

            <h2 className="text-2xl font-bold mb-3 text-center text-gray-900">
              {item.title}
            </h2>

            <p className="text-md text-gray-700 text-center">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
