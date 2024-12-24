"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-emerald-800 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Contact Section */}
        <div className="space-y-6">
          <Image
            src="/assets/ksfm-logo-proper.png"
            alt="Logo"
            width="200"
            height="200"
            className="object-contain"
          />
          <div>
            <h3 className="text-lg font-medium text-gray-100">
              Project Address:
            </h3>
            <p className="text-sm text-gray-300">
              Bairapura village, Kodigenahalli hobli, taluk, Madhugiri,
              Karnataka 572127
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100">
              Office Address:
            </h3>
            <p className="text-sm text-gray-300">
              Karna Sree Utility Nest, 72\9 6th Floor, Bellandur Village & Post,
              Varthur Hobli, Bengaluru, Karnataka 56010
            </p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-100 mb-4">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.222199652014!2d77.40888277455797!3d13.704987998376712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1bbfef02069eb%3A0xe6e085ce18550f6!2sKarnasree%20FARM%20MEADOWS!5e0!3m2!1sen!2sus!4v1735035182517!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-100">Contact Us</h3>
          <div className="flex space-x-6 text-2xl text-gray-400">
            <a href="#" className="hover:text-gray-100" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-100" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-100" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-100" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-col mt-4 space-y-4">
            <a href="tel:+919916953333" className="text-sm text-gray-300">
              +91 9916953333
            </a>
            <a href="tel:+917760596956" className="text-sm text-gray-300">
              +91 7760596956
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
