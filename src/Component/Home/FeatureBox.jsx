import React from 'react';
import { 
  BuildingLibraryIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Organizational Profile",
    desc: "A non-political Trust dedicated to carrying forward the democratic ideals of Late Tanka Prasad Acharya, focusing on national unity and social justice.",
    icon: <BuildingLibraryIcon className="w-12 h-12" />,
    link: "/company"
  },
  {
    title: "Workshop and Seminar",
    desc: "Facilitating high-level discussions on issues of national importance, from citizenship rights to social democracy and national sovereignty.",
    icon: <AcademicCapIcon className="w-12 h-12" />,
    link: "/company/workshop-and-seminar"
  },
  {
    title: "Professional Rostrum",
    desc: "A multi-disciplinary pool of experts specializing in Economics, Law, History, and Governance, contributing to evidence-based advocacy.",
    icon: <BriefcaseIcon className="w-12 h-12" />,
    link: "/company/Professional-rostrum"
  },
  {
    title: "Board and Advisory Panel",
    desc: "Governed by a distinguished assembly of trustees and professionals committed to preserving democratic values and people's rights.",
    icon: <UserGroupIcon className="w-12 h-12" />,
    link: "/company/current-board-and-advisory-panel-members"
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
                <Link 
                  to={item.link} 
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
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedBoxes;