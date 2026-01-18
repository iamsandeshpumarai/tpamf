import React, { useState } from 'react';
import { Search, User } from 'lucide-react'; // Optional: icon library

const ProfessionalRostrum = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const experts = [
    { name: "Dr. Meena Acharya", field: "Economist, Gender & Poverty Specialist" },
    { name: "Mr. Arvinda Rimal", field: "Political Science, Journalism" },
    { name: "Dr. Dwarika Nath Dhungel", field: "Public Administration, Local Governance" },
    { name: "Dr. Susan Acharya", field: "Education" },
    { name: "Prof. Som Prasad Gauchan", field: "Political Science" },
    { name: "Mr. Basanta Lohani", field: "Political Science, Journalism" },
    { name: "Mr. Nilamber Acharya", field: "Lawyer, Constitutionalist" },
    { name: "Prof. Dr. Rajesh Gautam", field: "History, Political Science" },
    { name: "Dr. Chaitnya Subba", field: "Social Scientist" },
    { name: "Prof. Dr. Shova Pokherel", field: "History" },
    { name: "Mr. Birbhadra Acharya", field: "Management, Micro-enterprise, Inclusion, Gender" },
    { name: "Mr. Govinda Dulal", field: "Nepali, Journalist" },
    { name: "Mr. Suresh Shrma", field: "Economics" },
    { name: "Vihash Satyal", field: "Statistician" },
    { name: "Ms. Pushpa Ghimire", field: "Economist" },
    { name: "Mr. Aditya Man Shrestha", field: "Journalist" },
    { name: "Dr. Chapala Koirala", field: "Educationist" },
    { name: "Bhabani Sapkota", field: "Nepali, Gender Studies" },
    { name: "Dr. Kundan Aryal", field: "Journalism" },
  ];

  // Filter logic
  const filteredExperts = experts.filter(expert => 
    expert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    expert.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Professional Rostrum</h2>
            <p className="text-slate-500">
              A multi-disciplinary pool of experts and scholars contributing to the Foundation’s research and advocacy initiatives.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input 
              type="text"
              placeholder="Search by name or expertise..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-3.5 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        {filteredExperts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Initial Avatar */}
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 font-bold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {expert.name.charAt(0)}
                  </div>
                  
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {expert.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {expert.field.split(',').map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400">No experts found matching your search.</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 text-center">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Professionals among the members, advisory board, and the professional rostrum are hired on a project basis as and when required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalRostrum;