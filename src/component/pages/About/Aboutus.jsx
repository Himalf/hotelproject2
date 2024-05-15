import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-mainColor">
        About Hotel Babari Pvt. Ltd.
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Hotel Babari Pvt. Ltd. is a premier hotel located in Sinamaina-2,
          Rupandehi, Nepal. We are committed to providing our guests with
          exceptional service and unforgettable experiences during their stay.
        </p>
        <p className="text-lg mb-4">
          Whether you're traveling for business or leisure, our hotel offers
          comfortable accommodations, modern amenities, and personalized service
          to ensure a pleasant stay.
        </p>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg mb-2">Contact us:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:hotelbabari@gmail.com" className="text-blue-500">
                hotelbabari@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span> 071422080
              ,9857024734
            </li>
            <li>
              <span className="font-semibold">VAT No.:</span> 606002343
            </li>
            <li>
              <span className="font-semibold">Location:</span> Sainamaina-2,
              Sorauli,Rupandehi, Nepal
            </li>
          </ul>
        </div>
        <p className="text-lg">
          We look forward to welcoming you to Hotel Babari Pvt. Ltd. for an
          unforgettable stay.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
