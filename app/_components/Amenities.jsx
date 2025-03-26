"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const amenities = [
  { name: "GATED FARM COMMUNITY", image: "1.webp" },
  {
    name: "15 ACRES CLUB RESORT WITH AYURVEDIC HOMEOPATHY CENTER AND YOGA SPACE",
    image: "2.webp",
  },
  {
    name: "70 - 80 ACRES NATURAL LAKE SURROUNDING WITH JOGGING TRACK",
    image: "3.webp",
  },
  { name: "ISLAND", image: "4.webp" },
  { name: "PARK WITH WALKING & CYCLING TRACK", image: "5.webp" },
  { name: "GAZEBO", image: "6.webp" },
  { name: "TEMPLE", image: "18.webp" },
  { name: "ELDER'S PARADISE WITH NURSING & DOCTOR FACILITY", image: "7.webp" },
  { name: "WINE & BEER RESTAURANT", image: "8.webp" },
  { name: "BAMBOO RESTAURANT", image: "9.webp" },
  { name: "OPEN RESTAURANT WITH CAMP FIRE", image: "10.webp" },
  { name: "GOSHALA", image: "11.webp" },
  { name: "FOOD FOREST", image: "12.webp" },
  { name: "VILLAGE WELL POOL", image: "13.webp" },
  { name: "SPORTS ARENA", image: "14.webp" },
  { name: "AGRI MUSEUM", image: "15.webp" },
  { name: "MANORANJAN HALL", image: "16.webp" },
  { name: "DANCING FOUNTAIN", image: "17.webp" },
];

function Amenities() {
  // Container variants for the staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Card variants for individual card animations - coming from below with opacity change
  const cardVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        opacity: { duration: 0.8, ease: "easeOut" },
      },
    },
  };

  // Overlay variants for the sliding overlay effect
  const overlayVariants = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="py-6 px-4 md:px-6 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "-100px" }}
      >
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="amenity-card   h-[320px] shadow-md rounded-md overflow-hidden relative group"
            variants={cardVariants}
            custom={index}
          >
            <motion.div
              className="card-overlay absolute top-0 left-0 w-full h-full bg-emerald-50 z-10"
              variants={overlayVariants}
            />
            <div className="relative overflow-hidden">
              <Image
                width={360}
                height={480}
                src={`/amenities/${amenity.image}`}
                alt={amenity.name}
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className=" absolute bottom-0 w-full   p-2 bg-gray-900/70">
              <h3 className="text-sm flex flex-col  justify-center md:text-md py-2 px-2 text-gray-100 font-medium">
                {amenity.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Amenities;
