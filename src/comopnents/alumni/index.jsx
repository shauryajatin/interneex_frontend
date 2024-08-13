import React from 'react';

const companies = [
  { name: 'Amazon', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Facebook', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Apple', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Netflix', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
  { name: 'IBM', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Samsung', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Oracle', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
]
const AlumniCompanies = () => {
  return (
    <div className="text-center  py-4 lg:py-10 px-4 mb-16">
      <h2 className="text-4xl lg:text-6xl font-semibold mb-8">
        Our Alumni work at some of the <br /> 
        <span className="text-2xl lg:text-4xl font-semibold pt-4 lg:pt-1">best companies in the world</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-14">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center items-center p-2 lg:py-4">
            <img src={company.imgSrc} alt={company.name} className="max-w-full h-10 sm:h-8 md:h-12 lg:h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniCompanies;
