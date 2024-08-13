import React from "react";

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


const PricingCard = ({plan}) => {
  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(plan.price.replace('₹', '').replace(',', '')), // Convert price to number
          currency: 'INR',
          receipt: `receipt_order_${plan.name}`,
          notes: {
            plan_name: plan.name,
            plan_duration: plan.duration,
          },
        }),
      });

      const order = await response.json();
     const REACT_APP_RAZORPAY_KEY_ID="rzp_test_5r2RhPz25jD50y"

      if (order.id) {
        const options = {
          key:REACT_APP_RAZORPAY_KEY_ID, // Replace with your key ID from Razorpay Dashboard
          amount: order.amount,
          currency: order.currency,
          name: "Your Company Name",
          description: `Purchase of ${plan.name} Plan`,
          order_id: order.id,
          handler: function (response) {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          },
          prefill: {
            name: "User Name",
            email: "user@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Some Address",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert('Failed to create order. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment', error);
      alert('Error during payment. Please try again.');
    }
  };

  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden shadow-xl ${plan.backgroundColor} ${plan.textColor} p-6 m-4 text-center`}
    >
      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
      <p className="text-xl font-bold mb-2">{plan.price}</p>
      <p className="text-sm mb-4">{plan.duration}</p>
      <ul className="ml-1 text-left space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-sm mb-1">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handlePayment}
        className="mb-4 bg-purple-100 text-black w-full py-2 rounded-lg hover:bg-gray-100 transition duration-300 mt-4"
      >
        Enrol Now
      </button>
    </div>
  );
};


const Pricing = () => {
  return (
    <div className="bg-slate-900 py-10 " id="pricing">
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
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
