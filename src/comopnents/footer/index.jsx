import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 flex" style={{ padding: '2rem 0' }}>
      <div className="mx-auto w-full max-w-screen-xl" style={{ padding: '2rem', margin: '0 auto' }}>
        <div className="md:flex md:gap-40 lg:flex" style={{ gap: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <a href="/" className="flex items-center">
              {/* <img
                src={blueLogo}
                className="h-10 mr-2"
                alt="Modgenics Logo"
              /> */}
              <span className="self-center text-3xl font-nexaBold whitespace-nowrap dark:text-white" style={{ letterSpacing: '0.05em' }}>
                Interneex
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 space-x-10 gap-8 sm:gap-8 sm:grid-cols-3" style={{ gap: '2rem' }}>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-4 lg:ml-25 ">
                <li>
                  <a href="/company" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
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
                +91 8790504044<br/>
                Address - Towr B, ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
              </p>
            </div>
            <div className="hidden sm:block">
              <ul className="text-gray-500 dark:text-gray-400 font-medium lg:ml-20">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex mb-2 sm:items-center sm:justify-between lg:flex lg:gap-56 md:flex md:gap-44">
          <span className="text-sm sm:mb-4 text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            {/* <a href="https://flowbite.com/" className="hover:underline"> */}
             Interneex™
            {/* </a> */}
            . All Rights Reserved.
          </span>
          <div className="block lg:hidden sm:mt-4">
              <ul className="text-gray-500 dark:text-gray-400 font-medium lg:ml-20 mt-4">
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
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
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
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
