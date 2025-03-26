import React from "react";

import Form from "./Form";

function ContactForm() {
  return (
    <section>
      <section className="max-w-7xl mx-auto py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to Karnasree Farm Meadows, where the passion for
              agriculture meets love for the environment. Our mission has always
              been to preserve soil health and use water sustainably, without
              harming the water table. With over 800+ Farm Villas with 6 Guntas
              land in Phase-1 & 2. We offer a unique opportunity to connect with
              nature and create wealth. Our eco-friendly farming methods have a
              positive social impact on the surrounding community.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">📍</span>
                <p className="text-gray-700">
                  Karna Sree Utility Nest, 72\9 6th Floor, Bellandur Village &
                  Post,Varthur, Hobli, Bengaluru, Karnataka 560103
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">📞</span>
                <p className="text-gray-700">+91 9916953333, +91 8073185844</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">✉️</span>
                <p className="text-gray-700">info@karnasreefarms.com</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-emerald-100 rounded-lg">
            <Form />
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactForm;
