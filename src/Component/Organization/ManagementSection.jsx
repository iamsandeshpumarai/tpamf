import React from 'react';

const ManagementSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Title */}
        <div className="mb-12 border-l-8 border-[#0B0C26] pl-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0C26] tracking-tight">
            {data.title}
          </h1>
          <div className="h-1 w-24 bg-yellow-500 mt-2"></div>
        </div>

        {/* Content List */}
        <div className="space-y-12">
          {data?.para.map((item, index) => (
            <div 
              key={index} 
              className="cursor-pointer group p-6 md:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Index Number Circle */}
                <span className="hidden md:flex items-center justify-center min-w-[40px] h-[40px] rounded-full bg-[#0B0C26] text-white font-bold">
                  {index + 1}
                </span>

                <div className="flex-1">
                  {/* Subsection Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C26] mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-lg text-justify md:text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;