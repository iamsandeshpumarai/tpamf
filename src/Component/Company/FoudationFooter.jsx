import React from 'react';
import { Building2, GraduationCap, Gavel, Users } from 'lucide-react';
import {Link} from 'react-router-dom'
const FoundationFooter = () => {
  const links = [
    {
      title: "Organizational Profile",
      description: "Explore our history, mission, and the impact we make globally.",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      href: "/company",
    },
    {
      title: "Workshop and Seminar",
      description: "Join our upcoming educational sessions and professional workshops.",
      icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
      href: "/company/workshop-and-seminar",
    },
    {
      title: "Professional Rostrum",
      description: "Access our dedicated platform for professional standards and discourse.",
      icon: <Gavel className="w-6 h-6 text-amber-600" />,
      href: "/company/Professional-rostrum",
    },
    {
      title: "Board & Advisory Panel",
      description: "Meet the experts and leaders shaping our strategic vision.",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      href: "/company/current-board-and-advisory-panel-members",
    },
  ];

  return (
    <section className="w-full py-12 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Foundation Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <Link 
              key={index}
              to={item.href}
              className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 rounded-lg bg-gray-50 w-fit group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationFooter;