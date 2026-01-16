import React from 'react';
import { 
  ChartBarIcon, 
  PencilSquareIcon, 
  ChatBubbleBottomCenterTextIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Organizational Profile",
    desc: "Since its establishment in 1993, the Foundation has evolved into a research and advocacy forum for leaders of various socio-political convictions.",
    icon: <ChartBarIcon className="w-12 h-12" />,
    link: "#"
  },
  {
    title: "Workshop and Seminar",
    desc: "We conduct public workshop and seminars to raise awareness on important social, educational, and community issues.",
    icon: <PencilSquareIcon className="w-12 h-12" />,
    link: "#"
  },
  {
    title: "Professional Rostrum",
    desc: "Our rostrum encourages individuals to express ideas, build confidence, and contribute to meaningful social discussions.",
    icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12" />,
    link: "#"
  },
  {
    title: "Board and Advisory Panel",
    desc: "Our board and advisory panel consist of committed professionals who guide our mission with integrity and vision.",
    icon: <UserGroupIcon className="w-12 h-12" />,
    link: "#"
  }
];

const FeaturedBoxes = () => {
  return (
    /* CHANGE 1: Use w-full instead of w-screen to prevent right-side overflow.
       CHANGE 2: Added py-16 (padding) instead of negative margin to stop overlap.
    */
    <section className="w-full bg-[#f3f7f9] py-16 px-4 sm:px-6 lg:px-8 font-['Poppins',_sans-serif]">
      
      {/* CHANGE 3: max-w-7xl and mx-auto ensures the content stays 
         centered and doesn't stretch to the edges on big screens.
      */}
      <div className="max-w-full mx-auto">
        
        {/* CHANGE 4: Removed -mt-24. 
           The grid now starts exactly where the section begins.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100">
          
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 group transition-all duration-300 hover:bg-gray-50 flex flex-col
                ${index !== features.length - 1 ? 'lg:border-r border-gray-100' : ''} 
                ${index < 3 ? 'border-b lg:border-b-0 border-gray-100' : ''}`}
            >
              {/* Icon */}
              <div className="text-[#273a83] mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h5 className="text-lg font-bold text-[#212529] mb-4 group-hover:text-[#273a83] transition-colors">
                  {item.title}
                </h5>
                <p className="text-[#8d9297] text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Read More Link */}
              <div className="mt-auto">
                <a 
                  href={item.link} 
                  className="text-xs font-bold text-[#212529] uppercase tracking-wider inline-flex items-center group/btn hover:text-[#273a83] transition-colors"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedBoxes;