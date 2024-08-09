import React, { useState } from 'react';

const items = [
  {
    name: 'Introduction to Full Stack Development',
    description: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity.',
    features: [
     'Overview and roadmap of web development', 'Roles and responsibilities of a full stack developer', 'Tools and technologies used in full stack development', 'Understanding client-server architecture', 'Front-End Vs Back-End development', 'HTTP and HTTPS protocol basics', 'Restful APIs and Web services'
    ]
  },
  {
    name: 'Front-End Development',
    description: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes.',
    features: [
    'HTML and CSS', 'JavaScript fundamentals', 'Front-End Frameworks', 'Creating a responsive design', 'Project: Build a responsive landing page'
    ]
  },
  {
    name: 'Back-End Development',
    description: 'Never miss an order, and know exactly how much to order, when, and from whom.',
    features: [
     'Setting up the development environment', 'Server side programming', 'Databases', 'Relational: PostgreSQL, MySQL, SQLite', 'Non-relational databases: MongoDB, Redis, Cassandra', 'Which database to choose and why?', 'Application requirements', 'Scalability needs', 'Performance considerations', 'Data integrity', 'Node.js and Express.js', 'Introduction to Node.js', 'Node package manager (npm)', 'Basics of Express.js', 'Routing', 'Middleware', 'Using Sequelize with Node.js', 'Building RESTful APIs', 'Performing CRUD operations', 'ORM (Object-Relational Mapping)', 'Query optimisation', 'Load balancing', 'Project: Build a full stack application with a MongoDB/PostgreSQL database using ORM'
    ]
  },
  {
    name: 'Full Stack Application Development',
    description: 'Never miss an order, and know exactly how much to order, when, and from whom.',
    features: [
'User Authentication and Authorization', 'User authentication', 'JWT (JSON Web Tokens)/OAuth', 'User authorization and roles', 'Securing APIs', 'Project: Add authentication and authorization to your full stack application', 'Web Security', 'Common security threats (XSS, CSRF, SQL Injection, etc.)', 'Best practices for securing web applications', 'Implementing HTTPS', 'Data validation and sanitization'
    ]
  },
  {
    name: 'DevOps and Deployment',
    description: 'Never miss an order, and know exactly how much to order, when, and from whom.',
    features: [
'Version Control', 'Understanding Git, GitHub and Bitbucket', 'Collaborative workflows', 'Deployment', 'Hosting and deploying applications to cloud services (e.g., Heroku, AWS, Netlify)', 'CI/CD pipelines', 'Docker basics and containerization', 'Project: Deploy your full stack application to a cloud service'
    ]
  }
  ,
  {
    name: ' Testing and QA',
    description: 'Never miss an order, and know exactly how much to order, when, and from whom.',
    features: [
'Unit tests', 'Integration tests', 'End-to-end tests']
  }
  ,
  {
    name: ' Advanced Topics (Optional)',
    description: 'Never miss an order, and know exactly how much to order, when, and from whom.',
    features: [
' Microservices architecture Capstone Project', ' Work directly on Modgenics Live projects']
  }
  // Add additional items similarly
];

const ProblemTarget = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="bg-white py-10 text-black">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold mb-8">Things your spreadsheet wishes it could do</h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/3 lg:w-1/3 p-4 overflow-auto">
          {items.map((item, index) => (
            <div key={index} onClick={() => setSelectedItem(item)} className={`cursor-pointer p-2 hover:bg-slate-700 mt-4  ${selectedItem.name === item.name ? 'bg-slate-600' : ''}`}>
              <h2 className="font-bold my-3">{item.name}</h2>
            </div>
          ))}
        </div>
        <div className=" bg-blue-200 w-full md:w-2/3 lg:w-2/3 p-4 overflow-auto lg:mx-20">
      <h2 className="text-3xl font-bold mb-3 text-black">{selectedItem.name}</h2>
      <ul className="list-disc pl-5 lg:ml-20 lg:mt-10 space-y-5 text-black" style={{ maxHeight: '500px', overflowY: 'auto',  }}>
        {selectedItem.features.map((feature, index) => (
          <li key={index} className="text-lg mb-1 text-left">{feature}</li>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
};

export default ProblemTarget;
