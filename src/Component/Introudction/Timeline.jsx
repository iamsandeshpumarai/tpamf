import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const dateData = [
    {
      date: "१९६९",
      event: "१९६९ जन्म दिन",
      Desc: "२०५१ कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ ।",
      img: "https://tp-acharya.terracecafe.com.np/upload/images/timelines/17084994396901027248_4a2b8976ed_b_20191019145238.jpg"
    },
    {
      date: "२०५१",
      event: "२०५१ कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ ।",
      Desc: "किमव कमवव कमविप कमव कमपव कबमाव यकषमफलभ बकयमषअवफधभ कबयमअषभफ यवकअयभ यकभअय यकभय यकभफ ।",
      img: "https://tp-acharya.terracecafe.com.np/upload/images/timelines/17084994621.%20Tanka%20Prasad%20Acharyako%20Janma%20ghar.jpg"
    },
    {
      date: "१९६९",
      event: "१९६९ जन्म दिन",
      Desc: "२०५१ कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ ।",
      img: "https://tp-acharya.terracecafe.com.np/upload/images/timelines/170676602317065118182022-07-16.jpg"
    },
    {
      date: "२०५०",
      event: "२०५० कमबाप बकमाविक बकमापव वकमा वकमा ।",
      Desc: "पिकवअयषभफ अयषभ अयकभ यकषभवअअ य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ।",
      img: "https://tp-acharya.terracecafe.com.np/upload/images/timelines/1706766500free-photo-of-cames-in-the-desert.jpeg"
    },
    {
      date: "२०५२",
      event: "२०५२ कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ ।",
      Desc: "पिकवअयषभफ अयषभ अयकभ यकषभवअअ य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ।",
      img: "https://tp-acharya.terracecafe.com.np/upload/images/timelines/170676653917065118182022-07-16.jpg"
    }
  ];

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      gsap.fromTo(item, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center py-20 px-4 font-sans"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://tpamf.org.np/assets/tpbanner1-TOQj9Mr-.jpg')` 
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/30 hidden md:block"></div>

        {dateData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              ref={el => itemsRef.current[index] = el}
              className={`mb-24 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Text Side */}
              <div className="w-full md:w-5/12">
                <div className={`bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-yellow-500 font-bold text-3xl mb-2 block">{item.date}</span>
                  <h3 className="text-white text-xl font-bold mb-3 leading-tight">{item.event}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.Desc}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative flex items-center justify-center w-full md:w-2/12 my-8 md:my-0">
                <div className="h-6 w-6 rounded-full bg-yellow-500 border-4 border-gray-900 z-10 shadow-[0_0_15px_rgba(234,179,8,0.8)]"></div>
              </div>

              {/* Image Side (Now opposite the text) */}
              <div className="w-full md:w-5/12">
                <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/5 h-64 w-full">
                  <img 
                    src={item.img} 
                    alt={item.event} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;