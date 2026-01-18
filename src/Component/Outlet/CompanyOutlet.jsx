import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info, Calendar, Briefcase, Users } from 'lucide-react';

const CompanyOutlet = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Organizational Profile', id: 'profile', path: '/company', icon: Info },
    { name: 'Workshop and Seminar', id: 'workshops', path: '/company/workshop-and-seminar', icon: Calendar },
    { name: 'Professional Rostrum', id: 'rostrum', path: '/company/Professional-rostrum', icon: Briefcase },
    { name: 'Board and Advisory Panel Members', id: 'members', path: '/company/current-board-and-advisory-panel-members', icon: Users },
  ];

  return (
    <div className="relative max-w-8xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-16 px-6 lg:px-12 py-10 bg-white">
      
      {/* LEFT: MAIN CONTENT AREA (Outlet) */}
      <main className="flex-1 w-full min-h-screen">
        <Outlet />
      </main>

      {/* RIGHT: YOUR CUSTOM STICKY NAVIGATION */}
      {/* - hidden on small screens, shown as sticky on lg 
          - md:sticky + md:top-10 makes it follow the content
      */}
      <aside className="hidden lg:block lg:w-1/4 sticky top-10 self-start">
        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-8">
            Explore
          </h3>
          
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-all group flex items-start gap-3 
                    ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                >
                  {/* The dot indicator from your design */}
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full transition-all shrink-0
                    ${isActive 
                      ? 'bg-blue-600 scale-125 shadow-[0_0_8px_rgba(37,99,235,0.5)]' 
                      : 'bg-gray-300 group-hover:bg-blue-400 group-hover:scale-110'}`} 
                  />
                  
                  <span className="leading-tight">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer of the Sidebar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">
              Headquarters
            </p>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              TPAMF Foundation <br />
              Kupandole , Kathmandu, Nepal
            </p>
            
            
          </div>
        </div>
      </aside>

      {/* MOBILE NAVIGATION BAR (Shown only on small screens) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-around items-center z-50">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.id} to={link.path} className={`${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
              <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default CompanyOutlet;