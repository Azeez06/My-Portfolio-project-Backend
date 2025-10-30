import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-12 border-t border-blue-900">
      {/* Wider gap and adjusted alignment */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-[1.6fr_1fr_1fr] gap-x-20 gap-y-10 items-start text-center md:text-left">
        
        {/* --- Brand / Intro Section --- */}
        <div className="md:translate-y-[-10px]">
          <h2 className="text-2xl font-semibold text-white mb-3">
            &lt;/&gt; Horlamilekan
          </h2>
          <p className="text-sm mb-3 leading-relaxed">
            I create and manage impactful digital experiences — blending 
            journalism, design, and technology to tell stories that inspire change.
          </p>
          <Link
            to="/contact"
            className="text-blue-400 hover:underline text-sm"
          >
            Get in touch →
          </Link>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">› Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">› Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-400">› Skills</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-400">› Projects</Link></li>
            <li><Link to="/education" className="hover:text-blue-400">› Education</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">› Contact</Link></li>
          </ul>
        </div>

        {/* --- Connect Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Github className="w-4 h-4 text-blue-400" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/sulaiman-azeez-64003823b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:your@email.com" className="hover:text-blue-400">
                Email
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Website
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Copyright Line --- */}
      <div className="border-t border-blue-900 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Horlamilekan | All Rights Reserved
      </div>
    </footer>
  );
}
