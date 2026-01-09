import React from 'react';
import { Calendar, MessageCircle, Pencil, ArrowRight } from 'lucide-react';
import blogImage1 from '../assets/images/blog/10.jpg'
const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Successful Growth In Business 2018",
      date: "January 16, 2019",
      comments: "2",
      image: blogImage1,
      link: "#"
    },
    {
      id: 2,
      title: "How to Maximize Your Business Profits",
      date: "February 20, 2019",
      comments: "5",
      image: blogImage1,
      link: "#"
    },
    {
      id: 3,
      title: "Top 10 Business Strategies for 2020",
      date: "March 05, 2019",
      comments: "0",
      image: blogImage1,
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-[#f3f7f9] font-['Poppins',_sans-serif]">
      {/* Container Logic: 80vw on Large screens, full width on MD/Small */}
      <div className="mx-auto w-full md:px-6 lg:w-[80vw]">
        
        {/* Section Header */}
        <div className="mb-12 px-4 md:px-0">
          <h5 className="text-[#273a83] font-bold tracking-[3px] text-xs uppercase mb-2 flex items-center">
            Latest News
            <span className="ml-3 w-10 h-[1px] bg-[#273a83]"></span>
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c26]">
            Our Recent Blog Posts
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0b0c26]/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative pt-10 flex-grow">
                
                {/* Improved Pencil Icon: Top Right of Content Area */}
                <div className="absolute -top-6 right-6 z-20">
                  <div className="w-12 h-12 bg-[#273a83] text-white flex items-center justify-center rounded-full shadow-xl border-4 border-white transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Pencil size={18} />
                  </div>
                </div>

                {/* Post Title */}
                <div className="mb-6">
                  <h5 className="text-xl font-bold leading-snug">
                    <a 
                      href={post.link} 
                      className="text-[#0b0c26] hover:text-[#273a83] transition-colors duration-300"
                    >
                      {post.title}
                    </a>
                  </h5>
                </div>

                {/* Post Meta */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <span className="flex items-center text-[#8d9297] text-[13px]">
                      <Calendar size={14} className="mr-2 text-[#273a83]" />
                      {post.date}
                    </span>
                    <span className="flex items-center text-[#8d9297] text-[13px]">
                      <MessageCircle size={14} className="mr-2 text-[#273a83]" />
                      {post.comments} Comments
                    </span>
                  </div>

                  {/* Read More Arrow */}
                  <a href={post.link} className="text-[#273a83] transform transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;