import React from 'react';
// import AboutImage from '../assets/images/single-img-six.png';

const AboutFoundation = () => {
  const aboutimage = "https://tp-acharya.terracecafe.com.np/upload/images/settings/1712294498pratisthan.jpg"
  return (
    <section className="py-20 bg-[#f3f7f9] overflow-hidden font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Full Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Section Title */}
              <div className="mb-8">
                <h5 className="text-[#273a83] font-bold tracking-[3px] text-xs uppercase mb-3 flex items-center">
                  ABOUT Foundation
                  <span className="ml-3 w-12 h-[1px] bg-[#273a83]"></span>
                </h5>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c26] leading-tight">
                  टंकप्रसाद आचार्य स्मृति प्रतिष्ठान
                </h2>
              </div>

              {/* Full Description Text */}
              <div className="text-[#5a5e63] text-[15.5px] leading-[1.8] space-y-6">
                <p className="text-justify">
                 शताब्दी लामो जहानिया राणा शासनलाई जनसंघर्षबाट अन्त्य गर्दै बहुदलीय प्रजातान्त्रिक व्यवस्थाको स्थापना गर्न संगठित जनप्रयासतर्फ नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यका नाममा २०५० सालमा टंकप्रसाद आचार्य स्मृति प्रतिष्ठानको स्थापना भएको हो । साथै मिति २०६१ कार्तिक ३० मा आवद्धता नं. १६९९३ वाट प्रतिष्ठान समाज कल्याण परिषद्मा समेत आवद्ध भएको छ । आचार्यले जिउज्यानको बाजी लगाई सम्वर्धन गरेको जनकल्याणकारी प्रजातन्त्र र राष्ट्रिय स्वाभिमानका मूल्य र मान्यताहरूको प्रवर्द्धन गर्नुका साथै उहाँको कीर्ति तथा पावन स्मृतिलाई चिरस्थायी राख्ने प्रतिष्ठानको उद्देश्य रहेको छ । नेपालको राष्ट्रिय सार्वभौमिकता, क्षेत्रिय अक्ष्क्षुणता, स्वाभिमान र लोकतान्त्रिक मूल्य तथा मान्यताहरूको संरक्षण र प्रवर्द्धन गर्नु तथा देशको सर्वतोमूखि विकासमा सहयोग प्रुयाउनु नै यसको मूल धेय हो । 
                </p>
                
                <p className="text-justify">
                  प्रतिष्ठानले राष्ट्रिय सार्वभौमिकता, क्षेत्रीय अक्ष्क्षुणता, स्वाभिमान र लोकतान्त्रिक मुल्यहरूबारे खोज अनुसन्धान, सेमिनार, गोष्ठी, प्रशिक्षण तथा प्रतियोगिता आदि गराउने र उक्त विषयमा पुस्तक प्रकाशन गर्ने गर्दछ । यी प्रकाशनहरुले भावी पुस्ताहरुलाई आचार्यले नेपालको इतिहासमा जनताको स्तन्त्रताका लागि प्रुयाउनु भएको योगदानका बारेमा जानकारी प्रदान गर्नेछ । प्रतिष्ठानले आचार्यका मूल्य र मान्यतालाई जनता समक्ष प्रुयाउन शिक्षा, सामाजिक उत्थान आर्थिक समुन्नतिको क्षेत्रमा विभिन्न काम गर्दै आएको छ । 
                </p>

                <div className="p-4 border-l-4 border-[#273a83] bg-white shadow-sm italic">
यसका अलावा प्रतिष्ठानले गरिव एवम विपन्न बालबालिकाहरुलाई प्राविधिक लगायतका शिक्षामा छात्रवृत्ति समेत प्रदान गर्ने गर्दछ । यसले विद्यार्थीहरुको व्यक्तिगत जीवनमा मात्र सहयोग नपुगी समाजको विकासमा सहयोग प्रुयाउन समेत सहयोग पुग्नेछ । 

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Area */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Frame (Now positioned for the right side) */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#273a83] transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4"></div>
              
              <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl bg-white p-2">
                <img 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                  src={aboutimage} 
                  alt="Late Tanka Prasad Acharya" 
                />
              </div>

              {/* Decorative Dot Pattern or Element could go here */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#273a83]/10 rounded-full -z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;