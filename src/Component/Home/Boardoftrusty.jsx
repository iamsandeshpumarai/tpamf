import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const Boardoftrusty = () => {
 const navigate =  useNavigate()
  const boardMembers = [
    {
      id: 1,
      name: "Mr. Arbinda Rimal",
      role: "Former Chairperson",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494792images.jpg",
    },
    {
      id: 2,
      name: "Mr. Nilambar Acharya",
      role: "Board Of Trusty",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494682Nilamber-Acharya.jpg",
    },
    {
      id: 3,
      name: "Dr. Meena Acharya",
      role: "Board Of Trusty",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494452download%20(1).jpg",
    },
    
  ];

  // Logic: Hide arrows if members are less than 5
  const showNavigation = boardMembers.length >= 5;

  return (
    <section className="py-24 bg-[#f8fafc] font-['Poppins',_sans-serif]">
      <div className="container mx-auto px-4 lg:max-w-7xl">
        
        {/* Section Header - View All at right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h5 className="text-[#273a83] font-bold uppercase tracking-[0.2em] text-sm mb-3 flex items-center">
              <span className="w-10 h-[2px] bg-[#273a83] mr-3"></span>
              Board of Trusty
            </h5>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] leading-tight">
              संरक्षक
            </h2>
          </div>
          
          {/* 1. View All Member at the right side */}
          <div className="mt-6 md:mt-0" onClick={()=>{navigate('/organization/all-teams')}} >
            <button className="flex items-center gap-2 text-[#273a83] font-bold hover:gap-4 transition-all duration-300 group">
              View All Members <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Team Slider Container */}
        <div className="relative px-2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={showNavigation}
            // 4. Disable/Pause when hovering on the board/image
            autoplay={showNavigation ? { 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            } : false}
            navigation={showNavigation ? {
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            } : false}
            pagination={showNavigation ? { clickable: true, el: '.custom-pagination' } : false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: boardMembers.length < 5 ? boardMembers.length : 5 },
            }}
            className="pb-16"
          >
            {boardMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col p-6">
                  
                  {/* 2. Responsive smaller image */}
                  <div className="relative overflow-hidden rounded-xl aspect-square mb-6 bg-gray-50 max-w-[280px] mx-auto w-full">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={member.image}
                      alt={member.name}
                    />
                    
                    {/* View Profile Hover Overlay */}
                    <div className="absolute inset-0 bg-[#273a83]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button className="px-5 py-2.5 bg-white text-[#273a83] rounded-lg font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-gray-100">
                        View Profile <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="text-center pb-2">
                    <h5 className="text-lg font-bold text-gray-900 group-hover:text-[#273a83] transition-colors duration-300">
                      {member.name}
                    </h5>
                    <p className="text-[#273a83] text-[10px] font-bold mt-2 uppercase tracking-widest bg-[#273a83]/5 py-1.5 px-4 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 3. Hide arrow buttons if less than 5 members */}
          {showNavigation && (
            <>
              <div className="custom-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center text-[#273a83] cursor-pointer hover:bg-[#273a83] hover:text-white transition-all duration-300 hidden xl:flex border border-gray-100">
                <ArrowRight className="rotate-180" size={22} />
              </div>
              <div className="custom-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center text-[#273a83] cursor-pointer hover:bg-[#273a83] hover:text-white transition-all duration-300 hidden xl:flex border border-gray-100">
                <ArrowRight size={22} />
              </div>
            </>
          )}

          {/* Custom Pagination */}
          <div className={`custom-pagination mt-8 flex justify-center gap-2 ${!showNavigation ? 'hidden' : ''}`}></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 4px;
          background: #273a83;
        }
      `}</style>
    </section>
  );
};

export default Boardoftrusty;