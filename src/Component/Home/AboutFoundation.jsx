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
                  प्रतिष्ठानको परिचय
                </h2>
              </div>

              {/* Full Description Text */}
              <div className="text-[#5a5e63] text-[15.5px] leading-[1.8] space-y-6">
                <p className="text-justify">
                  नेपालमा राजनीतिक परिवर्तनका माध्यमबाट नागरिक सम्मान, मानव अधिकार, सामाजिक न्याय, प्रजातन्त्र तथा लोककल्याणकारी राज्यको स्थापना गर्न अनेकौं संघर्ष भएका छन्। शताब्दीभन्दा लामो जहानिया राणा शासन अन्त्य गर्न जनआन्दोलनले महत्वपूर्ण भूमिका खेलेको थियो। यसै क्रममा, नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने अग्रणी राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यले आफ्नो जीवन जोखिममा राख्दै बहुदलीय प्रजातान्त्रिक व्यवस्थाको स्थापना, जनकल्याणकारी प्रजातन्त्रको विकास तथा राष्ट्रिय स्वाभिमानको उन्नतिमा महत्वपूर्ण योगदान पुर्याउनुभयो।
                </p>
                
                <p className="text-justify">
                  उहाँका मूल्य, मान्यता, त्याग र राष्ट्रप्रतिको समर्पणलाई सम्मान गर्दै, उहाँको अमर योगदानलाई सदैव जीवित राख्ने उद्देश्यले २०५० साल वैशाख ११ गते ‘टंकप्रसाद आचार्य स्मृति प्रतिष्ठान’ को स्थापना गरिएको हो। यस प्रतिष्ठानले श्री आचार्यको कीर्ति, आदर्श र पावन स्मृतिलाई चिरस्थायी बनाउँदै राष्ट्रिय स्वाधीनता, लोकतान्त्रिक मूल्य, सामाजिक चेतना र सर्वतोमुखी विकासमा योगदान पुर्‍याउने लक्ष्य राखेको छ।
                </p>

                <div className="p-4 border-l-4 border-[#273a83] bg-white shadow-sm italic">
                  प्रतिष्ठान काठमाडौं जिल्ला प्रशासन कार्यालयमा २०५० साल वैशाख ११ गते औपचारिक रूपमा दर्ता भएको हो।
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