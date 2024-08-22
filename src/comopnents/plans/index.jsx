// import React from "react";
// import API_BASE_URL from "../../utils/constants";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const plans = [
//   {
//     name: "EXPERT",
//     price: "₹35,400",
//     duration: "3 months duration (Training + Non-paid Internship)",
//     features: [
//       "Live online classes & Recorded lectures",
//       "Top Mentors from big MNCs & IITs",
//       "Major and Minor Projects",
//       "Internal examinations",
//       "Interview preparation",
//       "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
//       "Job Assistance",
//       "3 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
//     ],
//     backgroundColor: "bg-lime-900",
//     textColor: "text-white",
//   },
//   {
//     name: "MODERATE",
//     price: "₹84,999",
//     duration:
//       "9 months duration (3 months training + 6 month non paid internship)",
//     features: [
//       "Live online classes & Recorded lectures",
//       "Top Mentors from big MNCs & IITs",
//       "Major and Minor Projects",
//       "Internal examinations",
//       "Interview preparation",
//       "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
//       "Job Assistance",
//       "6 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
//     ],
//     backgroundColor: "bg-cyan-900",
//     textColor: "text-white",
//   },
//   {
//     name: "BEGINNERS",
//     price: "₹1,17,999",
//     duration:
//       "12 months duration (6 months training + 6 month non paid internship)",
//     features: [
//       "Live online classes & Recorded lectures",
//       "Top Mentors from big MNCs & IITs",
//       "Major and Minor Projects",
//       "Internal examinations",
//       "Interview preparation",
//       "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
//       "Job Assistance",
//       "6 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
//     ],
//     backgroundColor: "bg-sky-900",
//     textColor: "text-white",
//   },
// ];



// const PricingCard = ({plan}) => {
//   const handlePayment = async () => {
//     try {
//       const amountInPaise = parseFloat(plan.price.replace('₹', '').replace(/,/g, '')) ; // Convert price to paise
  
//       const response = await fetch(`${API_BASE_URL}/create-order`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: amountInPaise,
//           currency: 'INR',
//           receipt: `receipt_order_${plan.name}`,
//           notes: {
//             plan_name: plan.name,
//             plan_duration: plan.duration,
//           },
//         }),
//       });
  
//       if (!response.ok) {
//         console.error('Failed to create order. Response status:', response.status);
//         alert('Failed to create order. Please try again.');
//         return;
//       }
  
//       const order = await response.json();
  
//       const razorpayKeyId = process.env.REACT_APP_RAZORPAY_KEY_ID;
  
//       if (order.id) {
//         const options = {
//           key: razorpayKeyId, // Use the key from the environment variable
//           amount: order.amount,
//           currency: order.currency,
//           name: "Interneex",
//           description: `Purchase of ${plan.name} Plan`,
//           order_id: order.id,
//           handler: function (response) {
//             toast.success("Payment successful! Payment ID: " + response.razorpay_payment_id);
//           },
//           // Removing the prefill object allows Razorpay to prompt the user for their details
//           notes: {
//             address: "Some Address",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };
  
//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } else {
//         console.error('Order ID not returned in response:', order);
//         alert('Failed to create order. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during payment:', error);
//       alert('Error during payment. Please try again.');
//     }
//   };
  

//   return (
//     <div
//       className={`max-w-sm rounded-xl overflow-hidden shadow-xl ${plan.backgroundColor} ${plan.textColor} p-6 m-4 text-center transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out`}
//     >
//       <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
//       <p className="text-xl font-bold mb-2">{plan.price}</p>
//       <p className="text-sm mb-4">{plan.duration}</p>
//       <ul className="ml-1 text-left space-y-2">
//         {plan.features.map((feature, index) => (
//           <li key={index} className="text-sm mb-1 ">
//             ✅ {feature}
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={handlePayment}
//         className="transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out mb-4 bg-purple-100 text-black w-full py-2 rounded-lg hover:bg-gray-100 transition duration-300 mt-4"
//       >
//         Enrol Now
//       </button>
//     </div>
//   );
// };


// const Pricing = () => {
//   return (
//     <div className="bg-slate-900 py-10 lg:my-20 " id="pricing">
//       <div className="bg-slate-900 text-white py-8 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-center uppercase">
//             Find the perfect fit for your budget
//           </h1>
//           <p className="text-center mt-4 text-xl">
//             Choose from our range of flexible pricing options that cater to your
//             specific needs.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center ">
//         {plans.map((plan, index) => (
//           <PricingCard key={index} plan={plan} className="" />
//         ))}
//       </div>
//       <ToastContainer
//   position="top-right"
//   autoClose={5000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
// />
//     </div>
//   );
// };

// export default Pricing;


import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthModal from "../atoms/modals/authModal"; // Assuming you have an AuthModal component
import UserPlanModal from "../atoms/modals/userPlanModal";


const plans = [
  {
    name: "EXPERT",
    price: "₹35,400",
    duration: "3 months duration (Training + Non-paid Internship)",
    features: [
      "Live online classes & Recorded lectures",
      "Top Mentors from big MNCs & IITs",
      "Major and Minor Projects",
      "Internal examinations",
      "Interview preparation",
      "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
      "Job Assistance",
      "3 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
    ],
    backgroundColor: "bg-lime-900",
    textColor: "text-white",
  },
  {
    name: "MODERATE",
    price: "₹84,999",
    duration:
      "9 months duration (3 months training + 6 month non paid internship)",
    features: [
      "Live online classes & Recorded lectures",
      "Top Mentors from big MNCs & IITs",
      "Major and Minor Projects",
      "Internal examinations",
      "Interview preparation",
      "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
      "Job Assistance",
      "6 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
    ],
    backgroundColor: "bg-cyan-900",
    textColor: "text-white",
  },
  {
    name: "BEGINNERS",
    price: "₹1,17,999",
    duration:
      "12 months duration (6 months training + 6 month non paid internship)",
    features: [
      "Live online classes & Recorded lectures",
      "Top Mentors from big MNCs & IITs",
      "Major and Minor Projects",
      "Internal examinations",
      "Interview preparation",
      "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
      "Job Assistance",
      "6 months Non paid Internship Experience Certificate valid in all companies across the Globe.",
    ],
    backgroundColor: "bg-sky-900",
    textColor: "text-white",
  },
];


const PricingCard = ({ plan }) => {


  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserPlanModalOpen, setIsUserPlanModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);



  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error parsing token:", error);
      return null;
    }
  }
  


  const handleAuthSubmit = async (mode, data) => {
    try {
      const url = mode === 'login' ? `${API_BASE_URL}/login` : `${API_BASE_URL}/register`;
      const response = await axios.post(url, data);

      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Set the Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Set the authenticated state to true
      setIsAuthenticated(true);

      // Close the auth modal
      closeAuthModal();
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    }
  };
  useEffect(() => {
    // Check if there's a token in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // const handleEnrollNow = () => {
  //   const token = localStorage.getItem("token");
  
  //   if (!token) {
  //     openAuthModal();
  //     return;
  //   }
  
  //   try {
  //     const decodedToken = jwt_decode(token); // Correct usage
  //     openUserPlanModal(decodedToken);
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //     alert("Error processing your request. Please try again.");
  //   }
  // };
  
  
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openUserPlanModal = (userInfo) => {
    setUserInfo(userInfo);
    setIsUserPlanModalOpen(true);
  };

  const closeUserPlanModal = () => {
    setIsUserPlanModalOpen(false);
  };

  const handleEnrollNow = () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      openAuthModal('signup'); // Pass 'signup' as the default mode
      return;
    }
  
    try {
      const decodedToken = parseJwt(token); // Use the custom JWT parsing function
      if (decodedToken) {
        openUserPlanModal(decodedToken);
      } else {
        console.error("Failed to decode the token");
        alert("Error processing your request. Please try again.");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Error processing your request. Please try again.");
    }
  };
  
  
  const handlePayment = async (plan) => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = parseJwt(token);
      const { name, email, number } = decodedToken;
  
      const amountInPaise = parseFloat(plan.price.replace("₹", "").replace(/,/g, "")) * 100;
  
      // Step 1: Create the order
      const response = await fetch(`${API_BASE_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `receipt_order_${plan.name}`,
          notes: {
            plan_name: plan.name,
            plan_duration: plan.duration,
            customer_name: name,
            customer_email: email,
            customer_number: number,
          },
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create order. Response status: ${response.status}`);
      }
  
      const order = await response.json();
      const razorpayKeyId = process.env.REACT_APP_RAZORPAY_KEY_ID;
  
      if (order.id) {
        const options = {
          key: razorpayKeyId,
          amount: order.amount,
          currency: order.currency,
          name: "Interneex",
          description: `Purchase of ${plan.name} Plan`,
          order_id: order.id,
          handler: async function (response) {
            try {
              // Payment successful, now verify it
              const verifyResponse = await fetch(`${API_BASE_URL}/verify-payment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  orderId: order.id,
                  paymentId: response.razorpay_payment_id,
                  notes: {
                    customer_email: email,
                    plan_name: plan.name,
                    plan_duration: plan.duration,
                  },
                }),
              });
  
              if (verifyResponse.ok) {
                const verifyResult = await verifyResponse.json();
                toast.success("Payment verified successfully! " + verifyResult.message);
              } else {
                const errorData = await verifyResponse.json();
                toast.error("Payment verification failed: " + errorData.message);
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              toast.error("Error verifying payment. Please try again.");
            }
          },
          prefill: {
            name,
            email,
            contact: number,
          },
          theme: {
            color: "#3399cc",
          },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
        closeUserPlanModal(); // Close the modal after opening Razorpay
      } else {
        console.error("Order ID not returned in response:", order);
        alert("Failed to create order. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Error during payment. Please try again.");
    }
  };
  

  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden shadow-xl ${plan.backgroundColor} ${plan.textColor} p-6 m-4 text-center transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out`}
    >
      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
      <p className="text-xl font-bold mb-2">{plan.price}</p>
      <p className="text-sm mb-4">{plan.duration}</p>
      <ul className="ml-1 text-left space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-sm mb-1 ">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleEnrollNow}
        className="transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out mb-4 bg-purple-100 text-black w-full py-2 rounded-lg hover:bg-gray-100 transition duration-300 mt-4"
      >
        Enroll Now
      </button>
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} onSubmit={handleAuthSubmit}    />
      <UserPlanModal
        isOpen={isUserPlanModalOpen}
        onClose={closeUserPlanModal}
        userInfo={userInfo}
        plan={plan}
        handlePayment={handlePayment}
      />
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="bg-slate-900 py-10 lg:my-20 " id="pricing">
      <div className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center uppercase">
            Find the perfect fit for your budget
          </h1>
          <p className="text-center mt-4 text-xl">
            Choose from our range of flexible pricing options that cater to your
            specific needs.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Pricing;
