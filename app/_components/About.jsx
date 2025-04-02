"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state for client-side rendering
    setIsMounted(true);

    // Add custom styles for the modal video container
    const style = document.createElement("style");
    style.innerHTML = `
      .modal-video {
        position: fixed !important;
        z-index: 9999 !important;
        top: 40px !important;
        left: 0 !important;
        width: 100vw !important;
      
        height: 100vh !important;
      }
      
      .modal-video-body {
        max-width: 90vw !important;
        max-height: 90vh !important;
        margin: 0 auto !important;
      }
      
      .modal-video-inner {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        height: 100% !important;
      }
      
      @media (max-width: 768px) {
        .modal-video-movie-wrap {
          width: 90% !important;
          padding-bottom: 50% !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const openModal = () => setIsOpen(true);

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6 lg:mb-10"
        >
          <p className="text-lg mb-2 uppercase text-emerald-600 font-medium">
            Where Investment Meets Inspiration
          </p>
          <h2 className="font-ptserif font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800">
            Escape the Ordinary. Cultivate Legacy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4 text-gray-700">
              <p>
                Imagine a life where your backyard is a boundless green canvas,
                and your investment grows naturally, just like the crops around
                you.
              </p>
              <p>
                Karnasree Farm Meadows isn't just real estate—it's an
                eco-sustainable Farmvilla community where land appreciates
                faster, transforming how you live, invest, and connect with
                nature.
              </p>

              <h3 className="text-gray-800 text-2xl md:text-3xl font-ptserif mt-6 mb-3">
                <strong>900+ FarmVillas</strong> – Your Private Green Escape!
              </h3>
              <p>
                We're not just selling land—we're offering a lifestyle
                revolution! Escape the concrete jungle and embrace a FarmVilla,
                your perfect blend of nature and modern living.
              </p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  <strong>Weekend in Farm</strong> - Relax, recharge, and unwind
                  in your private farmhouse.
                </li>
                <li>
                  <strong>Work from Farm</strong> - Stay connected while
                  surrounded by greenery.
                </li>
                <li>
                  <strong>Agriculture in Farm</strong> - Grow your own food,
                  live sustainably.
                </li>
                <li>
                  <strong>Elders in Farm</strong> - A peaceful, healthy
                  environment for your loved ones.
                </li>
                <li>
                  <strong>Rent Out in Farm</strong> - A smart investment with
                  great returns.
                </li>
              </ul>

              <h3 className="text-gray-800 text-2xl md:text-3xl font-ptserif mt-6">
                Your Permanent Staycation Starts Here!
              </h3>

              <h3 className="text-gray-800 font-bold text-2xl md:text-3xl font-ptserif mt-6 mb-3">
                Regenerate. Reimagine. Return to What Matters.
              </h3>
              <p>
                This isn't just about owning land—it's about living in harmony
                with nature.
              </p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>Grow your own food</li>
                <li>Relax in your private retreat</li>
                <li>Watch your investment thrive</li>
              </ul>

              <p className="mt-2">
                It's not just land—it's a lifestyle, a legacy, a movement.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col h-full">
              <div
                className="relative flex-grow w-full rounded-lg overflow-hidden"
                style={{ minHeight: "300px" }}
              >
                <Image
                  src="/assets/image1.webp"
                  alt="Best farmland in Bengaluru"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <button
                  className="absolute bottom-0 left-0 flex items-center justify-center bg-white p-2 rounded-tr-lg shadow-md hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
                  onClick={openModal}
                  aria-label="Play video"
                >
                  <HiMiniPlay className="h-10 w-16 text-emerald-700" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {isMounted &&
        isOpen &&
        ReactDOM.createPortal(
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="H-UKr4d4GsI"
            onClose={() => setIsOpen(false)}
          />,
          document.body
        )}
    </section>
  );
}

export default About;
