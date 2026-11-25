import React from 'react';
import FoundationFooter from '../Company/FoudationFooter';

const MuseumSection = () => {
  const meseumData = {
    meseumTitle: "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालय",
    image: "",
    data: [
      "नवलपरासी रामग्राममा रहेको टंकप्रसाद आचार्यको जन्मघरमा टंकप्रसाद आचार्य संग्राहलय बनाउन प्रतिष्ठानलाई जग्गाको भोगाधिकार प्राप्त भएको छ । सो घरलाई संग्रालय बनाउन स्थानिय समितिद्धारा संग्रालयको प्रस्ताव तयार गरी सम्वन्धित मन्त्रालयमा पेश गरिएको थियो । घर जिर्ण अबस्थामा पुगेको छ । आचार्यको जन्मघरलाई पुरातात्विक हिसावले पुर्ननिर्माण गर्नका लागि पुरातत्व विभागले २०७९ चैत्रमा नै नक्सा र लागत तयार गरिसकेको छ । सोशी अनसारको बजेट विनियोजनका लागि सरकार समक्ष अनुरोध गरिए पनि हालसम्म प्राप्त हुन सकेको छैन । आ. व २०८३ /०८४ मा पनि बजेट विनियोजनका लागि अनुरोध गरी ताकेता गर्नुपर्नेछ ।  ",
      {
        title: "",
        data: [
          ""
        ]
      }
    ]
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Title & Image */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-24 h-fit">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0C26] mb-6 inline-block border-b-4 border-[#0B0C26] pb-2 leading-tight">
            {meseumData.meseumTitle}
          </h1>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.02] duration-500">
            <img 
              src={meseumData.image} 
              alt="Museum" 
              className="w-full h-[400px] object-cover" 
            />
          </div>
        </div>

        {/* Right Side: Paragraph Data */}
        <div className="w-full lg:w-3/5 space-y-10">
          {meseumData.data.map((item, index) => {
            // Check if item is a string
            if (typeof item === 'string') {
              return (
                <p key={index} className="text-gray-700 text-lg leading-relaxed text-justify md:text-left">
                  {item}
                </p>
              );
            }
            // Check if item is the nested title/data object
            if (typeof item === 'object') {
              return (
                <div key={index} className="pt-8 border-t border-gray-100">
                  <h2 className="text-2xl font-bold text-blue-700 mb-6 underline decoration-2 underline-offset-8">
                    {item.title}
                  </h2>
                  <div className="space-y-6">
                    {item.data.map((subPara, subIndex) => (
                      <p key={subIndex} className="text-gray-700 text-lg leading-relaxed text-justify">
                        {subPara}
                      </p>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <FoundationFooter/>
    </section>
  );
};

export default MuseumSection;