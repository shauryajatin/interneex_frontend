import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-purple-100 rounded-lg shadow-lg w-11/12 md:w-1/3 lg:w-1/3 p-6 relative">
        {/* Close Button at the Top */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl text-black font-bold mb-4 text-left">Request a Callback <span role="img" aria-label="wave">👋</span></h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name *
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email *
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +91
                  </span>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Mobile Number"
                    className="w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{ color: 'black', backgroundColor: 'white' }}
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                By continuing, you confirm that you have read and agreed to our <a href="#" className="text-purple-500">Terms</a> and <a href="#" className="text-purple-500">Privacy Policy</a>.
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-400 to-pink-500  text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  CONTINUE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
