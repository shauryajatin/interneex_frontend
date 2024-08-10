import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 py-8 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <a href="/" className="flex items-center">
              {/* <img
                src={blueLogo}
                className="h-10 mr-2"
                alt="Modgenics Logo"
              /> */}
              <span className="sm:text-center pl-28 pr-25 lg:px-2 lg:self-center text-3xl  whitespace-nowrap dark:text-white">
                Interneex
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-5">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/industries" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-sm font-nexaBold text-gray-900 dark:text-white">
                India
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                +91 8790504044<br />
                Address - Towr B, ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
              </p>
            </div>
            <div className="sm:hidden lg:block">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a href="#Privacy" className="hover:underline" target="_blank">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#T&C" className="hover:underline" target="_blank">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}Interneex™. All Rights Reserved.
          </span>
          <div className="flex mt-4 lg:mt-0 space-x-5">
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGlobe className="h-6 w-6" />
            </a>
          </div>
          <div className="lg:hidden mt-4">
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a href="#Privacy" className="hover:underline" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#T&C" className="hover:underline" target="_blank">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
