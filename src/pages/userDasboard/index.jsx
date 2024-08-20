import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../utils/constants";
import Navbar from "../../comopnents/navbar";
import Footer from "../../comopnents/footer";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <Navbar />
    <div className="min-h-screen bg-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-10">
        {/* User Info */}
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">{userData.number}</p>
          </div>
        </div>

        {/* Course Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Batch/Course Details</h3>
          {userData.hasPurchasedCourse && userData.courseDetails ? (
            <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">{userData.courseDetails.courseName}</h4>
              <p className="text-gray-700"><strong>Duration:</strong> {userData.courseDetails.courseDuration}</p>
              <p className="text-gray-700"><strong>Purchase Date:</strong> {new Date(userData.courseDetails.purchaseDate).toLocaleDateString()}</p>
              <p className="text-gray-700"><strong>Receipt ID:</strong> {userData.courseDetails.receiptId}</p>
            </div>
          ) : (
            <p className="text-gray-500">No batches selected</p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
