import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Activity, ArrowRight, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
const navigate = useNavigate()
  const posts = [
    {
      id: 1,
      title: "प्रसिद्ध मुटुरोग विशेषज्ञ डा. अरुण सायमी केएमसीमा आबद्ध",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/1712230304activity.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/17122304461704610513tp.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "सरकारी अस्पतालमा भन्दा केएमसीमा उपचार गर्न सस्ताे",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/1712229671act%202.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "सरकारले २० करोड दिएर पठाओस् ९१ दिनमा एमबिबिएस सुरु गरिदिन्छु’ सांसद सुनिल शर्मा",
      image: "https://tp-acharya.terracecafe.com.np/upload/images/activities/1712229410act.jpg",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-[#f3f7f9] font-['Poppins',_sans-serif]">
      <div className="mx-auto w-full px-4 lg:w-[85vw]">
        
        {/* Section Header */}
        <div className="mb-12">
          <h5 className="text-[#273a83] font-bold tracking-[3px] text-xs uppercase mb-2 flex items-center">
            गतिविधीहरु
            <span className="ml-3 w-12 h-[2px] bg-[#273a83]"></span>
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c26]">हाम्रा पछिल्ला गतिविधिहरू</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoHeight={false} // Ensures container doesn't jump
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="!h-auto"> {/* !h-auto allows slides to stretch equally */}
              <div onClick={()=>{
                  navigate(`/activity/activities/${encodeURIComponent(post.title)}`)
                }} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
                
                {/* Image Wrapper - Fixed Aspect Ratio */}
                <div  className="relative overflow-hidden aspect-[16/10] shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#273a83] text-xs font-bold flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    नयाँ अपडेट
                  </div>
                </div>

                {/* Content Area - Uses flex-grow to push footer down */}
                <div className="p-8 relative flex-grow flex flex-col justify-between">
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-8 z-20">
                    <div className="w-14 h-14 bg-[#273a83] text-white flex items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#1a285d]">
                      <Activity size={24} />
                    </div>
                  </div>

                  {/* Title Area - Fixed height (h-24) ensures consistent card sizing */}
                  <div className="mt-2 h-24 overflow-hidden">
                    <h5 className="text-xl font-bold leading-snug text-[#0b0c26] group-hover:text-[#273a83] transition-colors line-clamp-3">
                      {post.title}
                    </h5>
                  </div>

                  {/* Read More Footer */}
                  <div className="pt-6 border-t border-gray-50 flex justify-between items-center mt-6">
                    <a 
                      href={post.link} 
                      className="inline-flex items-center text-[#273a83] font-bold text-sm uppercase tracking-wider group/link"
                    >
                      थप पढ्नुहोस् 
                      <ArrowRight size={18} className="ml-2 transform transition-transform group-hover/link:translate-x-2" />
                    </a>
                    <ExternalLink size={16} className="text-gray-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Forces all slides in a row to match the tallest slide's height */
        .swiper-wrapper {
          display: flex !important;
        }
        .swiper-pagination-bullet-active {
          background: #273a83 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;