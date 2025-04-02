"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative">
      {/* Map Background */}

      {/* Footer Content */}
      <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 text-white">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 py-16">
          {/* Left Column - Logo and Company Info */}
          <div className="flex flex-col items-start boder-b md:border-r border-gray-400">
            <div className="mb-6">
              <Image
                src="/footer-logo.jpg"
                alt="Logo"
                width="200"
                height="80"
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-emerald-100 leading-relaxed mb-8 max-w-md">
              This isn't just about owning land. It's about being part of an
              ecosystem that breathes, grows, and thrives. Every plot is a
              statement—a commitment to environmental stewardship and personal
              growth.
            </p>
            <div className="flex space-x-5 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100077510833438&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                className="text-emerald-200 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://www.instagram.com/karnasreefarms?igsh=MjU5cGM4NjdkcmFq&utm_source=qr"
                className="text-emerald-240 hover:text-white hover:scale-105 transition-all duration-300"
                target="_blank"
              >
                <FaInstagram size={32} />
              </a>

              <a
                href="https://www.instagram.com/karnasreefarms?igsh=MjU5cGM4NjdkcmFq&utm_source=qr"
                target="_blank"
                className="text-emerald-200 hover:text-white hover:scale-105 transition-allduration-300"
              >
                <FaYoutube size={32} />
              </a>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="boder-b md:border-r border-gray-400">
            <h2 className="text-xl md:text-2xl font-ptserif font-bold mb-6 text-emerald-100">
              Contact Us
            </h2>

            <div className="mb-8 flex items-start">
              <div className="text-emerald-300 mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-emerald-100">Phone Number</h3>
                <div className="flex flex-col text-lg mt-1">
                  <a
                    href="tel:+917975276153"
                    className="text-emerald-200 hover:text-white text-sm transition-colors duration-300"
                  >
                    +91 - 991 695 3333
                  </a>
                  <a
                    href="tel:+917975276153"
                    className="text-emerald-200 hover:text-white text-sm transition-colors duration-300"
                  >
                    +91 - 807 318 5844
                  </a>
                </div>
              </div>
              <div></div>
            </div>

            <div className="mb-8 flex items-start">
              <div className="text-emerald-300 mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-emerald-100">Email Address</h3>
                <a
                  href="mailto:info@karnasreefarms.com"
                  className="text-emerald-200 hover:text-white text-sm transition-colors duration-300"
                >
                  info@karnasreefarms.com
                </a>
              </div>
            </div>

            <div className="mb-8 flex items-start">
              <div className="text-emerald-300 mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-emerald-100">
                  Head Office Location
                </h3>
                <a
                  href="https://maps.app.goo.gl/X2uTxbtQJih3t7GB6"
                  target="_blank"
                  className="text-emerald-200 hover:text-white text-sm transition-colors duration-300"
                >
                  Karna Sree Utility Nest, 72\9 6th Floor, Bellandur Village &
                  Post,Varthur, Hobli, Bengaluru, Karnataka 560103
                </a>
              </div>
            </div>
          </div>

          <div className="w-full   rounded-md relative">
            <h2 className="text-xl md:text-2xl font-ptserif font-bold mb-2 text-emerald-100">
              Project Location:
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.222199652014!2d77.40888277455797!3d13.704987998376712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1bbfef02069eb%3A0xe6e085ce18550f6!2sKarnasree%20FARM%20MEADOWS!5e0!3m2!1sen!2sus!4v1735035182517!5m2!1sen!2sus"
              width="100%"
              height="90%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-95"
            ></iframe>
          </div>

          {/* Right Column - Location Information */}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-emerald-700">
          <div className="container mx-auto flex  justify-center items-center py-6 px-8">
            <p className="text-emerald-200 text-sm">
              Copyright © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <a
          href="https://wa.me/919916953333"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
