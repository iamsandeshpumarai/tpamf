import React from 'react';

const BasicIntro = ({ data ,title={},reverse=false}) => {
  // Safety check to prevent errors if data is undefined
  if (!data) return null;
console.log(title)
  return (
    <section className="bg-[#FDFDFD] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Date/Name Header - Only renders if data.date exists */}
        {data.headerdata && (
          <div className={`mb-8 `}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C26] inline-block border-b-4 border-[#0B0C26] pb-2">
              {data.headerdata}
            </h2>
          </div>
        )}

        <div className={`flex flex-col lg:flex-row gap-12 items-start ${reverse ? "lg:flex-row-reverse":"lg:flex-row"}`}>
          
          {/* Left Side: Image (Sticky Container) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={data.image} 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side: Information Paragraphs */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-8">
              {data.information?.map((para, index) => (
              <>
              {title && index==1 ? (<h1 className='text-2xl font-bold'>{title.title1}</h1>)  : (<h1 className='text-2xl font-bold'>{title.title2}</h1>)}
                <p 
                  key={index} 
                  className="text-[#333] leading-loose text-lg text-justify"
                  >
                  {para}
                </p>
                  </>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BasicIntro;