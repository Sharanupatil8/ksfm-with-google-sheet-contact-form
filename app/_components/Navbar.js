import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center border border-emerald-900 max-w-7xl   justify-between w-full mx-auto h-[80px] rounded-3xl   px-4 md:px-6 ">
      <Link href="/" className="overflow-hidden">
        <Image
          src="/assets/logo.png"
          alt="Karnasree farms logo"
          width="100"
          height="80"
          className="w-full h-[90px] object-cover"
        />
      </Link>
      <ul className="flex space-x-8 text-lg">
        <li className="group">
          <Link
            className="group-hover:border-b border-emerald-700 ease-linear   duration-75 "
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>{" "}
        <li>
          <Link href="/">Projects</Link>
        </li>{" "}
        <li>
          <Link href="/">Amenities</Link>
        </li>{" "}
        <li>
          <Link href="/">Blogs</Link>
        </li>{" "}
        <li className=" ">
          <Link
            href="/"
            className="bg-emerald-700 text-white px-4  rounded-sm py-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
