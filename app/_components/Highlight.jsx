"use client";
import React from "react";
import VideoEmbed from "./VideoEmbed";
import { motion } from "framer-motion";
import {
  HiHomeModern,
  HiMapPin,
  HiShieldCheck,
  HiXMark,
} from "react-icons/hi2";

function Highlight() {
  return (
    <motion.section
      className="container bg-gradient-to-br rounded-2xl from-emerald-950 to-emerald-900 text-white max-w-7xl mx-auto px-4 md:px-8 py-8 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className="grid  lg:grid-cols-2 space-x-0 md:space-x-6 lg:space-x-12 gap-y-8 lg:gap-y-8">
        <motion.div
          className="  "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="mb-6 lg:mb-12"
          >
            <h2 className="heading-secondary  text-gray-50 font-ptserif tracking-tight lg:leading-[62px]  font-bold text-3xl md:text-5xl lg:text-6xl">
              A Place for every lifestyle & a home for every moment.
            </h2>

            <div className="bg-emerald-800/50  backdrop-blur-lg px-3 py-3 mt-6">
              <div className="flex space-x-1 items-center text-gray-300">
                {" "}
                <HiMapPin className="h-6 w-6 " />
                <p className="text-lg">Location :</p>
              </div>
              <p className="text-gray-100 pt-2 text-lg">
                Towards North Bengaluru, off Doddaballapura Rd, Gauribidanur,
                Chikkaballapur District, Karnataka
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="h-6 w-6 text-gray-100"
              >
                <path
                  style={{ fill: "#ffffff" }}
                  d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
                />
              </svg>
            </div>
            <div className="bg-emerald-800/50  backdrop-blur-lg px-3 py-3 mt-2">
              <div className="flex space-x-2 items-center text-gray-300">
                {" "}
                <HiHomeModern className="h-6 w-6 " />
                <p className="text-lg">Unit Types:</p>
              </div>
              <p className="text-gray-100 pt-2 text-lg">
                1, 2 & 3 BHK Farm Villas nestled amidst a minimum of 6,534 sqft
                of fertile Farmland.
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="h-6 w-6 text-gray-100"
              >
                <path
                  style={{ fill: "#ffffff" }}
                  d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
                />
              </svg>
            </div>
            <div className="bg-emerald-800/50  backdrop-blur-lg px-3 py-3 mt-2">
              <div className="flex space-x-1 items-center text-gray-300">
                {" "}
                <HiShieldCheck className="h-6 w-6 " />
                <p className="text-lg">
                  Completion of Phase-1 :{" "}
                  <span className="text-gray-100 pt-2 text-lg">
                    Q2 2028 - Q4 2028
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex bg-white p-2     rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 0.4 }}
        >
          {/* Left Side: Image with YouTube Play Button */}
          <div className="relative w-full h-[480px] md:h-auto  ">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/_INa500IgVo?si=x-LhBHTyNbghC3CN"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side: Information Cards */}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Highlight;
