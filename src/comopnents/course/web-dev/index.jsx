import React, { useState } from "react";
import "./index.css";

const items = [
  {
    name: "Introduction to Full Stack Development",
    description:
      "Dynamically predict future demand across all channels, with high accuracy and lowest granularity.",
    features: [
      "Overview and roadmap of web development",
      "Roles and responsibilities of a full stack developer",
      "Tools and technologies used in full stack development",
      "Understanding client-server architecture",
      "Front-End Vs Back-End development",
      "HTTP and HTTPS protocol basics",
      "Restful APIs and Web services",
    ],
  },
  {
    name: "Front-End Development",
    description:
      "Build and automate custom S&OP workflows to enhance productivity and streamline your processes.",
    features: [
      "HTML and CSS",
      "JavaScript fundamentals",
      "Front-End Frameworks",
      "Creating a responsive design",
      "Project: Build a responsive landing page",
    ],
  },
  {
    name: "Back-End Development",
    description:
      "Never miss an order, and know exactly how much to order, when, and from whom.",
    features: [
      "Setting up the development environment",
      "Server side programming",
      "Databases",
      "Relational: PostgreSQL, MySQL, SQLite",
      "Non-relational databases: MongoDB, Redis, Cassandra",
      "Which database to choose and why?",
      "Application requirements",
      "Scalability needs",
      "Performance considerations",
      "Data integrity",
      "Node.js and Express.js",
      "Introduction to Node.js",
      "Node package manager (npm)",
      "Basics of Express.js",
      "Routing",
      "Middleware",
      "Using Sequelize with Node.js",
      "Building RESTful APIs",
      "Performing CRUD operations",
      "ORM (Object-Relational Mapping)",
      "Query optimisation",
      "Load balancing",
      "Project: Build a full stack application with a MongoDB/PostgreSQL database using ORM",
    ],
  },
  {
    name: "Full Stack Application Development",
    description:
      "Never miss an order, and know exactly how much to order, when, and from whom.",
    features: [
      "User Authentication and Authorization",
      "User authentication",
      "JWT (JSON Web Tokens)/OAuth",
      "User authorization and roles",
      "Securing APIs",
      "Project: Add authentication and authorization to your full stack application",
      "Web Security",
      "Common security threats (XSS, CSRF, SQL Injection, etc.)",
      "Best practices for securing web applications",
      "Implementing HTTPS",
      "Data validation and sanitization",
    ],
  },
  {
    name: "DevOps and Deployment",
    description:
      "Never miss an order, and know exactly how much to order, when, and from whom.",
    features: [
      "Version Control",
      "Understanding Git, GitHub and Bitbucket",
      "Collaborative workflows",
      "Deployment",
      "Hosting and deploying applications to cloud services (e.g., Heroku, AWS, Netlify)",
      "CI/CD pipelines",
      "Docker basics and containerization",
      "Project: Deploy your full stack application to a cloud service",
    ],
  },
  {
    name: " Testing and QA",
    description:
      "Never miss an order, and know exactly how much to order, when, and from whom.",
    features: ["Unit tests", "Integration tests", "End-to-end tests"],
  },
  {
    name: " Advanced Topics (Optional)",
    description:
      "Never miss an order, and know exactly how much to order, when, and from whom.",
    features: [
      " Microservices architecture Capstone Project",
      " Work directly on Modgenics Live projects",
    ],
  },
  // Add additional items similarly
];

const WebDev = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div>
      <div className="bg-purple-100 text-black mb-10">
        <div className="flex flex-col  md:flex-row lg:flex-row overflow-hidden">
          <div className="flex md:flex-col lg:flex-col md:w-1/3 lg:w-1/3 lg:ml-4 overflow-x-auto md:overflow-visible lg:overflow-visible scrollbar-hide">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className={`cursor-pointer mx-2 p-2 mb-3 lg:mb-0 mt-4 ${
                  selectedItem.name === item.name ? "bg-slate-900" : "bg-purple-100"
                } 
           ${
             selectedItem.name === item.name ? "text-white" : "text-black"
           } flex-shrink-0`}
              >
                <h2 className="font-bold my-3">{item.name}</h2>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 md:w-2/3 lg:w-2/3 pt-4 overflow-auto mt-2 py-10 lg:mx-20 lg:rounded-xl">
            <h2 className="text-3xl text-left pl-5 lg:ml-20 pt-3 font-bold mb-2 text-white">
              {selectedItem.name}
            </h2>
            <ul
              className=" pl-5 lg:ml-20 lg:mt-10 space-y-5 text-white pt-2"
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {selectedItem.features.map((feature, index) => (
                <li key={index} className="text-lg mb-1 text-left">
                  🎯 {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
