import React from "react";
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 py-8 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Address Section */}
          <div>
            <h2 className="text-white text-2xl mb-4 text-center lg:text-left">Interneex</h2>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center lg:justify-stat lg:text-left ">
                <FaMapMarkerAlt className="mr-2 mt-1 h-8 w-8" />
                <span>Address - Towr B, ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</span>
              </li>
              <li className="flex items-center lg:items-start">
                <FaPhone className="mr-2 mt-1" />
                <span>+91 8790504044</span>
              </li>
              <li className="flex items-center lg:items-start">
                <FaEnvelope className="mr-2 mt-1" />
                <span>Info@interneex.com</span>
              </li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0828742361227!2d77.36992837495656!3d28.62727818432021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f6bf0e729b%3A0x4c68e44d9e70a67f!2sI-Thum%20Tower%20-%20office%20space%20in%20IThum%20Noida%20Sector%2062!5e0!3m2!1sen!2sin!4v1723467093107!5m2!1sen!2sin" 
              height="250" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>

          {/* Services Section */}
          <div>
        
            <ul className="text-gray-400 space-y-2">
            <a href="#about" className="hover:underline block">About</a>
              <a href="#services" className="hover:underline block">Services</a>
              <a href="#pricing" className="hover:underline block">Pricing</a>
              <a href="#testimonials" className="hover:underline block">Testimonials</a>
            
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-white text-xl mb-4">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#about" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#services" className="hover:underline">Term and Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Interneex.
          </span>
          {/* <div className="flex space-x-5">
            <a href="#" className="text-green-500 hover:text-green-700 dark:hover:text-green-500">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500">
              <FaPhoneAlt className="h-6 w-6" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
