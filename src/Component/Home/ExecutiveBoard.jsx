import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const ExecutiveBoard = () => {
 
  const boardMembers = [
    {
      id: 1,
      name: "Mr Sushil Pyakurel",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495153Mr%20Sushil%20Pyakurel.jpg",
    },
    {
      id: 2,
      name: "Ms Shanta Manabi",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495286Shanta%20manabi%20photo.jpg",
    },
    {
      id: 3,
      name: "Dr kundan Aryal",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495359Dr%20kundan%20Aryal.jpg",
    },
    {
      id: 4,
      name: "Mr Yagya Raj Thapa",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495445CROPPED-DV_Photo_Yagya.jpg",
    },
    {
      id: 5,
      name: "Mr Netra Bhadur Thapa",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495676netra%20bahadur.jpg",
    },
    {
      id: 6,
      name: "Dr. Shova Pokhrel",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495851shova.jpg",
    },
    {
      id: 7,
      name: "Mr. Baburam Acharya",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495925baburam%20Acharya.jpg",
    },
    {
      id: 8,
      name: "Ms Shanti Basnet Adhikari",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495987Shanti%20Adhikari%20-%20Photo.jpg",
    },
    {
      id: 9,
      name: "Mr Basudev Dahal",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496095Basudev%20Dahal.jpg",
    },
    {
      id: 10,
      name: "Mr. Baijanath Chaudhary",
      role: "Chairperson",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496749Screenshot_20211112-152044_Facebook%20(1).jpg",
    },
    {
      id: 11,
      name: "Mr Birbhadra Acharya",
      role: "Current Board Member",
      image: "http://tp-acharya.terracecafe.com.np/upload/images/teams/1708496846Birbhadra%20Acharya.jpg",
    },
    {
      id: 12,
      name: "Govinda Prasad Dulal",
      role: "Current Board Member",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496961govinda.jpg",
    },
    // Add 5th member to see the arrows appear
  ];

  // Logic: Hide navigation arrows and pagination if there are 4 or fewer members
  const showNavigation = boardMembers.length > 4;

  return (
    <section className="py-20 bg-[#f8fafc] font-['Poppins',_sans-serif]">
      <div className="container mx-auto px-4 lg:max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-gray-200">
          <div>
            <h5 className="text-[#273a83] font-bold uppercase tracking-[0.2em] text-xs mb-2 flex items-center">
              <span className="w-8 h-[2px] bg-[#273a83] mr-3"></span>
              Current Board (2078-2082)
            </h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c]">
              कार्यसमिति
            </h2>
          </div>
          
          {/* 1. View All Member at the right side */}
          <div className="mt-4 md:mt-0" >
            <button className="flex items-center gap-2 text-[#273a83] font-bold text-sm hover:gap-4 transition-all duration-300 group">
          <Link to='/organization/all-teams' >View All Members</Link>     
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Team Slider Container */}
        <div className="relative px-2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={showNavigation}
            // 4. Autoplay pauses on hover by default, disableOnInteraction: false keeps it alive after clicking
            autoplay={showNavigation ? { 
              delay: 3000, 
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
              1280: { slidesPerView: boardMembers.length < 5 ? boardMembers.length : 4 },
            }}
            className="pb-12"
          >
            {boardMembers.map((member, index) => (
              // Using unique key (index + id) to avoid duplicates bug
              <SwiperSlide key={`${member.id}-${index}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 h-full flex flex-col p-4">
                  
                  {/* 2. Smaller Image Container (p-4 and max-w scale down the visual size) */}
                  <div className="relative overflow-hidden rounded-lg aspect-square mb-4 bg-gray-50 mx-auto w-full max-w-[240px]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={member.image}
                      alt={member.name}
                    />
                    
                    {/* View Profile Hover Overlay */}
                    <div className="absolute inset-0 bg-[#273a83]/70 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button className="px-4 py-2 bg-white text-[#273a83] rounded-md font-bold text-[11px] flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <Link to='/organization/all-teams'>View Profile</Link> <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="text-center">
                    <h5 className="text-md font-bold text-gray-900 group-hover:text-[#273a83] transition-colors duration-300 leading-tight">
                      {member.name}
                    </h5>
                    <p className="text-[#273a83] text-[9px] font-bold mt-2 uppercase tracking-widest bg-[#273a83]/5 py-1 px-3 rounded-full inline-block">
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
              <div className="custom-prev absolute top-[40%] -left-4 z-10 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#273a83] cursor-pointer hover:bg-[#273a83] hover:text-white transition-all duration-300 hidden xl:flex border border-gray-100">
                <ArrowRight className="rotate-180" size={20} />
              </div>
              <div className="custom-next absolute top-[40%] -right-4 z-10 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#273a83] cursor-pointer hover:bg-[#273a83] hover:text-white transition-all duration-300 hidden xl:flex border border-gray-100">
                <ArrowRight size={20} />
              </div>
            </>
          )}

          {/* Pagination dots only if needed */}
          {showNavigation && (
            <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 4px;
          background: #273a83;
        }
      `}</style>
    </section>
  );
};

export default ExecutiveBoard;