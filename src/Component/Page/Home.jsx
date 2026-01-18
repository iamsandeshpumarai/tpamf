import React, { useState, useEffect } from 'react';
import HeroSlider from '../Home/HeroSection.jsx';
import FeaturedBoxes from '../Home/FeatureBox';
import AboutSection from '../Home/AboutSection';
import PublicationSection from '../Home/PublicationSection';
import AboutFoundation from '../Home/AboutFoundation';
import OurGoals from '../Home/GoalSection';
import FeaturedObjectives from '../Home/FeatureObjective';
import NewsHeader from '../Home/NewsHeader';
import BlogSection from '../Home/BlogSection';
import Footerlogo from '../Footerlogo';
import FooterInfoBar from '../FooterBarInfo';
import NewsletterSubscription from '../Home/Newsletter';
import BoardOfTrusty from '../Home/Boardoftrusty';
import ExecutiveBoardSection from '../Home/ExecutiveBoard';
import LoadingScreen from '../Loading.jsx';

const Home = () => {
  const [showNotice, setShowNotice] = useState(false);
const [isExiting,setIsExiting] = useState(false)
const [showLoader,changeLoader] = useState(true)
  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('hasSeenNotice')
    if(!hasSeenNotice){
      const timer =  setTimeout(() => {
        setShowNotice(true)
      }, 900);
      return ()=> clearTimeout(timer) 
    }
const loaderTimer = setTimeout(() => {
    changeLoader(false);
  }, 300); 

  return () => clearTimeout(loaderTimer); // Correct cleanup
  }, []);

  const closeNotice = () => {
    setIsExiting(true)
    setTimeout(() => {
      setShowNotice(false)
      localStorage.setItem('hasSeenNotice','true')
    }, 300);
  }
if(showLoader) return <LoadingScreen/>
  return (
   <div style={{ position: 'relative' }}>
      <style>
        {`
          .popup-overlay {
            transition: opacity 0.3s ease-in-out;
            opacity: 0;
          }
          .popup-overlay.active {
            opacity: 1;
          }
          .popup-content {
            transform: scale(0.9) translateY(20px);
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .active .popup-content {
            transform: scale(1) translateY(0);
          }
          /* Exit Animation */
          .exiting {
            opacity: 0 !important;
          }
          .exiting .popup-content {
            transform: scale(0.9) translateY(10px) !important;
          }
        `}
      </style>

      {showNotice && (
        <div 
          className={`popup-overlay ${!isExiting ? 'active' : 'exiting'}`}
          style={styles.overlay} 
          onClick={closeNotice}
        >
          <div 
            className="popup-content"
            style={styles.modal} 
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.closeButton} onClick={closeNotice} aria-label="Close">
              &times;
            </button>
            <img 
              src="https://tp-acharya.terracecafe.com.np/upload/images/notices/1708500891Invitaiton%20Card.jpg" 
              alt="Notice" 
              style={styles.image} 
            />
          </div>
        </div>
      )}
      <HeroSlider />
      <FeaturedBoxes />
      <AboutSection />
      <PublicationSection />
      <AboutFoundation />
      <OurGoals />
      <FeaturedObjectives />
      <BoardOfTrusty />
      <ExecutiveBoardSection />
      <NewsHeader />
      <BlogSection />
      <Footerlogo />
      <FooterInfoBar />
      <NewsletterSubscription />
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.85)', // Slightly tinted blue-black
    backdropFilter: 'blur(4px)', // Modern blur effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    position: 'relative',
    maxWidth: '500px',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '10px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 10001,
    transition: 'all 0.2s',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '12px',
  },
};

export default Home;