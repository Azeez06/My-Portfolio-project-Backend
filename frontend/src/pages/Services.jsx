import { Monitor, Link, Palette, Smartphone, PenTool, Brain } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'Web Development',
      description:
        'Designing and developing dynamic websites that provide seamless user experiences and meet diverse business needs.',
    },
    {
      icon: <Link className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'API Integration',
      description:
        'Seamlessly connecting applications with third-party services through robust API integration to enhance functionality.',
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'Technical Writing',
      description:
        'Crafting clear, precise, and user-focused documentation that empowers users and developers alike.',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'Social Media Management',
      description:
        'Creating engaging content and managing dynamic campaigns across multiple social media platforms to grow audiences.',
    },
    {
      icon: <PenTool className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'Graphic Design',
      description:
        'Designing visually compelling graphics that communicate ideas clearly and enhance brand identity across digital platforms.',
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-500 mb-3" />,
      title: 'AI Ethics Research',
      description:
        'Exploring the social, ethical, and policy implications of artificial intelligence to promote fairness and accountability in technology.',
    },
  ];

  return (
    <section className="bg-[#0b1120] text-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-gray-400 mb-12">
          Here are the services I offer to help bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold mt-3 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
