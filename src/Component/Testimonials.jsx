import React, { useState, useEffect } from 'react';
import {  AnimatePresence, motion } from 'framer-motion';
import Client1 from '../assets/images/testimonial/02.jpg'
import Client2 from '../assets/images/testimonial/01.jpg'
import Client3 from '../assets/images/testimonial/03.jpg'
import BackgroundImage from '../assets/images/bg-image/map-bgimg.png'


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialData = [
    {
      id: 1,
      name: "Alena Due",
      role: "Business Man",
      image: Client1,
      quote: "If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly."
    },
    {
      id: 2,
      name: "Alena Due",
      role: "Entrepreneur",
      image: Client2,
      quote: "Success in the democratic process depends on collective participation and the value we provide to the community."
    },
    {
      id: 3,
      name: "Alena Due",
      role: "Strategic Partner",
      image: Client3,
      quote: "Our goals are aligned with national sovereignty and the uplifting of every citizen through education and awareness."
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 w-[100%] lg:w-[90%] bg-[white] overflow-hidden font-['Poppins',_sans-serif]">
      <div className="container    ">
        <div className="max-w-full mx-auto">
          
          {/* Main Background Layer with Map Effect */}
          <div className="relative bg-[#273a83] rounded-sm shadow-2xl  md:p-16 overflow-hidden">
            
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className={`absolute top-0 left-0 w-full h-full bg-[url(${BackgroundImage})]`}></div>
            </div>

            <div className="relative z-10 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  {/* Avatar Area */}
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden mx-auto shadow-xl">
                      <img 
                        src={testimonialData[current].image} 
                        alt={testimonialData[current].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Quote Icon Decoration */}
                    <div className="absolute top-1 left-0 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.387.197-.859-.141-.738-.57l1.194-4.697-3.462-3.38c-.33-.323-.153-.887.306-.954l4.698-.684L7.696.443c.198-.401.763-.401.961 0l2.032 4.153 4.698.684c.459.067.636.631.306.954l-3.462 3.38 1.194 4.697c.121.429-.351.767-.738.57L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-white text-lg md:text-xl font-medium italic leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{testimonialData[current].quote}"
                  </blockquote>

                  {/* Caption */}
                  <div className="text-white">
                    <h6 className="text-lg font-bold uppercase tracking-wider">{testimonialData[current].name}</h6>
                    <label className="text-white/60 text-xs uppercase tracking-[3px] mt-1 block">
                      {testimonialData[current].role}
                    </label>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div className=" flex justify-center space-x-3 mt-10">
                {testimonialData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;