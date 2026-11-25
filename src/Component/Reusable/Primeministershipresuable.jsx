
import React, { useState } from "react";

const BasicIntro = ({ data, reverse = false }) => {
  const [language, setLanguage] = useState("ne");

  if (!data) return null;

  const getText = (value) => {
    if (typeof value === "string") return value;
    return value?.[language] || value?.ne || "";
  };

  return (
    <section className="bg-[#F8F9FC] min-h-screen py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase mb-3">
                {getText(data.eyebrow)}
              </p>

              <h1 className="text-2xl md:text-4xl font-extrabold text-[#10152F] leading-snug">
                {getText(data.header)}
              </h1>

              <div className="w-20 h-1.5 bg-blue-700 rounded-full mt-5" />
            </div>

            {/* Language Switch */}
            <div className="flex items-center bg-white border border-gray-200 p-1 rounded-xl shadow-sm w-fit">
              <button
                onClick={() => setLanguage("ne")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  language === "ne"
                    ? "bg-[#10152F] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                नेपाली
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-[#10152F] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                English
              </button>
            </div>
          </div>

          {data.subtitle && (
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              {getText(data.subtitle)}
            </p>
          )}
        </div>

        {/* Main Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Profile Image */}
          <aside
            className={`lg:col-span-1 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="lg:sticky lg:top-24">
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
                <img
                  src={data.image}
                  alt={getText(data.imageAlt) || "Profile"}
                  className="w-full h-auto max-h-[550px] object-cover rounded-xl"
                />
              </div>

              {data.imageCaption && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  {getText(data.imageCaption)}
                </p>
              )}

              {data.highlights && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-6">
                  <h3 className="font-bold text-[#10152F] mb-4">
                    {getText(data.highlightsTitle)}
                  </h3>

                  <div className="space-y-4">
                    {data.highlights.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {getText(item.title)}
                          </p>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">
                              {getText(item.description)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Information Content */}
          <main
            className={`lg:col-span-2 space-y-7 ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Introduction */}
            {data.introduction && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <p className="text-gray-700 text-base md:text-lg leading-[2] text-justify">
                  {getText(data.introduction)}
                </p>
              </div>
            )}

            {/* Sections */}
            {data.sections &&
              Object.entries(data.sections).map(([key, section]) => (
                <article
                  key={key}
                  id={key}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold shrink-0">
                      {section.number || "•"}
                    </span>

                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#10152F] leading-snug">
                        {getText(section.title)}
                      </h2>
                      <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={`${key}-${index}`}
                        className="text-gray-700 text-base md:text-lg leading-[2] text-justify"
                      >
                        {getText(paragraph)}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default BasicIntro;
