import React from "react";
import { motion } from "framer-motion";
import LoadingImage from "../assets/LoaderImage/LoadingIMage.png";
import "./loader.css";

const LoadingScreen = () => {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        {/* The Image stays completely static in the background */}
        <div className="logo-container">
          <img
            src={LoadingImage}
            alt="Loading"
            className="logo-img"
          />
        </div>

        {/* The Ring stays in front and spins */}
        <motion.div
          className="ring"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;