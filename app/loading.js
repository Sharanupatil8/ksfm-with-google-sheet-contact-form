// _components/Preloader.js
"use client"; // Ensure this component runs on the client side

import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this timeout based on your preloader duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide the preloader once loading is complete

  return (
    <div style={styles.loaderContainer}>
      <video autoPlay loop muted style={styles.loaderVideo}>
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Ensure the loader stays on top of other content
  },
  loaderVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure the video covers the whole screen
  },
};

export default Preloader;
