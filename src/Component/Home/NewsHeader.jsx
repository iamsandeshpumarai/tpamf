import React from 'react';

const NewsHeader = () => {
  return (
    <section className="py-12 bg-[#f3f7f9] font-['Poppins',_sans-serif] selection:bg-[#273a83] selection:text-white">
      <div className="mx-auto px-[15px] w-full 
                      sm:max-w-[540px] 
                      md:max-w-[720px] 
                      lg:max-w-[960px] 
                      xl:max-w-[1200px]">
        
        {/* Equivalent to row + col-lg-12 */}
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px]">
            
            {/* section-title style2 */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-gray-200 pb-8 transition-all duration-300">
              
              {/* Title Header */}
              <div className="lg:w-7/12">
                <div className="mb-2">
                  <h5 className="text-[#273a83] font-semibold uppercase tracking-widest text-sm inline-block relative after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-[#273a83] after:top-1/2 after:-right-12">
                    हाम्रा पछिल्ला गतिविधिहरू
                  </h5>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212529] leading-tight mt-4">
                  हाम्रा पछिल्ला गतिविधिहरू पढ्नुहोस्, <br className="hidden md:block" />  र समाचार
                </h2>
              </div>

              {/* Title Description */}
              <div className="mt-6 lg:mt-0 lg:w-4/12">
                <p className="text-[#8d9297] text-[15px] leading-relaxed border-l-2 lg:border-l-4 border-[#273a83] pl-6 py-2 italic"> 
हाम्रा पछिल्ला गतिविधिहरू र ताजा समाचारहरूको सङ्ग्रहमा तपाईंलाई स्वागत छ। यहाँ तपाईंले हाम्रा नयाँ परियोजनाहरू, हालै सम्पन्न भएका कार्यक्रमहरू र संस्थाका महत्त्वपूर्ण प्रगतिहरूको बारेमा विस्तृत जानकारी प्राप्त गर्न सक्नुहुनेछ। हामीले गरिरहेका कार्यहरू र भविष्यका योजनाहरूबारे सधैं अपडेट रहन हामीसँग जोडिनुहोला।
                </p>
              </div>

            </div>
            {/* End section-title */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeader;