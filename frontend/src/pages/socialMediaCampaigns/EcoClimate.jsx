import { 
  Leaf, 
  BarChart3, 
  CalendarDays, 
  CheckCircle2, 
  FileSearch, 
  Palette, 
  CalendarCheck 
} from "lucide-react";

import { Link } from "react-router-dom";

export default function EcoClimate() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      {/* HERO SECTION */}
      <div className="bg-green-100 border border-green-300 rounded-3xl p-10 mb-14 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <Leaf className="w-20 h-20 text-green-700 mb-6" />
          <h1 className="text-4xl font-extrabold text-green-900 mb-3">
            Eco-Climate Change Campaign
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl">
            A digital awareness project focused on climate education, environmental sustainability,
            and youth-led advocacy for a greener planet.
          </p>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          As a social media strategist for Eco-Climate Change Foundation, my role involved 
          developing awareness content, educating the public about environmental issues, 
          designing engaging visuals, and supporting community-driven sustainability campaigns. 
          I worked on content calendars, campaign concepts, visual storytelling, and platform optimization.
        </p>
      </section>

      {/* OBJECTIVES */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Campaign Objectives</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-700" /> Increase awareness about climate change among young Nigerians.</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-700" /> Create simple, relatable content for everyday environmental practices.</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-700" /> Build an online community that participates in sustainability activities.</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-700" /> Use social platforms to drive eco-friendly behaviours.</li>
        </ul>
      </section>

      {/* STRATEGY */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Strategy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <CalendarDays className="w-10 h-10 text-green-700 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Calendar</h3>
            <p className="text-gray-600">
              Developed weekly and monthly content calendars focused on global/environmental events 
              like Earth Day, sustainability tips, climate facts, and environmental storytelling.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <BarChart3 className="w-10 h-10 text-green-700 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Engagement Strategy</h3>
            <p className="text-gray-600">
              Designed posts with actionable tips, visual infographics, reels, and conversation starters 
              to increase awareness and spark participation.
            </p>
          </div>
        </div>
      </section>

      {/* SAMPLE CONTENT (CLICKABLE BOXES) */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sample Content</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* BOX 1 — SOCIAL MEDIA AUDIT */}
           <a
          href="https://docs.google.com/spreadsheets/d/1QvMGihg2FxE4r38tiLqa6pI77qfg5KSQO_W8J0FMX1k/edit?gid=0#gid=0"
          target="_blank"
          className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Excelerate Youtube Keywor</h2>
          <p className="text-gray-600">Analysis of brand performance, engagement, strengths, weaknesses, 
              and opportunities for environmental impact messaging.
       </p>
        </a>
          
          
          {/* BOX 2 — CONTENT CALENDAR */}
         <Link
  to="/social-media-campaigns/content-calendar"
  className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
>
  <CalendarCheck className="w-12 h-12 text-green-700 mx-auto mb-4" />
  <h3 className="text-xl font-semibold text-center text-green-700 mb-2">
    Content Calendars
  </h3>
  <p className="text-gray-600 text-center text-sm">
    Structured posting plans for climate facts, eco-tips, awareness days,
    and sustainability storytelling.
  </p>
</Link>


          {/* BOX 3 — GRAPHICS + CAPTIONS */}
          <Link
            to="/social-media-campaigns/graphics"
            className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
          >
            <Palette className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-green-700 mb-2">
              Graphics With Captions
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Visually compelling climate-awareness designs paired with strong,
              educational and advocacy-centered captions.
            </p>
          </Link>

        </div>
      </section>

      {/* TOOLS USED */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Tools Used</h2>
        <ul className="flex flex-wrap gap-4 text-gray-700">
          <li className="bg-green-100 border border-green-300 px-4 py-2 rounded-full">Canva</li>
          <li className="bg-green-100 border border-green-300 px-4 py-2 rounded-full">CapCut</li>
          <li className="bg-green-100 border border-green-300 px-4 py-2 rounded-full">Meta Business Suite</li>
          <li className="bg-green-100 border border-green-300 px-4 py-2 rounded-full">Content Calendar Tools</li>
        </ul>
      </section>
    </div>
  );
}
