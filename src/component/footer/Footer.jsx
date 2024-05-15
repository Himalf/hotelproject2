import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Phone: 071422080 9857024734</p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:mail.hotelbabari@gmail.com"
              className="text-blue-500"
            >
              mail.hotelbabari@gmail.com
            </a>
          </p>
          <p>VAT No.: 606002343</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p>Sainamaina-2, Sorauli </p>
          <p>Rupandehi,Nepal</p>
          <div className="mb-4">
            {/* Google Maps Embed API */}
            <iframe
              title="Hotel Location"
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2276.6763727457347!2d83.46407345764107!3d27.601091982790004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996ebd05e30581b%3A0xa2a468d34b146f8c!2sHotel%20Babari!5e0!3m2!1sen!2snp!4v1646946651855!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100071334680058"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col items-center">
        <p className="text-sm mb-4">
          &copy; 2024 Hotel Babari Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-xs">
          Designed and developed with by the teams of Hotel Babari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
