import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatableSelect from 'react-select/creatable';
import API_BASE_URL from "../../../utils/constants";
const Modal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      // Scroll the modal content to the top when it opens on small screens
      const modalContent = document.getElementById('modal-content');
      modalContent.scrollTop = modalContent.scrollHeight / 4; // Adjust this as needed
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    college: Yup.string().required("College is required"),
    skills: Yup.array().min(1, "At least one skill is required"),
    experience: Yup.string().required("Year of experience is required"),
    location: Yup.string().required("Location is required"),
    source: Yup.string().required("Please let us know how you came to know about us"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    college: "",
    skills: [],
    experience: "",
    location: "",
    source: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const loadingToast = toast.loading('Sending email...');

      const response = await fetch(`${API_BASE_URL}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const result = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success('Email sent successfully!', { autoClose: 3000 });
        resetForm();
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to send email.');
      console.error('Failed to send email:', error);
    }
  };

  const renderStepContent = (step, setFieldValue) => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <Field
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  +91
                </span>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <Field
                type="text"
                name="college"
                placeholder="Enter Your College"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="college"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
            <div className="mb-4">
              <CreatableSelect
                isMulti
                name="skills"
                placeholder="Type and press enter to add skills"
                className="basic-multi-select text-black"
                classNamePrefix="select"
                formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
                onChange={(selectedOptions) => setFieldValue('skills', selectedOptions.map(option => option.value))}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minHeight: '40px',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                  }),
                }}
              />
              <ErrorMessage
                name="skills"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
            <div className="mb-4">
              <Field
                type="number"
                name="experience"
                placeholder="Enter Your Experience"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="experience"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <Field
                type="text"
                name="location"
                placeholder="Enter Your Location"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
            <div className="mb-4">
              <Field
                type="text"
                name="source"
                placeholder="Enter the source"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ color: 'black', backgroundColor: 'white' }}
              />
              <ErrorMessage
                name="source"
                component="div"
                className="text-red-500 text-sm mt-1 text-left"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
        <div id="modal-content" className="bg-purple-100 rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl p-6 sm:p-8 mx-4 sm:mx-0 my-8 relative overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <h2 className="text-2xl text-black font-bold mb-6 text-left">Request a Callback</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="block sm:hidden">
                  {renderStepContent(step, setFieldValue)}
                  <div className="flex justify-between mt-6 space-x-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        Previous
                      </button>
                    )}
                    {step < 3 && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        Next
                      </button>
                    )}
                  </div>
                  {step === 3 && (
                    <div className="flex justify-between mt-4 space-x-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        CONTINUE
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        CANCEL
                      </button>
                    </div>
                  )}
                </div>

                <div className="hidden sm:block">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
                    <div className="mb-4">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ color: 'black', backgroundColor: 'white' }}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ color: 'black', backgroundColor: 'white' }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
                    <div className="mb-4">
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          +91
                        </span>
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Mobile Number"
                          className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          style={{ color: 'black', backgroundColor: 'white' }}
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                    <div className="mb-4">
                      <Field
                        type="text"
                        name="college"
                        placeholder="Enter Your College"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ color: 'black', backgroundColor: 'white' }}
                      />
                      <ErrorMessage
                        name="college"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <CreatableSelect
                      isMulti
                      name="skills"
                      placeholder="Type and press enter to add skills"
                      className="basic-multi-select text-black"
                      classNamePrefix="select"
                      formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
                      onChange={(selectedOptions) => setFieldValue('skills', selectedOptions.map(option => option.value))}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: '40px',
                        }),
                        menu: (provided) => ({
                          ...provided,
                          zIndex: 9999,
                        }),
                      }}
                    />
                    <ErrorMessage
                      name="skills"
                      component="div"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
                    <div className="mb-4">
                      <Field
                        type="number"
                        name="experience"
                        placeholder="Enter Your Experience"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ color: 'black', backgroundColor: 'white' }}
                      />
                      <ErrorMessage
                        name="experience"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                    <div className="mb-4">
                      <Field
                        type="text"
                        name="location"
                        placeholder="Enter Your Location"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ color: 'black', backgroundColor: 'white' }}
                      />
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="source"
                      placeholder="Enter the source"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{ color: 'black', backgroundColor: 'white' }}
                    />
                    <ErrorMessage
                      name="source"
                      component="div"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      CONTINUE
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Modal;
