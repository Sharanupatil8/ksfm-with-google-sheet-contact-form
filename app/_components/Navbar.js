"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  console.log(pathName);

  return (
    <header className="max-w-7xl w-full mx-auto border-b border-gray-400 left-1/2 -translate-x-1/2 absolute bg-gray-900/10 rounded-md backdrop-blur-md z-50 top-1 md:top-1">
      <div className="w-full border-b border-gray-50/10 py-2 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="text-white hover:text-emerald-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-emerald-300 transition-colors" />
            </Link>

            <Link href="#" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-emerald-300 transition-colors" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            {/* <div className="flex items-center mb-2 md:mb-0">
              <FaClock className="text-emerald-400 mr-2" />
              <span className="text-sm">MON-SAT: 09:30-17:30</span>
            </div> */}
            <div className="flex items-center mb-2 md:mb-0">
              <FaEnvelope className="text-emerald-400 mr-2" />
              <a
                href="mailto:info@karnasreefarms.com"
                className="text-sm hover:text-emerald-300 transition-colors"
              >
                info@karnasreefarms.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-emerald-400 mr-2" />
              <a
                href="tel:+9916953333"
                className="text-sm hover:text-emerald-300 transition-colors"
              >
                +91-991 695 3333
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex max-w-7xl mx-auto items-center justify-between w-full h-[60px] md:h-[80px] px-4 md:px-6">
        <Link href="/" className="overflow-hidden">
          <Image
            src="/assets/logo.png"
            alt="Karnasree farms logo"
            width="100"
            height="80"
            className="w-auto h-[70px] object-cover"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="w-6 h-1 bg-emerald-700 mb-1 transition-transform"
            style={{ transform: isOpen ? "rotate(45deg) translateY(6px)" : "" }}
          ></div>
          <div
            className="w-6 h-1 bg-emerald-700 mb-1 opacity-100 transition-opacity"
            style={{ opacity: isOpen ? "0" : "1" }}
          ></div>
          <div
            className="w-6 h-1 bg-emerald-700 transition-transform"
            style={{
              transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "",
            }}
          ></div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Projects", link: "/projects" },
            { name: "Amenities", link: "/amenities" },
            { name: "Blogs", link: "/blogs" },
          ].map((item) => (
            <li key={item.name} className="group">
              <Link
                className={` ${
                  pathName === item.link
                    ? "text-emerald-300 font-medium border-b"
                    : "text-gray-100"
                } group-hover:border-b border-emerald-100 ease-linear duration-75`}
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-emerald-700 text-white px-4 rounded-md py-2"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
            >
              <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
                {[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about" },
                  { name: "Projects", link: "/projects" },
                  { name: "Amenities", link: "/amenities" },
                  { name: "Blogs", link: "/blogs" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.link} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="bg-emerald-700 text-white px-6 rounded-md py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
