import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider1 from '../../assets/images/slides/slider-mainbg-001.jpg';
import Slider2 from '../../assets/images/slides/slider-mainbg-003.jpg';

const slides = [
  {
    id: 1,
    bgImage: Slider1,
    subtitle: "HELPING YOU TO",
    title: "Fastest Way to",
    highlight: "Achieve your Goal",
    description: "Comprehensive financial advice and financial services that are tailored to meet your individual needs.",
    align: "left"
  },
  {
    id: 2,
    bgImage: Slider2,
    subtitle: "GREAT EXPERIENCE",
    title: "We Provide",
    highlight: "Financial Planning",
    description: "Create a refreshing customer experience that's free of convexity and confusion.",
    align: "right-ish" // Custom alignment for Slider 2
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const AUTO_PLAY_TIME = 8000; // 6 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_TIME);
    return () => clearInterval(timer);
  }, [current]);

  // Variants for Slider 2 Word Animation
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const wordVars = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  // Pop out from bottom for Desc and Buttons
  const popUpVars = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[650px] overflow-hidden bg-gray-900 font-['Poppins',_sans-serif]">
      
      {/* 1. TOP LOADING PROGRESS LINE */}
      <motion.div
        key={`progress-${current}`}
        className="absolute top-0 left-0 h-[4px] bg-[#273a83] z-[60] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: AUTO_PLAY_TIME / 1000, ease: "linear" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          {/* Main Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] scale-110"
            style={{ backgroundImage: `url(${slides[current].bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content Layer */}
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center lg:justify-start">
            <div className={`w-full flex flex-col 
              ${slides[current].align === 'right-ish' ? 'lg:items-end lg:text-right lg:ml-auto lg:max-w-3xl' : 'items-start text-left'}`}>
              
              {/* SLIDER 2 ANIMATION LOGIC (Word by Word) */}
              {slides[current].align === 'right-ish' ? (
                <motion.div variants={containerVars} initial="initial" animate="animate">
                  <motion.p variants={wordVars} className="text-[#273a83] font-bold tracking-widest text-sm md:text-lg mb-4 text-left">
                    {slides[current].subtitle}
                  </motion.p>
                  <motion.h1 className="text-left text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {slides[current].title.split(" ").map((word, i) => (
                      <motion.span key={i} variants={wordVars} className="inline-block mr-3 ">{word}</motion.span>
                    ))}
                    
                    <br />
                    {slides[current].highlight.split(" ").map((word, i) => (
                      <motion.span key={i} variants={wordVars} className="inline-block mr-3 text-[#273a83]">{word}</motion.span>
                    ))}
                  </motion.h1>
                </motion.div>
              ) : (
                /* SLIDER 1 ANIMATION LOGIC (Original) */
                <>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-left text-[#273a83] font-bold tracking-widest text-sm md:text-lg mb-4"
                  >
                    {slides[current].subtitle}
                  </motion.p>
                  <motion.h1 
                  
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-left text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  >
                    {slides[current].title} <br />
                    <span className="text-[#273a83]">{slides[current].highlight}</span>
                  </motion.h1>
                </>
              )}

              {/* Description (Popping from Bottom) */}
              <motion.p
                variants={popUpVars}
                initial="initial"
                animate="animate"

                className="text-left text-gray-200 mt-6 text-sm md:text-lg max-w-2xl"
              >
                {slides[current].description}
              </motion.p>

              {/* Buttons (Popping from Bottom) */}
              <motion.div 
                variants={popUpVars}
                initial="initial"
                animate="animate"
                className="mt-10 flex flex-wrap gap-4 items-center"
              >
                <a href="#" className="bg-[#273a83] text-white px-6 md:px-8 py-2 md:py-4 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-black transition-all">
                  Our Services
                </a>
                <a href="#" className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-4 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Hidden on small screens for better UX) */}
      <div className="hidden md:block">
        <button 
          onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/20 text-white rounded-full hover:bg-[#273a83] hover:border-[#273a83] transition-all group"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/20 text-white rounded-full hover:bg-[#273a83] hover:border-[#273a83] transition-all group"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default HeroSlider;