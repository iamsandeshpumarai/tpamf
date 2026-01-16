import React from 'react';

const MuseumSection = () => {
  const meseumData = {
    meseumTitle: "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालय",
    image: "https://tp-acharya.terracecafe.com.np/upload/images/museum/17084995921.%20Tanka%20Prasad%20Acharyako%20Janma%20ghar.jpg",
    data: [
      "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालय नेपालको समृद्ध ऐतिहासिक र सांस्कृतिक धरोहरलाई संरक्षण र उनीहरूलाई सार्वजनिक रूपमा प्रदर्शन गर्ने उद्देश्यले स्थापित भएको छ। यो संग्रहालय काठमाडौं नगरपालिका-४, स्याम्बू मार्गमा स्थित छ।",
      "यस संग्रहालयमा प्राचीन नेपाली संस्कृति, पुरातात्विक वस्तुहरू, स्थानीय लोक संस्कृति, ऐतिहासिक प्रतिमा-प्रतिक्रियाहरू, चित्रकला, विभिन्न धरोहरहरू र सांस्कृतिक प्रदर्शनीहरू समावेश गरिएको छ।",
      "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालयमा पाएका वस्तुहरूले नेपाली संस्कृतिक विविधता र समृद्धि देखाउँछन्। यो संग्रहालय नेपालको ऐतिहासिक, सांस्कृतिक र विरासतका प्रमुख स्थलहरूमा सेरिज गर्दछ र यात्रुहरूलाई नेपालको समृद्ध धरोहरलाई विश्वस्तरीय ढंगले जानकारी प्रदान गर्दछ।",
      "यस संग्रहालयले संग्रहित वस्तुहरूले प्राचीन नेपाली संस्कृति र विरासतको महत्त्वलाई समझाउँछ र युवाहरूमा संस्कृति र समृद्धि बढाउने प्रेरणा प्रदान गर्दछ।",
      {
        title: "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालयमा अभिवादन",
        data: [
          "यो संग्रहालयले नेपालको ऐतिहासिक, सांस्कृतिक र विरासतको अद्भुतता देखाउँछ। यहाँ प्रदर्शनीहरू, प्रतिमा-प्रतिक्रियाहरू, चित्रकला, पुरातात्विक वस्तुहरू र धार्मिक प्रतिमाहरूको बडा संग्रह छ।",
          "संग्रहालयको योजना र स्थापत्य नेपाली संस्कृति र ऐतिहासिक पृष्ठभूमि सम्बन्धी जानकारी प्रदान गर्ने उद्देश्यले तय गरिएको छ। यहाँको प्रदर्शनीहरू र प्रतिमा-प्रतिक्रियाहरूले यात्रुहरूलाई नेपालको समृद्ध ऐतिहासिक विरासतको जानकारी प्रदान गर्दछन्।",
          "टंकप्रसाद आचार्य प्रतिष्ठान संग्रहालयले नेपालको सांस्कृतिक, ऐतिहासिक र धार्मिक पहिचानलाई संरक्षण गर्ने कार्यक्रमहरू आयोजना गर्दछ। यसले सांस्कृतिक और साहित्यिक दृष्टिकोणबाट नेपाली समाजमा गहन प्रभाव गर्दछ।",
          "संग्रहालयमा सञ्चालित कार्यक्रमहरूले युवाहरूसम्मको सांस्कृतिक ज्ञान र समृद्धि बढाउँछन्। यो संग्रहालय समृद्ध नेपाली ऐतिहासिक और सांस्कृतिक धरोहर राख्ने लक्ष्यले नेपाली समुदायको भविष्यमा महत्त्वपूर्ण भूमिका खेल्दछ।"
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
    </section>
  );
};

export default MuseumSection;