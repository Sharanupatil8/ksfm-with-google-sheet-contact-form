"use client";
import React, { useState } from "react";
import { submitFormToGoogleSheets } from "../_lib/actions";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    siteVisitDate: "",
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
    if (!formData.siteVisitDate)
      newErrors.siteVisitDate = "Select a site visit date";

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
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          siteVisitDate: "",
          message: "",
        });
        setSuccessMessage("");
      }, 2000);
    } else {
      setErrors({ submit: response.message });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          disabled={isSubmitting}
          className="w-full p-3 border border-gray-300 rounded-lg"
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
          disabled={isSubmitting}
          className="w-full p-3 border border-gray-300 rounded-lg"
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
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        disabled={isSubmitting}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        name="phoneNumber"
        type="tel"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        disabled={isSubmitting}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
      )}

      <input
        name="siteVisitDate"
        type="date"
        value={formData.siteVisitDate}
        onChange={(e) =>
          setFormData({ ...formData, siteVisitDate: e.target.value })
        }
        min={new Date().toISOString().split("T")[0]}
        disabled={isSubmitting}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      {errors.siteVisitDate && (
        <p className="text-red-500 text-sm">{errors.siteVisitDate}</p>
      )}

      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        disabled={isSubmitting}
        className="w-full p-3 border border-gray-300 rounded-lg"
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
      {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}
    </form>
  );
}

export default Form;
