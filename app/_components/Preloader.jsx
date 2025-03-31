"use client";

import React, { useState, useEffect, useRef } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling by modifying both `html` and `body`
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100dvh";
    document.documentElement.style.height = "100dvh";

    const timer = setTimeout(() => {
      setLoading(false);
      // Restore scrolling
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    }, 2000);

    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div style={styles.loaderContainer}>
      <video ref={videoRef} autoPlay loop muted style={styles.loaderVideo}>
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
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999, // Ensure it's above everything
    height: "100dvh",
    width: "100vw",
    overflow: "hidden",
  },
  loaderVideo: {
    width: "auto",
    height: "120px",
    objectFit: "cover",
  },
};

export default Preloader;
