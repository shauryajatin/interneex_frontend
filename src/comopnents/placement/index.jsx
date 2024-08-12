import React from "react";
import "./index.css";
const PlacementStats = () => {
  return (
    <div className="bg-white text-black p-6 lg:px-4 lg:py-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold mb-4 py-7">
            Mentoring Students
          </h2>
          <p className="text-xl lg:px-40 py-4 lg:py-5">
            Interneex is a leading tech education platform offering
            comprehensive training in full stack development to equip students
            with practical skills and connect them to valuable internship
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
          <div>
            <h3 className="text-2xl font-bold">30,000+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">40 LPA</h3>
            <p>Highest Salary</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">15 LPA</h3>
            <p>Average Salary</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">700+</h3>
            <p>Hiring Partners</p>
          </div>
        </div>

        <div className="text-center py-10">
          <button className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-slate-600 text-white font-bold py-2 px-8 rounded">
            Download Placement Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
