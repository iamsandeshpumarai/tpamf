import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Track which mobile submenu is open (null means none)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const NAV_DATA = [
    { label: "गृहपृष्ठ", href: "/" },
    { 
      label: "टंकप्रसाद आचार्य", 
      submenu: [
        { label: "टंकप्रसाद आचार्य", href: "/tankaprasadacharya" },
        { label: "संक्षिप्त जिवनी", href: "/tankaprasadacharya/time-line" },
        { label: "प्रधानमन्त्रित्वकाल", href: "/tankaprasadacharya/primeminister-period" },
        { label: "मुख्य मुख्य कामहरू", href: "/tankaprasadacharya/important-works" },
        
        
      ]
    },
    { 
      label: "टंकप्रसाद आचार्य स्मृति प्रतिष्ठान", 
      submenu: [
        { label: "परिचय", href: "/organization" },
        { label: "उद्देश्य", href: "/organization/goals" },
        { label: "कार्यसमिति", href: "/organization/all-teams" },
        { label: "व्यबस्थापन", href: "/organization/management" },
        { label: "पुस्तकालय", href: "/organization/library" },
        { label: "सङ्ग्रहालय", href: "/organization/museum" },
      ]
    },
    { 
      label: "प्रकासन", 
      submenu: [
        { label: "अनुसन्धात्मक", href: "/category" },
        { label: "टंकप्रसादसंग सम्बन्धित", href: "/category/TPA-Related" },
        { label: "इतिहास, रास्त्रियता लगायत अन्य", href: "/category/History-and-other" },
      ]
    },
    { 
      label: "गतिविधीहरु", 
      submenu: [
        { label: "नियमित कार्यक्रम", href: "/activity" },
        { label: "छात्रवृति र बिद्यालय भौतिक संरचना निर्माण एबम मर्मत", href: "/activity/scholarship-and-infrastructure" },
        { label: "समसामयिक बिषयमा छलफल कार्यक्रम", href: "/activity/contemporary-discussions" },
      ]
    },
    { 
      label: "सुचना/विज्ञप्ति", 
      submenu: [
        { label: "विज्ञप्ति", href: "/notification" },
        { label: "सुचना", href: "/notification/notice" },
        
      ]
    },
   
    { 
      label: "ग्यालेरी", 
      submenu: [
        { label: "फोटोहरु", href: "/gallery" },
        { label: "भिडियोहरु", href: "/gallery/videos" },
  
      ]
    },
    
  ];

  const toggleMobileSubmenu = (idx) => {
    setOpenMobileSubmenu(openMobileSubmenu === idx ? null : idx);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-[100] font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[9vh]">
          
          {/* 1. Mobile Toggle (Hamburger) */}
          <div className="flex lg:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#193283] p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />}
              </svg>
            </button>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex flex-grow justify-center h-full">
            <ul className="flex space-x-8 text-[#212529] h-full">
              {NAV_DATA.map((item, idx) => (
                <li key={idx} className="relative group h-full flex items-center">
                  <div className="flex items-center px-1 cursor-pointer group-hover:text-[#193283] transition-colors duration-300 font-bold text-[14px]">
                    {item.submenu ? (
                      <span className="flex items-center">
                        {item.label}
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" strokeWidth="2" />
                        </svg>
                      </span>
                    ) : (
                      <Link to={item.href}>{item.label}</Link>
                    )}
                  </div>

                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#193283] transition-all duration-300 group-hover:w-full"></span>

                  {/* Submenu Dropdown - Fixed position to top-full */}
                  {item.submenu && (
                    <ul className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border-t-2 border-[#193283] shadow-xl py-2 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      {item.submenu.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a href={sub.href} className="flex items-center px-4 py-3 text-sm text-gray-500 hover:text-black hover:bg-gray-50 transition-all duration-200 group/item">
                            {/* The "-" mark on hover */}
                            <span className="opacity-0 w-0 group-hover/item:opacity-100 group-hover/item:w-4 transition-all duration-200 font-bold">-</span>
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Right Side: Contact Button */}
          <div className="flex-shrink-0">
            <Link to="/contact" className="text-black border border-black hover:text-white px-6 py-2.5 font-bold hover:bg-black transition-all duration-500 shadow-md active:scale-95 inline-block">
              सम्पर्क
            </Link>
          </div>

        </div>
      </div>

      {/* 4. Mobile Menu Drawer (Accordion Style) */}
      <div className={`lg:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 space-y-4">
          {NAV_DATA.map((item, idx) => (
            <div key={idx} className="border-b border-gray-50 pb-2">
              <div 
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => item.submenu ? toggleMobileSubmenu(idx) : null}
              >
                <Link
                  to={item.submenu ? "#" : item.href} 
                  className="text-lg font-bold text-[#193283]"
                  onClick={(e) => item.submenu && e.preventDefault()}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${openMobileSubmenu === idx ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" />
                  </svg>
                )}
              </div>
              
              {/* Mobile Submenu Accordion */}
              {item.submenu && (
                <div className={`pl-4 flex flex-col space-y-3 transition-all duration-300 overflow-hidden ${openMobileSubmenu === idx ? 'max-h-96 py-2' : 'max-h-0'}`}>
                  {item.submenu.map((sub, sIdx) => (
                    <a key={sIdx} href={sub.href} className="text-gray-500 text-sm font-medium hover:text-black flex items-center">
                      <span className="mr-2 opacity-60">-</span> {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;