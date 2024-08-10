import React, { useState } from 'react';
// import FullStackComponent from './components/FullStackComponent';  // Import your pre-built components
import FrontEndComponent from './ML/index';
import WebDev from './web-dev/index';
// import './index.css';

// Define a mapping from dropdown values to components
const componentMap = {
//   fullstack: FullStackComponent,
  frontend: FrontEndComponent,
  WebDev: WebDev,
};

const DynamicComponentApp = () => {
  const [selectedComponent, setSelectedComponent] = useState('WebDev');

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  // Dynamically determine which component to render
  const SelectedComponent = componentMap[selectedComponent];

  return (
    <div>
      <div className="text-center mt-4">  <div className="text-center mt-4 lg:mt-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:mb-2">Course Overview</h1>
    </div>
    <div className="flex justify-center items-center  bg-gray-200">
      <select onChange={handleComponentChange} className="bg-slate-900 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-lg my-3 lg:my-6 focus:ring-2 focus:ring-slate-500">
        <option value="frontend">Front End Development</option>
        <option value="WebDev">Web Development</option>
      </select>
    </div>
      </div>
      <div className="component-container">
        <SelectedComponent />
      </div>
    </div>
  );
};

export default DynamicComponentApp;
