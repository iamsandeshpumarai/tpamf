import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Facebook, Twitter } from 'lucide-react';
import BoardMemeber1 from '../assets/images/team-member/team-img01.jpg'
import BoardMemeber2 from '../assets/images/team-member/team-img02.jpg'
import BoardMemeber3 from '../assets/images/team-member/team-img03.jpg'
import BoardMemeber4 from '../assets/images/team-member/team-img04.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ExecutiveBoard = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Amelia Daniel",
      role: "Chairman and founder",
      image: BoardMemeber1,
    },
    {
      id: 2,
      name: "Alex Mason",
      role: "Visual Media",
      image: BoardMemeber2,
    },
    {
      id: 3,
      name: "Michael Harper",
      role: "Sales Manager",
      image: BoardMemeber3,
    },
    {
      id: 4,
      name: "Jhon Martin",
      role: "Chairman and founder",
      image: BoardMemeber4,
    },
  ];

  return (
    <section className="py-0 my-0 bg-[#f3f7f9] font-['Poppins',_sans-serif] selection:bg-[#273a83] selection:text-white">
      {/* Container logic matching your CSS:
          - max-width: 100% on screens < 1200px
          - Specific max-widths for larger screens
      */}
      <div className="mx-auto px-[15px] w-full 
                      sm:max-w-[540px] 
                      md:max-w-[720px] 
                      lg:max-w-[960px] 
                      xl:max-w-[1140px] 
                      xl:px-0">
        
        {/* Section Title */}
        <div className="flex justify-center mb-10 pt-16">
          <div className="text-center w-full md:w-2/3 lg:w-1/2">
            <h5 className="text-[#273a83] font-semibold uppercase tracking-wider text-sm mb-2">
              Current Board
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529]">
              कार्यसमिति - (2078-2082)
            </h2>
          </div>
        </div>

        {/* Team Slider */}
        <div className="pb-20">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={true}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="executive-swiper"
          >
            {boardMembers.map((member) => (
              <SwiperSlide key={member.id}>
                {/* featured-imagebox-team style2 */}
                <div className="group relative overflow-hidden bg-white mb-5 shadow-sm">
                  
                  {/* Image Thumbnail */}
                  <div className="featured-thumbnail relative aspect-[3/4]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>

                  {/* Overlay (ttm-box-view-overlay) 
                      This box appears on hover or stays at bottom depending on your specific CSS.
                      Below is the implementation of the "Overlay" style found in your code.
                  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#273a83] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    
                    {/* Social Links */}
                    <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ul className="flex space-x-3">
                        <li>
                          <a href="#" className="w-8 h-8 rounded-full bg-white text-[#273a83] flex items-center justify-center hover:bg-[#212529] hover:text-white transition-colors">
                            <Facebook size={14} />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="w-8 h-8 rounded-full bg-white text-[#273a83] flex items-center justify-center hover:bg-[#212529] hover:text-white transition-colors">
                            <Twitter size={14} />
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Content Section inside Overlay */}
                    <div className="featured-content text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h5 className="text-lg font-bold">
                        <a href="team-details.html" className="hover:text-gray-200">
                          {member.name}
                        </a>
                      </h5>
                      <p className="text-sm opacity-90 uppercase tracking-tighter">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global Swiper Customization to match Owl-Carousel Nav */}
      <style jsx global>{`
        .executive-swiper .swiper-button-next,
        .executive-swiper .swiper-button-prev {
          width: 45px;
          height: 45px;
          background-color: #273a83;
          color: white;
          border-radius: 4px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .executive-swiper:hover .swiper-button-next,
        .executive-swiper:hover .swiper-button-prev {
          opacity: 1;
        }

        .executive-swiper .swiper-button-next:after,
        .executive-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .executive-swiper .swiper-button-next:hover,
        .executive-swiper .swiper-button-prev:hover {
          background-color: #212529;
        }
      `}</style>
    </section>
  );
};

export default ExecutiveBoard;