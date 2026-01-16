import React from 'react';

const FeaturedObjectives = () => {
  const objectives = [
    {
      marker: "क",
      title: "सार्वभौम अनुसन्धान",
      desc: "राष्ट्रिय सार्वभौमिकता, क्षेत्रीय अक्ष्क्षुणता, स्वाभिमान र लोकतान्त्रिक मुल्यहरूबारे खोज, सेमिनार, गोष्ठी, प्रशिक्षण तथा प्रतियोगिता आदि गराउने र उक्त विषयमा पुस्तक, पुस्तिका प्रकाशन गराउने ।"
    },
    {
      marker: "ख",
      title: "जन उत्थान",
      desc: "यी मूल्य र मान्यतालाई जनता समक्ष पुर्‍याउन शिक्षा, सामाजिक उत्थान र आर्थिक समुन्नतिको क्षेत्रमा विभिन्न जनचेतनामूलक काम गर्ने ।"
    },
    {
      marker: "ग",
      title: "राष्ट्रिय सम्मान",
      desc: "पुरस्कारद्वारा राष्ट्रिय वा अन्तर्राष्ट्रिय जगतमा जनकल्याण, विकास एवं सम्वर्धनमा गहकिलो योगदान गरेको व्यक्तिलाई सम्मानित गर्ने ।"
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