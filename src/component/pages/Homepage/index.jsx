import React from "react";
import Backimage from "./Backimage";
import Ourservice from "../Services/Ourservice";
import Galleries from "../Gallery/Galleries";
// import Homepage from "./backimage";

const index = () => {
  return (
    <div>
      <Backimage />
      <div className="mb-10">
        <div>
          <h1 className="text-mainColor font-bold text-3xl text-center mb-2">
            Our services
            <hr className="text-mainColor w-50" />
          </h1>
        </div>
        <Ourservice />
        <Galleries className="" />
      </div>
    </div>
  );
};

export default index;
