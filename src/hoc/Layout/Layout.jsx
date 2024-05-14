import React from "react";
import Navbar from "../../component/Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";
const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
