"use client";
import React, { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi2";
import Modal from "./Modal";
import PageModal from "./PageModal";

function PageModalCta() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    function setInitialPopup() {
      setShowForm(true);
    }
    setTimeout(setInitialPopup, 8000);

    return function () {
      clearTimeout(setInitialPopup);
    };
  }, []);

  return <>{showForm && <PageModal setShowForm={setShowForm} />}</>;
}

export default PageModalCta;
