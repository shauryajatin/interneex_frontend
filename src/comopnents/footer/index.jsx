import React from "react";
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 py-10 lg:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Address Section with Logo */}
          <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0 lg:col-span-2 text-center lg:text-left">
            {/* <img href='https://i.ibb.co/XSkFCb3/interneex-1.png' alt="Interneex Logo" className="w-32 mb-4" /> */}
            <h2 className="text-4xl text-bold mb-4">Interneex</h2>
            <ul className="space-y-2 text-gray-400 text-lg">
              <li className="flex flex-col items-center lg:flex-row lg:items-start">
                <FaMapMarkerAlt className="mr-2" />
                <span>Towr B, ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</span>
              </li>
              <li className="flex flex-col items-center lg:flex-row lg:items-start">
                <FaPhone className="mr-2" />
                <span>+91 8790504044</span>
              </li>
              <li className="flex flex-col items-center lg:flex-row lg:items-start">
                <FaEnvelope className="mr-2" />
                <span>Info@interneex.com</span>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Programs</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#pricing"  className="hover:underline">Begginers</a>
              </li>
              <li>
                <a href="#pricing"  className="hover:underline">Moderate</a>
              </li>
              <li>
                <a href="#pricing"  className="hover:underline">Expert</a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sections</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#courses" className="hover:underline">Courses</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">Service</a>
              </li>
              <li>
                <a href="#alumni" className="hover:underline">Alumni</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          {/* <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">E</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:flex-1 px-4 py-2 text-black rounded"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
            <ul className="flex space-x-4 mt-4 justify-center lg:justify-start">
              <li><a href="#" className="text-green-500 hover:text-green-700"><FaWhatsapp /></a></li>
              <li><a href="#" className="text-red-600 hover:text-red-800"><FaPhoneAlt /></a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-600"><FaEnvelope /></a></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <span className="text-lg text-gray-400 text-center">
            © 2024 Interneex. All rights reserved.
          </span>
          <Link to="/T&C" className="text-lg text-gray-400 text-center">
             Terms and Conditions 
            </Link>
            <Link to="/Privacy" className="text-lg text-gray-400 text-center">
             Privacy Policy
            </Link>
            <Link to="/Refund-Policy" className="text-lg text-gray-400 text-center">
             Refund Policy
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
