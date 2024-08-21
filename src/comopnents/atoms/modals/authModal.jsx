import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ForgotPasswordModal from './forgetPassword';

const AuthModal = ({ isOpen, onClose, onSubmit }) => {
  const [authMode, setAuthMode] = useState('login'); // Track login/signup mode
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  // Validation Schema for Formik
  const validationSchema = Yup.object().shape({
    name: authMode === 'signup' ? Yup.string().required('Name is required') : null,
    email: Yup.string().email('Invalid email address').required('Email is required'),
    number: authMode === 'signup' ? Yup.string().required('Number is required') : null,
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    number: '',
    password: '',
  };
  const toggleForgotPasswordModal = () => {
    setShowForgotPasswordModal(!showForgotPasswordModal);
};

  const handleSubmit = (values) => {
    onSubmit(authMode, values);
    // if (authMode === 'login') {
    //   toast.success('Successfully logged in!');
    // } else {
    //   toast.success('Successfully signed up!');
    // }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4">
            {authMode === 'login' ? 'Login' : 'Sign Up'}
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {authMode === 'signup' && (
                  <>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`p-2 w-full border rounded-md text-black ${touched.name && errors.name ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="number"
                        placeholder="Number"
                        className={`p-2 w-full border rounded-md text-black ${touched.number && errors.number ? 'border-red-500' : ''}`}
                      />
                      <ErrorMessage name="number" component="div" className="text-red-500 text-sm" />
                    </div>
                  </>
                )}
                <div className="mb-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`p-2 w-full border rounded-md text-black ${touched.email && errors.email ? 'border-red-500' : ''}`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`p-2 w-full border rounded-md text-black ${touched.password && errors.password ? 'border-red-500' : ''}`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md"
                >
                  {authMode === 'login' ? 'Login' : 'Sign Up'}
                </button>
                <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={toggleForgotPasswordModal}
            >
                Forgot Password?
            </button>

            {showForgotPasswordModal && (
                <ForgotPasswordModal toggleModal={toggleForgotPasswordModal} />
            )}
              </Form>
            )}
          </Formik>
          <button
            type="button"
            className="mt-4 text-blue-500 hover:underline focus:outline-none"
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
          >
            {authMode === 'login'
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;


