import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Maximize2, ImageIcon } from 'lucide-react';

const GalleryResuable = ({ data }) => {
  const [selectedSubCollection, setSelectedSubCollection] = useState(null);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // 1. Prevent Background Scrolling when Modal is open
  useEffect(() => {
    if (fullscreenIndex !== null || activeVideo !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [fullscreenIndex, activeVideo]);

  // 2. Handle ESC Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setFullscreenIndex(null);
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Helpers
  const nextImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % selectedSubCollection.imageCollection.length);
  };

  const prevImage = () => {
    setFullscreenIndex((prev) => (prev - 1 + selectedSubCollection.imageCollection.length) % selectedSubCollection.imageCollection.length);
  };

  const getYoutubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Empty State Check
  if (!data?.collection || data.collection.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-gray-300 rounded-2xl">
        <ImageIcon size={48} className="text-gray-300 mb-4" />
        <p className="text-gray-500 font-medium text-xl">No {data.type} collection found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="flex justify-between items-end mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
          <p className="text-gray-500 mt-1 capitalize">{data.type} Gallery</p>
        </div>
        {selectedSubCollection && (
          <button 
            onClick={() => setSelectedSubCollection(null)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-all"
          >
            <ChevronLeft size={16} /> फिर्ता जानुहोस्
          </button>
        )}
      </header>

      {/* --- MAIN GRID --- */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* IMAGE FOLDERS VIEW */}
        {data.type === "image" && !selectedSubCollection && data.collection.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            key={idx} onClick={() => setSelectedSubCollection(item)}
            className="group cursor-pointer space-y-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm border border-gray-200">
              <img src={item.coverImage} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                    <Maximize2 size={20} />
                 </div>
              </div>
            </div>
            <h3 className="font-bold text-gray-700 text-center line-clamp-2 px-2">{item.title}</h3>
          </motion.div>
        ))}

        {/* SUB-GALLERY IMAGES (Inside a Folder) */}
        {selectedSubCollection && selectedSubCollection.imageCollection.map((img, idx) => (
          <motion.div 
            layoutId={`img-${idx}`}
            key={idx} onClick={() => setFullscreenIndex(idx)}
            className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:ring-4 ring-blue-500/20 transition-all"
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
          </motion.div>
        ))}

        {/* VIDEO COLLECTION */}
        {data.type === "video" && data.collection.map((videoUrl, idx) => {
          const videoId = getYoutubeID(videoUrl);
          return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} key={idx}
              className="group cursor-pointer space-y-2"
              onClick={() => setActiveVideo(videoUrl)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-gray-200">
                <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold text-center text-gray-600">भिडियो {idx + 1}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- FULLSCREEN LIGHTBOX (Images) --- */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 w-full p-6 flex justify-between items-center text-white bg-gradient-to-b from-black/50 to-transparent">
               <span className="font-medium">{fullscreenIndex + 1} / {selectedSubCollection.imageCollection.length}</span>
               <button onClick={() => setFullscreenIndex(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={32} />
               </button>
            </div>

            <button onClick={prevImage} className="absolute left-4 p-4 text-white/50 hover:text-white transition-colors">
              <ChevronLeft size={60} strokeWidth={1} />
            </button>
            
            <motion.img 
              key={fullscreenIndex}
              initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }}
              src={selectedSubCollection.imageCollection[fullscreenIndex]} 
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <button onClick={nextImage} className="absolute right-4 p-4 text-white/50 hover:text-white transition-colors">
              <ChevronRight size={60} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          >
             <button 
                className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all" 
                onClick={() => setActiveVideo(null)}
             >
                <X size={24}/>
             </button>
             <motion.div 
               initial={{ scale: 0.8 }} animate={{ scale: 1 }}
               className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
             >
                <iframe 
                    width="100%" height="100%" 
                    src={`https://www.youtube.com/embed/${getYoutubeID(activeVideo)}?autoplay=1`}
                    title="Video Player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryResuable;