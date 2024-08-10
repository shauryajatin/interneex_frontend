import React from 'react';
import './index.css'

const FrontEndComponent = () => {
  return (
    <div className='mx-4 my-4 lg:mx-40 lg:my-10'>
    <div className="flex items-center justify-center bg-slate-900 px-100 rounded-3xl ">
    <div className="text-center py-30 mx-20 px-30" style={{ height: '300px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="neon-text">COMING SOON</div>
      <p className="text-gray-300 text-lg mt-3">Stay tuned with us!</p>
    </div>
  </div>
  </div>
  );
};

export default FrontEndComponent;
