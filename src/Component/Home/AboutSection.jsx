import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const aboutData = {
    date: "टंकप्रसाद आचार्य (१९१२ - १९९२)",
    aboutImg: "https://tp-acharya.terracecafe.com.np/upload/images/tp-acharya/1712319066tankaprasad.jpg",
    about: [
      "नेपालमा राजनीतिक परिवर्तनद्वारा नागरिक सम्मान र मानव अधिकार, सामाजिक न्याय एवं प्रजातन्त्र तथा लोक कल्याणकारी राज्यको स्थापना गरी देशको राष्ट्रिय स्वाधीनताको मार्गलाई विकसित गरी सर्वतोमुखी विकास गर्ने हेतुले शताब्दी लामो जहानिया राणा शासनलाई जन संघर्षबाट अन्त्य गर्दै बहुदलीय प्रजातान्त्रिक व्यवस्थाको स्थापना गर्न संगठित जनप्रयासतर्फ नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यले जिउज्यानको बाजी लगाई सम्वर्धन गरेको जनकल्याणकारी प्रजातन्त्र र राष्ट्रिय स्वाभिमानका मूल्य र मान्यताहरूको प्रवद्र्धन गर्नका साथै श्री आचार्यको सम्मान गर्दै उहाँको कीर्ति तथा पावन स्मृतिलाई चिरस्थायी राख्ने उद्देश्य लिएर २०५० साल वैशाख ११ गते सार्वजनिक क्षेत्रमा टंकप्रसाद आचार्य स्मृति प्रतिष्ठानको स्थापना गरिएको हो ।",
      "जिल्ला प्रशासन कार्यालय काठमाडौंमा २०५० वैशाख ११ गते दर्ता गरिएको छ । साथै मिति २०६१ कार्तिक ३० मा आवद्धता नं. १६९९३ वाट प्रतिष्ठान समाज कल्याण परिषद्मा समेत आवद्ध भएको छ ।"
    ]
  };

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Using items-stretch ensures that the left and right columns stay equal in height if the text grows */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
          
          {/* LEFT COLUMN: Date + Image */}
          <div className="w-full lg:w-5/12 flex flex-col">
            {/* BIGGER DATE BADGE */}
            <div className="mb-6">
              <span className="inline-block bg-[#273a83] text-white px-6 py-3 rounded-sm text-base md:text-lg font-bold tracking-wider shadow-lg">
                {aboutData.date}
              </span>
            </div>
            
            {/* IMAGE CONTAINER - flex-grow makes it scale with the text height */}
            <div className="relative flex-grow min-h-[400px]">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#273a83]/10 rounded-lg -z-10 hidden lg:block"></div>
              
              <img 
                src={aboutData.aboutImg} 
                alt="Tanka Prasad Acharya" 
                className="rounded-lg shadow-2xl w-full h-full object-cover object-top border-b-8 border-[#273a83]"
              />
              
              {/* Responsive Badge */}
              <div className="absolute bottom-6 right-6 bg-[#273a83] text-white px-4 py-2 rounded shadow-xl hidden lg:block">
                 <p className="font-bold text-sm tracking-widest uppercase">National Hero</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="lg:pl-8">
              <header className="mb-8">
                <h5 className="text-[#273a83] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-3">
                  Historical Foundation
                </h5>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#212529] leading-[1.1]">
                  टंकप्रसाद आचार्य <br /> स्मृति प्रतिष्ठान
                </h2>
                <div className="w-24 h-2 bg-[#273a83] mt-6"></div>
              </header>

              <div className="space-y-6">
                {aboutData.about.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Enhanced Action Button */}
              <div className="mt-12">
                <button  className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-[#273a83] rounded-sm hover:bg-[#1a285d] shadow-2xl overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10 uppercase tracking-[0.2em] text-sm"> <Link to='/tankaprasadacharya'>Read Detailed History</Link> </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-[#1a285d]"></div>
                  <svg 
                    className="relative z-10 w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;