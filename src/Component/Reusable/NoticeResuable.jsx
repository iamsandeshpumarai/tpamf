import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, Bell, Printer, ArrowLeft, Ghost } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NoticeResuable = ({ data }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImg(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const hasImages = data?.images && data.images.length > 0;

  // --- 1. CLEAN EMPTY STATE ---
  if (!hasImages) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="relative inline-block mb-6">
            <Ghost size={80} className="text-gray-100 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Bell size={24} className="text-gray-300" />
            </div>
          </div>
          <h2 className="text-2xl font-light text-gray-400 uppercase tracking-[0.2em] mb-4">
            No Notices Found
          </h2>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-8 py-3 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-50 transition-all mx-auto text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Bell size={14} /> Official Announcement
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            {data.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            {data.text}
          </p>
        </header>

        {/* --- IMAGE GRID (Clean & Responsive) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.images?.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-100">
                <img 
                  src={img} 
                  alt="Notice" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Document Page {index + 1}</span>
                <div className="h-px flex-1 bg-gray-100 mx-4"></div>
                <span className="text-[10px] font-bold text-blue-600 uppercase">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER ACTIONS --- */}
        <footer className="mt-24 pt-10 border-t border-gray-100 flex flex-col items-center gap-8">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-3 bg-white border border-gray-200 text-gray-800 px-10 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm"
          >
            <Printer size={20} /> Print Document
          </button>
          <p className="text-gray-300 text-[10px] uppercase tracking-[0.3em] font-bold">
            All Rights Reserved &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      {/* --- ELITE LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          >
            {/* Top Bar */}
            <div className="absolute top-0 w-full p-8 flex justify-between items-center">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{data.title}</span>
              <button 
                onClick={() => setSelectedImg(null)}
                className="bg-gray-900 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-xl"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image View */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                alt="Enlarged view" 
              />
            </motion.div>

            {/* Download Link */}
            <div className="mt-8">
              <a 
                href={selectedImg} 
                download 
                className="inline-flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest hover:text-blue-800 transition-colors border-b-2 border-blue-100 pb-1"
              >
                <Download size={16} /> Download High-Res Image
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoticeResuable;