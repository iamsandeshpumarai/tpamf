import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import backgroundImage from '../assets/images/bg-image/row-bgimage-3.png';
import BoardMemeber1 from '../assets/images/team-member/team-img01.jpg'
import BoardMemeber2 from '../assets/images/team-member/team-img02.jpg'
import BoardMemeber3 from '../assets/images/team-member/team-img03.jpg'
import BoardMemeber4 from '../assets/images/team-member/team-img04.jpg'
import BoardMemeber5 from '../assets/images/team-member/team-img05.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Amelia Daniel", role: "Chairman and Founder", image: BoardMemeber1 },
    { id: 2, name: "Alex Mason", role: "Visual Media", image: BoardMemeber2 },
    { id: 3, name: "Michael Harper", role: "Sales Manager", image:  BoardMemeber3},
    { id: 4, name: "Jhon Martin", role: "Chairman and Founder", image: BoardMemeber4 },
    { id: 5, name: "Evelyn Jackson", role: "Visual Media", image: BoardMemeber5 },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden font-['Poppins',_sans-serif]">
      {/* Fixed Background Image Implementation */}
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-repeat pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h5 className="text-[#273a83] font-bold tracking-[3px] uppercase text-xs mb-3 flex items-center justify-center">
            <span className="w-8 h-[1px] bg-[#273a83] mr-3"></span>
            Board of Trustees
            <span className="w-8 h-[1px] bg-[#273a83] ml-3"></span>
          </h5>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b0c26]">
            संरक्षक
          </h2>
        </div>

        {/* Team Carousel */}
        <div className="relative px-4 sm:px-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="pb-4">
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  {/* Thumbnail Area */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-[#0b0c26]/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a href="#" className="w-9 h-9 bg-white text-[#273a83] rounded-full flex items-center justify-center hover:bg-[#273a83] hover:text-white transition-all shadow-lg">
                          <Facebook size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white text-[#273a83] rounded-full flex items-center justify-center hover:bg-[#273a83] hover:text-white transition-all shadow-lg">
                          <Twitter size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 text-center">
                    <h5 className="text-lg font-bold text-[#212529] group-hover:text-[#273a83] transition-colors duration-300">
                      {member.name}
                    </h5>
                    <p className="text-[#8d9297] text-xs mt-2 uppercase tracking-widest font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Small Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#273a83] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0b0c26] transition-all disabled:opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#273a83] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0b0c26] transition-all disabled:opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;