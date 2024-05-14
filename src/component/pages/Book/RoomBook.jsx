import React from "react";

const RoomBook = () => {
  const handleContactNow = () => {
    // Replace this with actual logic to initiate contact
    alert("Contact Now button clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          For Booking Process
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          To book a room,hotel and to order food, please contact us via email or
          phone. Our team will assist you with the booking process.
        </p>
        <div className="mb-6">
          <p className="text-lg text-gray-800 font-semibold mb-2">
            Contact Information:
          </p>
          <p className="text-gray-700 mb-2">
            Email:{" "}
            <a href="mailto:info@example.com" className="text-blue-500">
              info@example.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            Phone:{" "}
            <a href="tel:+123-456-7890" className="text-blue-500">
              +123-456-7890
            </a>
          </p>
        </div>
        <div className="mb-6">
          <a
            href="mailto:info@example.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Mail Now
          </a>
          <a
            href="tel:+123-456-7890"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-4"
          >
            Contact Us
          </a>
        </div>
        <div>
          <p className="text-lg text-gray-800 font-semibold mb-2">Address:</p>
          <p className="text-gray-700 mb-2">123 Main Street</p>
          <p className="text-gray-700 mb-2">Cityville, State, 12345</p>
          <p className="text-gray-700">Country</p>
        </div>
      </div>
    </div>
  );
};

export default RoomBook;
