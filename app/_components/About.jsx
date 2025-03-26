"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Modal from "./Modal";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Start animation when component mounts
    controls.start("visible");

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controls]);

  const openModal = () => setIsOpen(true);

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mb-6 lg:mb-12"
      >
        <p className="text-lg mb-2 uppercase text-emerald-600 font-medium">
          Where Investment Meets Inspiration
        </p>
        <h2 className="heading-secondary text-gray-800 font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
          Escape the Ordinary. Cultivate Legacy
        </h2>
      </motion.div>
      <div className="grid  lg:grid-cols-12 space-x-0 md:space-x-6 lg:space-x-12 gap-y-8 lg:gap-y-8">
        <motion.div
          className="col-span-12 lg:col-span-8  "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <p className="text-gray-700 mb-2">
            Imagine a life where your backyard is a boundless green canvas, and
            your investment grows naturally, just like the crops around you.
          </p>
          <p className="text-gray-700 mb-6">
            Karnasree Farm Meadows isn’t just real estate—it’s an
            eco-sustainable Farmvilla community where land appreciates faster,
            transforming how you live, invest, and connect with nature.
          </p>

          <h3 className="text-gray-800 mb-2 text-2xl md:text-3xl  font-ptserif">
            <strong>900+ FarmVillas</strong> – Your Private Green Escape!
          </h3>
          <p className="text-gray-700 ">
            We’re not just selling land—we’re offering a lifestyle revolution!
            Escape the concrete jungle and embrace a FarmVilla, your perfect
            blend of nature and modern living.
          </p>
          <ul className="px-4 list-disc mt-3 flex flex-col space-y-2 text-gray-700 list-outside">
            <li>
              <strong>Weekend in Farm</strong> - Relax, recharge, and unwind in
              your private farmhouse.
            </li>
            <li>
              <strong> Work from Farm</strong> - Stay connected while surrounded
              by greenery.
            </li>
            <li>
              <strong>Agriculture in Farm</strong> - Grow your own food, live
              sustainably.
            </li>
            <li>
              <strong>Elders in Farm</strong> - A peaceful, healthy environment
              for your loved ones.
            </li>
            <li>
              <strong>Rent Out in Farm</strong> - A smart investment with great
              returns.
            </li>
          </ul>

          <h3 className="text-gray-800 mt-4 text-2xl md:text-3xl  font-ptserif">
            Your Permanent Staycation Starts Here!
          </h3>

          <h3 className="text-gray-800 font-bold mt-4 mb-2 text-2xl md:text-3xl  font-ptserif">
            Regenerate. Reimagine. Return to What Matters.
          </h3>
          <p className="text-gray-700 ">
            This isn’t just about owning land—it’s about living in harmony with
            nature.
          </p>
          <ul className="px-4 list-disc mt-1 flex flex-col space-y-2 text-gray-700 list-outside">
            <li> Grow your own food </li>
            <li>Relax in your private retreat</li>
            <li>Watch your investment thrive</li>
          </ul>
          <p className="text-gray-700 mt-2">
            It’s not just land—it’s a lifestyle, a legacy, a movement.
          </p>
        </motion.div>

        <motion.div
          className="flex bg-white p-2 col-span-12 lg:col-span-4  w-full  rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          {/* Left Side: Image with YouTube Play Button */}
          <div className="relative w-full  h-64 lg:h-auto rounded-xl rounded-bl-none overflow-hidden">
            <Image
              src="/assets/image1.webp"
              alt="best farmland in bengaluru"
              fill
              className="object-cover"
              priority
            />
            {/* YouTube Play Button */}
            <button
              className="absolute bottom-0 left-0 flex items-center rounded-sm space-x-2 bg-white p-2  shadow-lg hover:scale-110 transition-transform duration-300"
              onClick={openModal}
            >
              <HiMiniPlay className="h-12 w-24 text-emerald-700 " />
            </button>
          </div>

          {/* Right Side: Information Cards */}
        </motion.div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="H-UKr4d4GsI"
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}

export default About;
