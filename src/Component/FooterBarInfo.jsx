import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const FooterInfoBar = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Our Address",
      desc: "Kupondole, Lalitpur, Nepal",
      icon: <MapPin className="text-[#273a83] mb-2" size={24} />,
    },
    {
      id: 2,
      title: "Call Us",
      desc: "+९७७-०१५४२२६७९",
      icon: <Phone className="text-[#273a83] mb-2" size={24} />,
    },
    {
      id: 3,
      title: "Email Us",
      desc: "tpamf93@gmail.com",
      icon: <Mail className="text-[#273a83] mb-2" size={24} />,
    },
  ];

  return (
    <div className="w-full bg-[#F5FAFF] font-['Poppins',_sans-serif] selection:bg-[#273a83] selection:text-white">
      {/* .first-footer .footer-box border logic */}
      <div className="border-t border-b border-[#e5eef7]">
        
        {/* Container and Row (no-gutters means mx-0 on the row) */}
        <div className="flex flex-wrap mx-0">
          
          {contactInfo.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex-1 min-w-[300px] md:w-1/3 py-3 px-2 text-center transition-all duration-300 
                ${index !== contactInfo.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#e5eef7]' : ''}`}
            >
              {/* featured-box */}
              <div className="flex flex-col items-center justify-center">
                {/* Icon wrapper (optional but matches the visual style) */}
                <div className="p-1 bg-blue-50 rounded-full mb-3">
                  {item.icon}
                </div>

                <div className="featured-content">
                  <div className="featured-title">
                    <h5 className="text-[#212529] font-bold text-lg mb-1 ">
                      {item.title}
                    </h5>
                  </div>
                  <div className="featured-desc">
                    <p className="text-[#8d9297] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FooterInfoBar;