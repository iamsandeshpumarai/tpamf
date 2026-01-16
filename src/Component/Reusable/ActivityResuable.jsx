import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
const ActivityResuable = ({data,title}) => {
 
const navigate = useNavigate();
  const DailyActivities = data || [];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-10 border-b-4 border-blue-600 pb-2 w-fit">
        <Newspaper className="text-blue-600" size={32} />
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
{title}
        </h1>
      </div>

      {/* Conditional Rendering: If no activities exist */}
      {DailyActivities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <Newspaper size={48} className="text-gray-300 mb-4" />
          <p className="text-xl text-gray-500 font-medium">कुनै गतिविधिहरू उपलब्ध छैनन्।</p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {DailyActivities.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/activity/activities/${encodeURIComponent(data.title)}`)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white flex items-center gap-2 text-sm font-semibold">
                    थप पढ्नुहोस् <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{data?.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors line-clamp-3">
                  {data?.title}
                </h2>

                <div className="mt-auto pt-4">
                   <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default ActivityResuable
