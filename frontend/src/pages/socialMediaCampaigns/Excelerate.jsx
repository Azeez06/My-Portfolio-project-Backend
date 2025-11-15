import { useState } from "react";
import { PenTool, BarChart3, FileText, TrendingUp } from "lucide-react";

export default function Excelerate() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-200 via-white to-blue-200 
        border border-orange-300 rounded-3xl p-10 mb-14 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <PenTool className="w-20 h-20 text-orange-600 mb-6" />
          <h1 className="text-4xl font-extrabold text-blue-900 mb-3">
            Copywriting & Digital Strategy — Excelerate
          </h1>
          <p className="text-blue-900 text-lg max-w-xl">
            A curated collection of high-performing campaign copies,
            brand messages, and digital strategies developed for Excelerate.
          </p>
        </div>
      </div>

      {/* COPYWRITING SAMPLES */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Copywriting Samples
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              onClick={() => toggle(id)}
              className="
                cursor-pointer bg-white 
                border border-orange-200 
                rounded-xl p-6 shadow 
                hover:shadow-xl hover:border-orange-400
                transition
              "
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {id === 1 && "Visibility & Brand Positioning Copy"}
                {id === 2 && "Financial Fundamentals Campaign Copy"}
                {id === 3 && "Graphic Design Internship Ad Copy"}
                {id === 4 && "Excelerate Digital Marketing Strategy Copy"}
              </h3>

              <p className="text-gray-700 text-sm">
                {id === 1 &&
                  "A persuasive brand visibility message crafted for YouTube captioning."}
                {id === 2 &&
                  "A statistics-backed campaign copy designed for X (Twitter)."}
                {id === 3 &&
                  "A compelling ad copy promoting Excelerate’s design internship."}
                {id === 4 &&
                  "A creative digital marketing strategy message for LinkedIn."}
              </p>

              {open === id && (
                <div className="mt-4 text-gray-800 text-sm border-t pt-4 leading-relaxed">

                  {/* COPY #1 */}
                  {id === 1 && (
                    <>
                      <p className="mb-3">
                        Visibility is not a luxury, rather a strategy.  
                        When people can’t see you, they can’t trust you.  
                        And when they can’t trust you, they can’t choose you.
                      </p>
                      <p className="mb-3">
                        Showing up consistently is what separates brands that grow
                        from brands that fade. Visibility builds credibility.
                        Credibility builds opportunity. And opportunity changes everything.
                      </p>
                      <p className="font-semibold text-orange-700">
                        Show up. Be seen. Stay visible.
                      </p>
                    </>
                  )}

                  {/* COPY #2 */}
                  {id === 2 && (
                    <>
                      <p className="mb-3">
                        70% of young adults admit they were never taught how to manage money.
                        Yet over 64% of financial mistakes made in early adulthood come from
                        poor budgeting, impulse spending, and lack of basic financial literacy.
                      </p>
                      <p className="mb-3">
                        Financial stability isn’t luck rather, knowledge.  
                        And the people who learn the fundamentals early
                        are the ones who stay ahead when others fall behind.
                      </p>
                      <p className="mb-3">
                        Mastering the basics can change the entire trajectory of your future wherever you go.
                      </p>
                      <p className="font-semibold text-orange-700">
                        Start now. Learn the fundamentals.  
                        Your future money story starts today.
                      </p>
                    </>
                  )}

                  {/* COPY #3 */}
                  {id === 3 && (
                    <>
                      <p className="mb-3">
                        Great designers aren’t born but, trained, mentored, and challenged.
                      </p>
                      <p className="mb-3">
                        If you’ve been waiting for a sign to level up your creative skills,
                        this is it.
                      </p>
                      <p className="mb-3">
                        Excelerate’s Graphic Design Internship Program gives you real-world experience,
                        hands-on projects, and guidance from industry experts that goes beyound theories.
                      </p>
                      <p className="mb-3">
                       At Excelerate You won’t just learn design…  
                        You’ll learn how to think, create, and communicate like a designer who stands out.
                      </p>
                      <p className="font-semibold text-orange-700">
                        Enroll now to your design journey!.
                      </p>
                    </>
                  )}

                  {/* COPY #4 */}
                  {id === 4 && (
                    <>
                      <p className="mb-3 font-semibold text-blue-900">
                        Your Brand Isn’t Invisible! It’s Just Not Saying the Right Things (Yet).
                      </p>
                      <p className="mb-3">
                        In the digital world, attention is currency and most brands are broke.  
                        But with the right strategy? You don’t chase visibility… you attract it.
                      </p>
                      <p className="mb-3">
                        At Excelerate, we turn plain brands into scroll-stoppers by blending:
                      </p>
                      <ul className="list-disc list-inside mb-3">
                        <li>Data-driven digital strategy</li>
                        <li>Creative storytelling</li>
                        <li>Conversion-focused execution</li>
                      </ul>
                      <p className="mb-3">
                        We build digital strategies that make people stop, look, and remember.
                      </p>
                      <p className="font-semibold text-orange-700">
                        Let’s Excelerate your digital presence.  
                        Visibility isn’t luck! It’s strategy.
                      </p>
                    </>
                  )}

                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* ANALYTICS & REPORTS */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Analytics & Performance Reports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {[
            {
              icon: FileText,
              title: "Financial Fundamental Challenge",
              link: "https://docs.google.com/document/d/19oksN1amPhU-_CkOMzUwueIAmiFI9gPIIh7B2t4BN60/edit?tab=t.0",
              desc: "Engagement breakdown and performance of financial literacy campaigns.",
            },
            {
              icon: TrendingUp,
              title: "Global Trends Excelerate Can Tap In",
              link: "https://docs.google.com/document/d/1KxjD4dDYnyswWMAR1kAepLrPMbPA7bUuQS6IuFCuR3I/edit?tab=t.0",
              desc: "A research-backed list of digital growth opportunities for Excelerate.",
            },
            {
              icon: BarChart3,
              title: "Excelerate YouTube Analysis",
              link: "https://docs.google.com/spreadsheets/d/1qv_irIvoI9C_71_ZMqJ5K_JlsyGkbikQY2CPPe0c5HY/edit?gid=0#gid=0",
              desc: "Channel performance, retention metrics, and optimization suggestions.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-br from-orange-100 to-blue-100 
                p-6 rounded-xl shadow 
                hover:shadow-xl transition
                border border-orange-200 hover:border-orange-400
              "
            >
              <item.icon className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-center text-blue-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center text-sm">
                {item.desc}
              </p>
            </a>
          ))}

        </div>
      </section>
    </div>
  );
}
