import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col  md:flex-row bg-slate-900 text-white h-full">
     <div className="p-6 lg:p-14  md:w-1/2 ">
  <div className="text-left">  {/* Ensure text alignment is set to left */}
    <p className="text-sm">4.6+ <span className="text-yellow-400">★★★★★</span> 2354 Reviews</p>
    <h1 className="text-4xl font-bold mt-2 mb-2 py-2 lg:py-4">Certification in Full Stack Data Science and AI</h1>
    <div className="bg-red-600 text-white text-sm font-medium py-1 px-2 inline-block rounded mb-4">
      Next Cohort Starting On 13th August
    </div>
    <p className="text-sm mb-1">In collaboration with:</p>
    <p className="text-sm font-bold">IIT Guwahati</p>
  </div>
  <ul className="list-disc pl-5 space-y-3 mt-4 mb-4 text-left">  {/* Confirm text alignment and bullet points are left-aligned */}
    <li>Advanced Certification from E&ICT Academy, IIT Guwahati.</li>
    <li>6 months part-time program with online classes.</li>
    <li>Revised curriculum for post Chat-GPT era.</li>
    <li>No prior coding experience required.</li>
    <li>Suitable for final years, graduates, and early professionals.</li>
  </ul>
  <div className="flex space-x-4 mb-4 lg:mt-10 mt-8">
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Explore Program
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Enrol Now
    </button>
  </div>
</div>

<div className="md:w-1/2 relative flex flex-col items-center mt-10 lg:mt-12">
  {/* YouTube Video Embedding */}
  <div className="w-full flex justify-center items-center bg-slate-900 px-10 lg:px-0 lg:mt-10">
    <iframe
      className="w-full md:w-3/4 aspect-video"  // Ensures the video maintains a 16:9 aspect ratio
      src="https://www.youtube.com/embed/O5hShUO6wxs"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>

  {/* Buttons - Centered below the video */}
  <div className="flex space-x-6 mt-8 mb-8 lg:mt-10 ">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Book a Demo Class
    </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Request Call Back
    </button>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
