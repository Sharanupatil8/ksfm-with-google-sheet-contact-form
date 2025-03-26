"use client";
import React from "react";
import Image from "next/image";
import { HiCheck } from "react-icons/hi2";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Description = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      className="relative   overflow-hidden "
    >
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-300 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto container px-4 md:px-8 py-8 md:py-16">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-lg mb-2 uppercase text-emerald-600 font-medium">
            Where Investment Meets Inspiration
          </p>
          <h2 className="heading-secondary text-gray-800 font-ptserif font-bold text-3xl md:text-5xl lg:text-6xl">
            Why Choose Kar Na Sree Farm Meadows?
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative space-y-12">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="backdrop-blur-lg bg-white/30 shadow-xl rounded-2xl overflow-hidden border border-white/20 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 md:p-8 min-h-[400px] flex flex-col justify-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold font-ptserif text-emerald-800">
                    {index === 0
                      ? "Your Eco-Friendly Haven"
                      : index === 1
                      ? "A Smart Investment"
                      : "Key Features and Benefits"}
                  </h3>
                  <ul className="flex flex-col space-y-4 mt-6">
                    {[...Array(3)].map((_, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInUp}
                        className="flex space-x-3 items-start"
                      >
                        <span className="flex-shrink-0 bg-emerald-100 p-1 rounded-full">
                          <HiCheck className="h-5 w-5 text-emerald-700" />
                        </span>
                        <span className="text-gray-700">
                          <strong className="text-emerald-800">
                            {index === 0
                              ? i === 0
                                ? "Nature's Embrace:"
                                : i === 1
                                ? "Sustainable Living:"
                                : "Luxurious Comfort:"
                              : index === 1
                              ? i === 0
                                ? "High ROI Potential:"
                                : i === 1
                                ? "Passive Income:"
                                : "Affordable Luxury:"
                              : i === 0
                              ? "Full Land Ownership:"
                              : i === 1
                              ? "Exclusive Crop Share:"
                              : "Vaastu-Compliant Design:"}
                          </strong>{" "}
                          {index === 0
                            ? "Immerse yourself in the beauty of nature with spacious gardens and lush plantations."
                            : index === 1
                            ? "Reap the rewards of significant returns from valuable sandalwood and teakwood plantations."
                            : "Enjoy complete ownership of your land and villa."}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="order-first md:order-last"
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={
                        index === 0
                          ? "/assets/project1.webp"
                          : index === 1
                          ? "/assets/basketballcourt.webp"
                          : "/assets/masterplan-layout.webp"
                      }
                      alt="karnasree farms"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Description;
