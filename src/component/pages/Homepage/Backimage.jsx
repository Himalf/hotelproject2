import React from "react";
import Navbar from "../../Navigation/Navbar";
import Hotelbg from "../../../assets/Image/hotelday.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";

const Backimage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative">
        <div
          className="h-80 md:h-96 lg:h-120 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Hotelbg})`,
          }}
        >
          <div className="text-blue-900 font-bold   text-right">
            071422080 , 9857024734
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Welcome to Hotel Babari
              </h1>
              <p className="text-lg md:text-xl lg:text-xl">
                Experience luxury and comfort like never before.
              </p>
              <p className="text-lg md:text-xl lg:text-md">
                Sainamaina-02, sorauli
              </p>
              <p className="text-lg md:text-xl lg:text-md">Rupandehi,Nepal</p>

              <button
                className="mt-8 text-white py-2 px-4 rounded-full bg-mainColor hover:bg-white hover:text-black transition duration-300"
                onClick={() => {
                  navigate("/book");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-8"></div>
      </div>
    </div>
  );
};

export default Backimage;
