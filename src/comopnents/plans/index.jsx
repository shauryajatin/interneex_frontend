import React from 'react';

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
      "3 months Non paid Internship Experience Certificate valid in all companies across the Globe."
    ],
    backgroundColor: "bg-lime-900",
    textColor: "text-white"
  },
  {
    name: "MODERATE",
    price: "₹84,999",
    duration: "9 months duration (3 months training + 6 month non paid internship)",
    features: [
      "Live online classes & Recorded lectures",
      "Top Mentors from big MNCs & IITs",
      "Major and Minor Projects",
      "Internal examinations",
      "Interview preparation",
      "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
      "Job Assistance",
      "6 months Non paid Internship Experience Certificate valid in all companies across the Globe."
    ],
    backgroundColor: "bg-blue-500",
    textColor: "text-white"
  },
  {
    name: "BEGINNERS",
    price: "₹1,17,999",
    duration: "12 months duration (6 months training + 6 month non paid internship)",
    features: [
      "Live online classes & Recorded lectures",
      "Top Mentors from big MNCs & IITs",
      "Major and Minor Projects",
      "Internal examinations",
      "Interview preparation",
      "One to one Mentorship from Current/Ex Employees of Top Companies like Microsoft, Amazon, Qualcomm etc.",
      "Job Assistance",
      "6 months Non paid Internship Experience Certificate valid in all companies across the Globe."
    ],
    backgroundColor: "bg-green-500",
    textColor: "text-white"
  }
];

const PricingCard = ({ plan }) => {
  return (
    <div className={`max-w-sm rounded-xl overflow-hidden shadow-xl ${plan.backgroundColor} ${plan.textColor} p-6 m-4 text-center`}>
      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
      <p className="text-xl font-bold">{plan.price}</p>
      <p className="text-sm mb-4">{plan.duration}</p>
      <ul className="list-disc ml-4 text-left">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-sm mb-1">{feature}</li>
        ))}
      </ul>
      <button className="mt-4 bg-white text-black w-full py-2 rounded-lg hover:bg-gray-100 transition duration-300">
        Enrol Now
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="bg-slate-900 py-10">
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
