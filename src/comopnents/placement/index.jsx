import React from 'react';

const PlacementStats = () => {
  return (
    <div className="bg-white text-black p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industry Leading Placements</h2>
          <p>Kick start your Data Science career today with our flagship program in collaboration with E&ICT IIT Guwahati. Learn Data Science with top engineers. Challenge yourself by building real time projects.</p>
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

        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded">
            Download Placement Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
