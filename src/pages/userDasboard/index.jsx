import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../utils/constants";
import Navbar from "../../comopnents/navbar";
import Footer from "../../comopnents/footer";
import Modal from "../../comopnents/atoms/modals/formModal";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User is not authenticated");
        }

        const response = await axios.get(`${API_BASE_URL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.user);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <Navbar homeIcon={true} openModal={openModal}/>
      <div className="min-h-screen bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900">Dashboard</h1>
          <p className="text-lg text-gray-600 mt-2">Welcome to your personalized dashboard.</p>
        </div>

        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info */}
          <div className="col-span-1 bg-white shadow-lg rounded-lg p-8">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Information</h2>
              <p className="text-xl font-medium text-gray-800 mb-2"><strong>Name:</strong> {userData.name}</p>
              <p className="text-xl font-medium text-gray-800 mb-2"><strong>Email:</strong> {userData.email}</p>
              <p className="text-xl font-medium text-gray-800 mb-2"><strong>Phone Number:</strong> {userData.number}</p>
            </div>
          </div>

          {/* Course Details */}
          <div className="col-span-2 bg-white shadow-lg rounded-lg p-8 text-left" >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Batch/Course Details</h2>
            {userData.hasPurchasedCourse && userData.courseDetails ? (
              <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-indigo-700 mb-4">{userData.courseDetails.courseName}</h4>
                <p className="text-xl text-gray-800 mb-2"><strong>Duration:</strong> {userData.courseDetails.courseDuration}</p>
                <p className="text-xl text-gray-800 mb-2"><strong>Purchase Date:</strong> {new Date(userData.courseDetails.purchaseDate).toLocaleDateString()}</p>
                <p className="text-xl text-gray-800"><strong>Receipt ID:</strong> {userData.courseDetails.receiptId}</p>
              </div>
            ) : (
              <p className="text-xl text-gray-500">No batches selected</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Dashboard;
