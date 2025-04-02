"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

function Description() {
  const [num, setNum] = useState(1500);

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-6 lg:mb-12"
      >
        <p className="text-lg mb-2 uppercase text-emerald-600 font-medium">
          Your Eco-Friendly Haven
        </p>
        <h2 className="heading-secondary text-gray-800  font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
          Reasons To Choose
        </h2>
      </motion.div>
      <div className="grid lg:grid-cols-12 space-x-0 md:space-x-6 lg:space-x-12 gap-y-8 lg:gap-y-8">
        <motion.div
          className="flex bg-white p-2 col-span-12 lg:col-span-4 w-full rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <div className="relative w-full h-64 lg:h-auto rounded-xl overflow-hidden">
            <Image
              src="/assets/image1.webp"
              alt="best farmland in bengaluru"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-0 left-0 bg-white rounded-md p-2 shadow-lg">
              <div className="bg-emerald-700 rounded-md text-white p-4">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={num}
                  fontStyle={{ fontSize: 36, color: "white" }}
                />
                <p className="text-lg">Guest Visits</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 lg:col-span-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <p className="text-gray-700 mb-2">
            <strong>Nature's Embrace:</strong> Immerse yourself in the beauty of
            nature with spacious gardens and lush plantations.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Sustainable Living:</strong> Experience the future of
            eco-friendly living with energy-efficient designs and sustainable
            materials.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Luxurious Comfort:</strong> Indulge in modern amenities,
            elegant interiors, and comfortable living spaces.
          </p>
          <h3 className="text-gray-800 text-2xl md:text-3xl font-ptserif font-bold mb-4">
            A Smart Investment
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>High ROI Potential:</strong> Reap the rewards of significant
            returns from valuable sandalwood and teakwood plantations.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Passive Income:</strong> Generate steady rental income from
            your villa and agricultural produce.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Affordable Luxury:</strong> Own your dream villa with
            flexible payment plans and competitive pricing.
          </p>
          <h3 className="text-gray-800 text-2xl md:text-3xl font-ptserif font-bold mb-4">
            Key Features and Benefits
          </h3>
          <ul className="px-4 list-disc flex flex-col space-y-2 text-gray-700 list-outside">
            <li>
              <strong>Full Land Ownership:</strong> Enjoy complete ownership of
              your land and villa.
            </li>
            <li>
              <strong>Exclusive Crop Share:</strong> Reap the benefits of your
              own harvest.
            </li>
            <li>
              <strong>Vaastu-Compliant Design:</strong> Harmonize your living
              space with positive energy.
            </li>
            <li>
              <strong>World-Class Amenities:</strong> Experience a luxurious
              lifestyle with top-notch amenities.
            </li>
            <li>
              <strong>Expansive Land Parcels:</strong> Customize your property
              to your desires.
            </li>
          </ul>
          <h3 className="text-gray-800 text-2xl md:text-3xl font-ptserif font-bold mt-6">
            Enquire Now and Book Your Site Visit
          </h3>
          <p className="text-gray-700 mt-2 font-bold">
            Limited Time Offer: Avail Exclusive Discounts
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Description;
