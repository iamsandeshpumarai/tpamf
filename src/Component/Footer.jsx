import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Calendar, ChevronRight } from 'lucide-react';
import backgroundImage from '../assets/images/download.jpg'
import recentPost1 from '../assets/images/blog/01.jpg'
import recentPost2 from '../assets/images/blog/02.jpg'
const Footer = () => {
  const quickLinks = [
    { name: "About TPA", link: "#" },
    { name: "TPA Achievements", link: "#" },
    { name: "TPA Prime Ministry", link: "#" },
    { name: "TPA Related Books", link: "#" },
  ];

  const tpamfLinks = [
    { name: "About Us", link: "#" },
    { name: "Board", link: "#" },
    { name: "Regular Program", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const recentPosts = [
    {
      id: 1,
      image: recentPost1,
      date: "May 01, 2019",
      title: "Successful Growth In Business 2018",
    },
    {
      id: 2,
      image: recentPost2,
      date: "May 03, 2019",
      title: "Achieving Best Business Awards",
    },
  ];

  return (
    <footer 
      className={`relative bg-cover bg-center bg-no-repeat bg-[url(${backgroundImage})] `}
      
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-[#0b0c26]/95 z-0"></div>

      <div className="relative z-10">
        {/* Main Widget Area */}
        <div className="w-full lg:w-[80vw] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Widget 1: About */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#273a83]">
                About TPA
              </h3>
              <p className="text-white/70 text-sm leading-loose">
                नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यको योगदानलाई चिरस्थायी बनाउन यो प्रतिष्ठान समर्पित छ।
              </p>
              
              {/* Social Icons with Pop-out Tooltip */}
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook size={16} />, name: 'Facebook' },
                  { icon: <Twitter size={16} />, name: 'Twitter' },
                  { icon: <Linkedin size={16} />, name: 'LinkedIn' },
                  { icon: <Instagram size={16} />, name: 'Instagram' }
                ].map((social, i) => (
                  <div key={i} className="group relative flex flex-col items-center">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#273a83] hover:border-[#273a83] transition-all duration-300 text-white"
                    >
                      {social.icon}
                    </a>
                    {/* Pop-out Tooltip */}
                    <span className="absolute bottom-full mb-3 px-3 py-1 bg-[#273a83] text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#273a83]"></span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#273a83]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.link} className="group text-sm text-white hover:text-[#273983] transition-all duration-300 flex items-center">
                      <span className="text-[#273a83] font-bold mr-2 tracking-tighter opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">»»</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: TPAMF */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#273a83]">
                TPAMF
              </h3>
              <ul className="space-y-3">
                {tpamfLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.link} className="group text-sm text-white hover:text-[#273983] transition-all duration-300 flex items-center">
                      <span className="text-[#273a83] font-bold mr-2 tracking-tighter opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">»»</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 4: Latest Activities */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#273a83]">
                Latest Activities
              </h3>
              <ul className="space-y-6">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex items-center space-x-4">
                    <img 
                      src={post.image} 
                      alt="activity" 
                      className="w-16 h-16 object-cover rounded shadow-lg border border-white/10"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[white] flex items-center">
                        <Calendar size={12} className="mr-1" /> {post.date}
                      </span>
                      <a href="#" className="text-sm text-white hover:text-[#273a83] font-medium leading-tight block transition-colors">
                        {post.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar Integration */}
        <CopyrightBar />
      </div>
    </footer>
  );
};

const CopyrightBar = () => {
  return (
    <div className="bg-black/30 py-8 border-t border-white/5">
      <div className="w-full lg:w-[80vw] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
          <div className="text-white/50 text-sm tracking-wide">
            Copyright © 2025&nbsp;
            <a 
              href="#" 
              className="text-white hover:text-[#273a83] transition-colors duration-300 font-medium"
            >
              Tanka Prasad Acharya Memorial Foundation
            </a>
            . All rights reserved.
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;