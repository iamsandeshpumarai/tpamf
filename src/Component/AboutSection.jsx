import React from 'react';
import { CheckCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

import  FeatureBoxImage2 from '../assets/images/single-img-three.jpg'
import  FeatureBoxImage1 from '../assets/images/single-img-four.jpg'
import  FeatureBoxImage3 from '../assets/images/single-img-five.jpg'

const AboutSection = () => {
  const points = [
    "नागरिक अधिकार र सम्मान प्रवर्द्धन",
    "बहुदलीय व्यवस्था स्थापनामा योगदान",
    "सामाजिक न्याय र प्रजातन्त्र स्थापना",
    "राष्ट्रिय स्वाभिमान मूल्य संरक्षण",
    "राणा शासनको अन्त्यमा नेतृत्व",
    "टंकप्रसाद आचार्यको सम्मान उद्देश्य",
    "कीर्ति–स्मृति चिरस्थायी राख्ने अभियान",
    "काठमाडौं प्रशासन कार्यालयमा दर्ता",
    "२०५० वैशाख ११ मा स्थापना",
    "समाज कल्याण परिषद् आवद्धता १६९९३"
  ];

  return (
    <section className="py-16 bg-white overflow-hidden font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT COLUMN: Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-12 gap-4 justify-center items-center">
              {/* Top Left Image */}
              <div className="col-span-12 md:col-span-7">
                <img 
                  src={FeatureBoxImage2} 
                  alt="TPA History" 
                  className="rounded-sm shadow-lg w-full h-full object-cover"
                />
              </div>
              {/* Top Right Image */}
              <div className="col-span-12 md:col-span-5">
                <img 
                  src={FeatureBoxImage1} 
                  alt="TPA Landmark" 
                  className="rounded-sm shadow-lg w-full h-full object-cover "
                />
              </div>
              {/* Bottom Large Image */}
              <div className="col-span-12 mt-4 relative">
                <img 
                  src={FeatureBoxImage3} 
                  alt="TPA Foundation" 
                  className="rounded-sm shadow-lg w-full object-cover h-64"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-6 md:right-10 bg-[#273a83] text-white p-6 rounded-sm shadow-xl flex items-center gap-4 animate-bounce-slow">
                  <div className="bg-white/20 p-3 rounded-full">
                    <GlobeAltIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">45</span>
                      <span className="text-xl font-bold">+</span>
                    </div>
                    <p className="text-xs uppercase tracking-wider font-semibold opacity-90">
                      Years Of <br /> Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {/* Section Header */}
              <div>
                <h5 className="text-[#273a83] font-bold tracking-widest text-sm uppercase mb-2">
                  ABOUT TPA
                </h5>
                <h2 className="text-3xl md:text-4xl font-bold text-[#212529] leading-tight">
                  टंकप्रसाद आचार्य (१९१२ - १९९२)
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#8d9297] text-base leading-relaxed text-justify">
                नेपालमा राजनीतिक परिवर्तनद्वारा नागरिक सम्मान र मानव अधिकार, सामाजिक न्याय एवं प्रजातन्त्र तथा लोक कल्याणकारी राज्यको स्थापना गरी देशको राष्ट्रिय स्वाधीनताको मार्गलाई विकसित गरी सर्वतोमुखी विकास गर्ने हेतुले शताब्दी लामो जहानिया राणा शासनलाई जन संघर्षबाट अन्त्य गर्दै बहुदलीय प्रजातान्त्रिक व्यवस्थाको स्थापना गर्न संगठित जनप्रयासतर्फ नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यले जिउज्यानको बाजी लगाई सम्वर्धन गरेको जनकल्याणकारी प्रजातन्त्र र राष्ट्रिय स्वाभिमानका मूल्य र मान्यताहरूको प्रवद्र्धन गर्नका साथै श्री आचार्यको सम्मान गर्दै उहाँको कीर्ति तथा पावन स्मृतिलाई चिरस्थायी राख्ने उद्देश्य लिएर २०५० साल वैशाख ११ गते सार्वजनिक क्षेत्रमा टंकप्रसाद आचार्य स्मृति प्रतिष्ठानको स्थापना गरिएको हो ।
                <a href="#" className="text-[#273a83] font-bold ml-2 underline underline-offset-4 decoration-2">Read More</a>
              </p>

              {/* Icon List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                {points.map((text, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircleIcon className="w-5 h-5 text-[#273a83] transition-transform group-hover:scale-110" />
                    <span className="text-sm text-[#212529] font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;