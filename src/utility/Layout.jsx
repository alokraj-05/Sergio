import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatButton from "./floatButton";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
