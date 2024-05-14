import React from "react";
import {
  FaUtensils,
  FaBed,
  FaShower,
  FaCar,
  FaWifi,
  FaSwimmingPool,
  FaBell,
  FaTv,
  FaChild,
} from "react-icons/fa";

const Ourservice = () => {
  const services = [
    {
      icon: <FaUtensils />,
      name: "Room Service",
      description:
        "Enjoy delicious meals delivered to your room, available 24/7.",
    },
    {
      icon: <FaBed />,
      name: "Accommodation",
      description:
        "Relax in our comfortable and spacious rooms, perfect for a restful stay.",
    },
    {
      icon: <FaShower />,
      name: "Bathroom Amenities",
      description:
        "Pamper yourself with our premium bathroom amenities and toiletries.",
    },
    {
      icon: <FaCar />,
      name: "Valet Parking",
      description:
        "Leave the hassle of parking to us with our convenient valet parking service.",
    },
    {
      icon: <FaWifi />,
      name: "High-Speed Internet",
      description:
        "Stay connected with our complimentary high-speed Wi-Fi access.",
    },
    {
      icon: <FaSwimmingPool />,
      name: "Swimming Pool",
      description:
        "Take a refreshing dip in our sparkling swimming pool, perfect for relaxation.",
    },

    {
      icon: <FaTv />,
      name: "Entertainment",
      description:
        "Enjoy a wide range of channels and entertainment options on our in-room TVs.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 ">
      {services.map((service, index) => (
        <div
          className="w-80 p-8 rounded-xl border border-gray-300 shadow-md hover:shadow-lg bg-white hover:bg-gray-50 text-center"
          key={index}
        >
          <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
          <div className="text-xl font-semibold text-gray-800 mb-2">
            {service.name}
          </div>
          <div className="text-sm text-gray-600">{service.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Ourservice;
