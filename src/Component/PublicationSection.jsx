import React, { useState } from 'react';
import backgroundImage from '../assets/images/bg-image/row-bgimage-1.jpg'
import ResearchedBook1 from '../assets/images/portfolio/publication-01.jpg'
import ResearchedBook2 from '../assets/images/portfolio/publication-02.jpg'
import ResearchedBook3 from '../assets/images/portfolio/publication-03.jpg'
import RelatedBook1 from '../assets/images/portfolio/04.jpg'
import RelatedBook2 from '../assets/images/portfolio/05.jpg'
import RelatedBook3 from '../assets/images/portfolio/06.jpg'
import OtherBook from '../assets/images/portfolio/07.jpg'
import OtherBook2 from '../assets/images/portfolio/08.jpg'
import OtherBook3 from '../assets/images/portfolio/09.jpg'
const PublicationSection = () => {
  const [activeTab, setActiveTab] = useState('Researched Books');

  const books = {
    "Researched Books": [
      { id: 1, title: "Internal and International Migration in Nepal", img: ResearchedBook1 },
      { id: 2, title: "Efforts at Promotion of Women in Nepal", img: ResearchedBook2 },
      { id: 3, title: "भावी संबिधान", img: ResearchedBook3 },
    ],
    "TPA Related Books": [
      { id: 4, title: "Corporate Consultancy Solution", img: RelatedBook1 },
      { id: 5, title: "Business Planning", img: RelatedBook2 },
      { id: 6, title: "Business Management", img: RelatedBook3 },
    ],
    "Other Books": [
      { id: 7, title: "Financial Forecast", img: OtherBook },
      { id: 8, title: "Marketing Strategy", img: OtherBook2 },
      { id: 9, title: "Business Solutions", img: OtherBook3 },
    ]
  };

  const tabs = Object.keys(books);

  return (
    <section className="relative py-24 bg-[#191429] text-white overflow-hidden font-['Poppins',_sans-serif]">
      {/* Background Image with Transparency effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center flex justify-center items-center flex-col ">
          <h5 className=" text-white font-bold tracking-widest text-sm uppercase mb-3">
            Publication
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl   leading-tight text-center">
            Books on TPA and his remarkable legacy and historical contributions
          </h2>
          <div className='bg-[#273A83] w-12 mt-5 h-[5px]'></div>
        </div>

        {/* Tabs Navigation - Left Aligned */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 border 
                ${activeTab === tab 
                  ? 'bg-[#273a83] border-[#273a83] text-white shadow-lg' 
                  : 'bg-transparent border-white text-white hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area - Grid of Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books[activeTab].map((book) => (
            <div 
              key={book.id} 
              className="group relative bg-gray-900 rounded-sm overflow-hidden shadow-2xl aspect-[3/4]"
            >
              {/* Main Image */}
              <img 
                src={book.img} 
                alt={book.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay - Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                
                {/* Title sliding up from bottom */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h5 className="text-white font-bold text-xl leading-snug mb-2">
                    {book.title}
                  </h5>
                  <div className="w-12 h-1 bg-[#273a83]"></div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;