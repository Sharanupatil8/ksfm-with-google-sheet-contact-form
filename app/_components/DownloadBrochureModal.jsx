"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { submitFormToGoogleSheets } from "../_lib/actions";

function DownloadBrochureModal({ setShowForm }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    message: "",
    leadCapturedOn: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.phoneNumber.match(/^\d{10}$/))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    const response = await submitFormToGoogleSheets(formData);

    if (response.success) {
      setSuccessMessage(response.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        siteVisitDate: "",
        message: "",
        leadCapturedOn: new Date().toISOString().split("T")[0],
      });

      // Close the form after 3 seconds
      setTimeout(() => {
        window.location.href =
          "https://drive.google.com/file/d/1b1339Psb8MMoIZhKW4bDnH3_dC9XgIef/view?usp=sharing";
      }, 2000);
    } else {
      setErrors({ submit: response.message });
    }

    setIsSubmitting(false);
  };

  return createPortal(
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen fixed top-0 left-0 w-full bg-emerald-900/80 z-[100] overflow-hidden"
      >
        <div className="max-w-4xl flex items-center justify-center h-full mx-auto container px-4 py-8">
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl flex flex-col px-4 py-8 md:px-6 md:py-12 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-end w-full">
              <HiXMark
                className="w-8 h-8 text-gray-500 cursor-pointer"
                onClick={() => setShowForm(false)}
                disabled={isSubmitting}
              />
            </div>
            <h3 className="text-gray-800 font-bold border-b border-gray-100 inline-block pb-1 mb-2 text-2xl md:text-3xl font-ptserif">
              Book Your Site Visit Today :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}

              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              name="phoneNumber"
              type="tel"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={isSubmitting}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={isSubmitting}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Send message"}
            </button>

            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
          </motion.form>
        </div>
      </motion.section>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}

export default DownloadBrochureModal;
