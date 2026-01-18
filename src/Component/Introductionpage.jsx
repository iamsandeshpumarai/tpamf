import React, { useState } from 'react';

const IntroductionPage = ({ data }) => {
  const [lang, setLang] = useState('ne'); 
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data) return null;

  // Get the array of paragraphs for the selected language
  const paragraphs = data.information[lang] || [];

  return (
    <section className="bg-[#FDFDFD] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Language Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C26] border-b-4 border-[#0B0C26] pb-2">
            {data.headerdata[lang]}
          </h2>
          
          {/* Language Toggle Slider Style */}
          <div className="flex bg-gray-200 p-1 rounded-full shadow-inner border border-gray-300">
            <button 
              onClick={() => { setLang('ne'); setIsExpanded(false); }}
              className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                lang === 'ne' ? 'bg-[#0B0C26] text-white shadow-md' : 'text-gray-600 hover:text-[#0B0C26]'
              }`}
            >
              नेपाली
            </button>
            <button 
              onClick={() => { setLang('en'); setIsExpanded(false); }}
              className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                lang === 'en' ? 'bg-[#0B0C26] text-white shadow-md' : 'text-gray-600 hover:text-[#0B0C26]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={data.image} alt="Tanka Prasad Acharya" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right Side: Information */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              {paragraphs.map((para, index) => {
                // If not expanded, only show the first paragraph (index 0)
                if (!isExpanded && index > 0) return null;

                return (
                  <p 
                    key={index} 
                    className="text-[#333] leading-loose text-lg text-justify animate-fade-in"
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Read More / Less Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 px-6 py-2 bg-transparent border-2 border-[#0B0C26] text-[#0B0C26] font-bold rounded-lg hover:bg-[#0B0C26] hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              {isExpanded ? (
                <> {lang === 'ne' ? 'कम पढ्नुहोस्' : 'Read Less'} ↑</>
              ) : (
                <> {lang === 'ne' ? 'थप पढ्नुहोस्' : 'Read More'} ↓</>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default IntroductionPage;