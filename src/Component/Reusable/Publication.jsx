import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const Publication = ({ data={} }) => {
    console.log(data)
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-10 border-b pb-4">
        <BookOpen className="text-blue-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
      </div>

      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.data?.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
              <img
                src={item.img}
                alt={item.bookname}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-4 h-14">
                {item.bookname}
              </h3>
              
              <div className="mt-auto">
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read More
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Publication;