import GoalPicture from '../../assets/images/goal-side.jpg'

const OurGoals = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT Column: Image Area */}
          <div className="w-full lg:w-1/2 order-1"> {/* order-1 ensures it stays first on all screens */}
            <div className="relative group">
              {/* Animated Decorative Element (Now shifted to bottom-left for balance) */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#273a83] rounded-sm transition-all duration-500 group-hover:-bottom-4 group-hover:-left-4"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl border-white border-[8px]">
                <img 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110" 
                  src={GoalPicture} 
                  alt="Our Goals" 
                />
              </div>

              {/* Decorative Circle Accent */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#273a83]/10 rounded-full -z-0"></div>
            </div>
          </div>

          {/* RIGHT Column: Text Content */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="space-y-6">
              {/* Section Title */}
              <div className="relative">
                <h5 className="text-[#273a83] font-bold tracking-[3px] text-xs uppercase mb-3 flex items-center">
                  <span className="w-10 h-[2px] bg-[#273a83] mr-3"></span>
                  Our Goals
                </h5>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c26] leading-tight">
                  उद्देश्य
                </h2>
              </div>

              {/* Description Content */}
              <div className="text-[#8d9297] text-[15px] leading-[1.8] space-y-6">
                <p className="text-justify">
                  पूर्वप्रधानमन्त्री तथा जनआन्दोलनका पिताका रूपमा परिचित स्वर्गीय 
                  <span className="text-[#273a83] font-semibold"> टंकप्रसाद आचार्यको </span> 
                  नाममा स्थापना गरिएको यस संस्थाको मूल उद्देश्य नेपालको राष्ट्रिय सार्वभौमिकता, 
                  भौगोलिक अखण्डता, राष्ट्रिय स्वाभिमान तथा लोकतान्त्रिक मूल्य–मान्यताको संरक्षण र प्रवर्द्धन गर्नु हो। 
                  देशलाई सर्वतोमुखी विकासको दिशामा उन्मुख गराउन आवश्यक विचार, चेतना र राष्ट्रप्रेमलाई मजबुत बनाउने 
                  उद्देश्यले प्रतिष्ठान सक्रिय रूपमा कार्यरत छ।
                </p>

                <p className="text-justify">
                  यसै उद्देश्यलाई मूर्त रूप दिन संस्थाले भौतिक, वित्तीय तथा मानव संसाधनको प्रभावकारी उपयोग गर्दै 
                  विभिन्न क्रियाकलापहरू सञ्चालन गर्दै आएको छ। सामाजिक जागरण, शैक्षिक कार्यक्रम, राष्ट्रिय पहिचान संरक्षण, 
                  विवेकशील नागरिक निर्माण तथा सार्वजनिक सचेतना अभिवृद्धिमा योगदान पुर्‍याउन विविध पहल तथा 
                  कार्यक्रमहरू निरन्तर रूपमा अघि सारिन्छन्।
                </p>
                
                {/* Visual Highlight/Quote */}
                <div className="border-l-4 border-[#273a83] bg-[#f3f7f9] p-5 rounded-r-md shadow-sm">
                  <p className="text-sm italic text-[#5a5f64]">
                    लोकतान्त्रिक परम्पराको संवर्धन र राष्ट्रिय हितको रक्षा हाम्रो प्राथमिकता हो।
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurGoals;