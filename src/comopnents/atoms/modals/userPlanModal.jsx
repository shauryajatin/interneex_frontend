import React from 'react';
import { Field, Form, Formik } from 'formik';

const UserPlanModal = ({ isOpen, onClose, userInfo, plan, handlePayment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content text-black">
          <h2 className="text-2xl font-bold mb-4">Confirm Your Plan</h2>
          <p className="mb-2"><strong>Name:</strong> {userInfo.name}</p>
          <p className="mb-2"><strong>Email:</strong> {userInfo.email}</p>
          <p className="mb-2"><strong>Phone Number:</strong> {userInfo.number}</p>
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-xl font-bold mb-2">{plan.price}</p>
          <p className="text-sm mb-4">{plan.duration}</p>
          <button
            onClick={() => handlePayment(plan)}
            className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPlanModal;
