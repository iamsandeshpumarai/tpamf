import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const aboutData = {
    date: "टंकप्रसाद आचार्य (१९१२ - १९९२)",
    aboutImg: "https://tp-acharya.terracecafe.com.np/upload/images/tp-acharya/1712319066tankaprasad.jpg",
    about: [
      "पूर्व प्रधानमन्त्री टंकप्रसाद आचार्य नेपालको पहिलो राजनीतिक दल नेपाल प्रजा परिषद्का संस्थापक अध्यक्ष थिए। उहाँको जन्म वि.सं. १९६९ साल मङ्सिर १७ गते तत्कालीन तौलिहवा जिल्लाको परासी बजारमा भएको थियो। उहाँ वि.सं. २०१२ माघ १३ देखि २०१४ असार ३१ सम्म करिब १८ महिना नेपालको प्रधानमन्त्री रहनुभयो। राणाशासनको अन्त्यपछि वि.सं. २०१० सालमा मातृकाप्रसाद कोइरालाको नेतृत्वमा गठन भएको सरकारमा उहाँ गृहमन्त्री हुनुहुन्थ्यो। प्रधानमन्त्रीका रूपमा उहाँको कार्यकालमा प्रशासनिक सुधारका महत्वपूर्ण काम भए। निजामती सेवा ऐन, २०१३ जारी हुनु, नेपाल राष्ट्र बैंकको स्थापना (वि.सं. २०१३ वैशाख १४) र नेपाली साहित्य कला एकेडेमीको स्थापना (वि.सं. २०१४ असार ९) त्यस अवधिका महत्वपूर्ण संस्थागत विकास हुन्। उहाँको सरकारले योजनाबद्ध विकास र प्रशासनिक सुधारका पहललाई अघि बढायो। माघ १६ लाई सहिद दिवसका रूपमा मनाउने निर्णय पनि उहाँकै प्रधानमन्त्रीकालमा भएको थियो। माघ १० देखि १६ सम्म सहिद सप्ताह मनाउने परम्परासँग पनि उहाँको कार्यकाल जोडिन्छ। प्रजातन्त्रका सेनानी टंकप्रसाद आचार्यको वि.सं. २०४९ वैशाख ११ गते निधन भयो। आज उहाँ हामीमाझ हुनुहुन्न, तर उहाँले प्रज्वलित गर्नुभएको राष्ट्रियताको दियो अझै निभेको छैन। त्यसलाई जीवित राख्ने जिम्मेवारी सम्पूर्ण नेपाली जनताको हो।"
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
                  टंकप्रसाद आचार्य <br /> संक्षिप्त परिचय
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