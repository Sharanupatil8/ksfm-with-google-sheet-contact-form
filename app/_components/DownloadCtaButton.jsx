"use client";
import React, { useEffect, useState } from "react";
import { HiArrowDown, HiCalendar } from "react-icons/hi2";
import Modal from "./Modal";
import DownloadBrochureModal from "./DownloadBrochureModal";

function DownloadCtaButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="text-lg flex items-center rounded-md shadow-md bg-amber-700 text-white px-6 py-2"
      >
        <span>
          <HiArrowDown className="me-1" />
        </span>

        <p className="text-lg">Download brochure</p>
      </button>
      {showForm && <DownloadBrochureModal setShowForm={setShowForm} />}
    </>
  );
}

export default DownloadCtaButton;
