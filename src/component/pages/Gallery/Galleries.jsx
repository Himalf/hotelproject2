import React from "react";
import hotel2 from "../../../assets/Image/hotel2.jpg";
import hotelday from "../../../assets/Image/hotelday.jpg";
import food1 from "../../../assets/Image/food1.jpg";
import kitchen from "../../../assets/Image/kitchen.jpg";
import hotelnight from "../../../assets/Image/hotelnight.jpg";
import hotel1 from "../../../assets/Image/hotel1.jpg";

const Galleries = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-mainColor">
        Our Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative aspect-w-4 aspect-h-3 md:col-span-2">
          <img
            src={hotel2}
            alt="Hotel 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={hotelnight}
            alt="Hotel Day"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={food1}
            alt="Food 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={kitchen}
            alt="Kitchen"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={hotelnight}
            alt="Hotel Night"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={hotel1}
            alt="Hotel"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
