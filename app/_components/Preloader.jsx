"use client"; // Ensure this component runs on the client side

import React, { useState, useEffect, useRef } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null); // Create a ref to access the video element

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout based on your preloader duration

    // Set playback rate to 1.5x when the component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide the preloader once loading is complete

  return (
    <div style={styles.loaderContainer}>
      <video
        ref={videoRef} // Attach the ref to the video element
        autoPlay
        loop
        muted
        style={styles.loaderVideo}
      >
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
    backgroundColor: "white", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    height: "100dvh", // Ensure the loader stays on top of other content
  },
  loaderVideo: {
    width: "auto",
    height: "120px", // You can adjust this value to control the video size
    objectFit: "cover", // Ensure the video covers the whole area
  },
};

export default Preloader;
