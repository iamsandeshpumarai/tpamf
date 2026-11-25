import React from 'react';

const FeaturedObjectives = () => {
  const objectives = [
  {
    marker: "क",
    title: "अनुसन्धान तथा प्रकाशन",
    desc: "राष्ट्रिय सार्वभौमिकता, क्षेत्रीय अखण्डता, स्वाभिमान र लोकतान्त्रिक मूल्य तथा मान्यताहरूबारे खोज तथा अनुसन्धान, सेमिनार, गोष्ठी, प्रशिक्षण र प्रतियोगिताहरू सञ्चालन गर्ने साथै उक्त विषयमा पुस्तक तथा पुस्तिकाहरू प्रकाशन गर्ने।"
  },
  {
    marker: "ख",
    title: "शिक्षा तथा सामाजिक उत्थान",
    desc: "यी मूल्य र मान्यताहरू जनसमक्ष पुर्‍याउन शिक्षा, सामाजिक उत्थान तथा आर्थिक समुन्नतिका क्षेत्रमा विभिन्न कार्यहरू गर्ने।"
  },
  {
    marker: "ग",
    title: "पुरस्कार तथा सम्मान",
    desc: "राष्ट्रिय वा अन्तर्राष्ट्रिय क्षेत्रमा जनकल्याण, सामाजिक तथा प्राज्ञिक क्षेत्रको विकास एवं संवर्द्धनमा महत्वपूर्ण योगदान पुर्‍याउने व्यक्तिहरूलाई पुरस्कारद्वारा सम्मान गर्ने।"
  }
];

  return (
    <div className="mt-16 md:mt-24 font-['Poppins',_sans-serif] w-[100%] flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-[90%] lg:w-[80%]">
        {objectives.map((item, index) => (
          <div key={index} className="group flex items-start space-x-5 transition-all duration-300">
            
            {/* Marker Icon (क, ख, ग) */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#273a83] text-white font-bold text-lg shadow-md group-hover:bg-[#0b0c26] transition-colors duration-300">
                {item.marker}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h5 className="text-[#0b0c26] font-bold text-lg mb-3 group-hover:text-[#273a83] transition-colors duration-300">
                {item.title}
              </h5>
              <p className="text-[#8d9297] text-[14px] leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedObjectives;