import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allNews } from '../utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, Share2, Clock, TrendingUp, Newspaper } from 'lucide-react';

const Activities = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const decodedSlug = decodeURIComponent(slug);

  // Scroll to top when news changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 1. Logic to get Current News and Highlights
  const { selectedNews, highlights } = useMemo(() => {
    const allItems = Object.values(allNews).flat();
    const current = allItems.find((item) => item.title === decodedSlug);
    // Filter out current news and pick 4-5 others as highlights
    const otherNews = allItems.filter((item) => item.title !== decodedSlug).slice(0, 5);
    
    return { selectedNews: current, highlights: otherNews };
  }, [decodedSlug]);

  // 2. Functional Share Logic
  const handleShare = async () => {
    const shareData = {
      title: selectedNews?.title,
      text: selectedNews?.news[0].substring(0, 100) + "...",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("लिङ्क क्लिपबोर्डमा प्रतिलिपि गरियो!");
      }
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  if (!selectedNews) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">समाचार फेला परेन</h2>
        <button onClick={() => navigate('/activity')} className="text-blue-600 flex items-center gap-2">
          <ChevronLeft size={20} /> नियमित कार्यक्रममा जानुहोस्
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 group bg-white px-4 py-2 rounded-full shadow-sm w-fit"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">पछाडि</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Main Content (8 Columns) */}
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-3xl p-5 md:p-10 shadow-sm border border-gray-100"
          >
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                {selectedNews.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 border-y border-gray-50 py-5">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={18} className="text-blue-600" />
                    <span className="text-sm font-semibold">{selectedNews.date}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-gray-500">
                    <Clock size={18} className="text-blue-600" />
                    <span className="text-sm">५ मिनेट पढ्नुहोस्</span>
                  </div>
                </div>

                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold"
                >
                  <Share2 size={18} />
                  <span>साझा गर्नुहोस्</span>
                </button>
              </div>
            </header>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="space-y-6">
              {selectedNews.news.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify font-normal">
                  {paragraph}
                </p>
              ))}
            </article>
          </motion.main>

          {/* RIGHT: Sidebar Highlights (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-6">
              <div className="flex items-center gap-2 mb-6 border-l-4 border-blue-600 pl-3">
                <TrendingUp size={20} className="text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">अन्य हाइलाइटहरू</h3>
              </div>

              <div className="space-y-6">
                {highlights.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={`/activity/activities/${encodeURIComponent(item.title)}`}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                      <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                        <Calendar size={10} /> {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50">
                <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
                  <Newspaper className="mx-auto mb-3 opacity-50" size={32} />
                  <p className="text-sm font-medium mb-3">थप गतिविधिहरूको लागि हामीसँग जोडिनुहोस्।</p>
                 
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Activities;