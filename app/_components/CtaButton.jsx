"use client";
import React, { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi2";
import Modal from "./Modal";

function CtaButton() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    function setInitialPopup() {
      setShowForm(true);
    }
    setTimeout(setInitialPopup, 8000);

    return function () {
      clearInterval(setInitialPopup);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="text-lg flex items-center rounded-md shadow-md bg-emerald-700 text-white px-6 py-2"
      >
        <span>
          <HiCalendar className="h-5 w-5 me-2" />
        </span>
        <p className="text-lg">Book Site Visit</p>
      </button>
      {showForm && <Modal setShowForm={setShowForm} />}
    </>
  );
}

export default CtaButton;
