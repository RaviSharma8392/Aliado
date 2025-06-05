import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MiddleButton from "../components/Enquiry";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <MiddleButton />
    </div>
  );
};

export default AppLayout