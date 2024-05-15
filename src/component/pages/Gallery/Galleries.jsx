import React from "react";
import hotel2 from "../../../assets/Image/hotel2.jpg";
import hotelday from "../../../assets/Image/hotelday.jpg";
import food1 from "../../../assets/Image/food1.jpg";
import kitchen from "../../../assets/Image/kitchen.jpg";
import hotelnight from "../../../assets/Image/hotelnight.jpg";
import p1 from "../../../assets/Image/1.jpg";
import p2 from "../../../assets/Image/2.jpg";
import p3 from "../../../assets/Image/3.jpg";
import p4 from "../../../assets/Image/4.jpg";
import p5 from "../../../assets/Image/5.jpg";
import p6 from "../../../assets/Image/6.jpg";
import p7 from "../../../assets/Image/7.jpg";
import p8 from "../../../assets/Image/8.jpg";

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
            alt="Hotel Night"
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
            src={hotelday}
            alt="Hotel Day"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p1}
            alt="Image 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p2}
            alt="Image 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p3}
            alt="Image 3"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p4}
            alt="Image 4"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p5}
            alt="Image 5"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p6}
            alt="Image 6"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p7}
            alt="Image 7"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={p8}
            alt="Image 8"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
