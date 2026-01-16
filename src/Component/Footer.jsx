import React from 'react';
import { Facebook, Twitter, Instagram, Calendar, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import backgroundImage from '../assets/images/download.jpg';
import recentPost1 from '../assets/images/blog/01.jpg';
import recentPost2 from '../assets/images/blog/02.jpg';

const Footer = () => {
  const quickLinks = [
    { name: "हाम्रो बारेमा", link: "/" },
    { name: "उद्देश्य", link: "/organization/goals" },
    { name: "विज्ञप्ति", link: "/notification" },
    { name: "ग्यालेरी", link: "/gallery" },
    { name: "सुचना", link: "/notification/notice" },
  ];

  const recentPosts = [
    {
      id: 1,
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/17122304461704610513tp.jpg",
      date: "04/04/2024",
      title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए",
    },
    {
      id: 2,
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/1712230374yuPhuoDBej0c9K9qvvOgfLIxNJ0carXlxMT.jpg",
    date:"04/04/2024",

      title: "राष्ट्रिय नर्स दिवसः नसर्हरू व्यवसायिक सुरक्षाका लागि अझै संघर्षरत",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, name: 'Facebook', color: '#1877F2' },
    { icon: <Twitter size={18} />, name: 'Twitter', color: '#1DA1F2' },
    { icon: <Instagram size={18} />, name: 'Instagram', color: '#E4405F' }
  ];

  return (
    <footer className="relative bg-[#0b0c26] text-white font-['Poppins',_sans-serif] overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c26]/95 to-[#0b0c26] z-0"></div>

      <div className="relative z-10">
        {/* Main Widget Area */}
        <div className="w-full lg:w-[80vw] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Widget 1: About */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-[#273a83] pl-4 uppercase tracking-wider text-sm">About TPA</h3>
                <p className="text-white/70 text-sm leading-loose">
                  नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यको योगदानलाई चिरस्थायी बनाउन यो प्रतिष्ठान समर्पित छ।
                </p>
              </div>

              {/* Social Icons with Pop-up Tooltips */}
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <div key={i} className="group relative flex flex-col items-center">
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#273a83] hover:border-[#273a83] transition-all duration-300 text-white hover:shadow-[0_0_15px_rgba(39,58,131,0.5)]"
                    >
                      {social.icon}
                    </a>
                    
                    {/* Tooltip Popup */}
                    <div className="absolute bottom-full mb-3 px-3 py-1.5 bg-[#273a83] text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                      {social.name}
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#273a83]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-l-4 border-[#273a83] pl-4 uppercase tracking-wider text-sm">लिङ्कहरू</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.link} className="group text-sm text-white/60 hover:text-white transition-all flex items-center">
                      <ChevronRight size={14} className="mr-2 text-[#273a83] group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-l-4 border-[#273a83] pl-4 uppercase tracking-wider text-sm">सम्पर्क</h3>
              <ul className="space-y-5 text-sm text-white/70">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#273a83]" />
                  </div>
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#273a83]" />
                  </div>
                  <span>+977 1-XXXXXXX</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#273a83]" />
                  </div>
                  <span>info@tpa.org.np</span>
                </li>
              </ul>
            </div>

            {/* Widget 4: Activities */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-l-4 border-[#273a83] pl-4 uppercase tracking-wider text-sm">गतिविधिहरू</h3>
              <ul className="space-y-6">
                {recentPosts.map((post) => (
                  <li key={post.id} className="group flex items-center space-x-4">
                    <div className="relative overflow-hidden rounded shadow-md border border-white/10 shrink-0">
                      <img 
                        src={post.image} 
                        alt="" 
                        className="w-14 h-14 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#273a83] flex items-center mb-1">
                        <Calendar size={12} className="mr-1" /> {post.date}
                      </span>
                      <a href="#" className="text-xs text-white/80 hover:text-white font-medium leading-tight block truncate group-hover:text-clip group-hover:whitespace-normal transition-all">
                        {post.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-black/40 py-8 border-t border-white/5">
          <div className="w-full lg:w-[80vw] mx-auto px-6 text-center">
            <p className="text-white/40 text-xs tracking-widest uppercase">
              Copyright © 2026 — <span className="text-white">Tanka Prasad Acharya Memorial Foundation</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;