import React from "react";
import CtaButton from "./CtaButton";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi2";

function CtaLinks() {
  return (
    <section className="absolute top-1/2 left-0 rotate-90">
      <div className="mt-6 flex space-x-4 btn">
        <CtaButton />
        <Link
          href="https://drive.google.com/drive/folders/1ia7TbgcEb_qvsWVUSG_dDWSrTersHebr?usp=sharing"
          target="_blank"
          className="text-lg flex items-center bg-amber-700 text-white px-6 py-2 rounded-md shadow-md"
        >
          <span>
            <HiArrowDown className="me-1" />
          </span>
          <p> Download Brochure</p>
        </Link>
      </div>
    </section>
  );
}

export default CtaLinks;
