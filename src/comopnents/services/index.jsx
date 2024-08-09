import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserTie, faUserCheck, faProjectDiagram, faHandshake, faSeedling } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    name: "Placement Support",
    description: "Complete support from our dedicated placement team until you get a job",
    icon: faBriefcase
  },
  {
    name: "Experienced Mentorship",
    description: "Receive guidance and support from seasoned professionals in the tech industry to enhance your learning experience.",
    icon: faUserTie
  },
  {
    name: "Mock Interviews",
    description: "Professional mock interviews assistance",
    icon: faUserCheck
  },
  {
    name: "Capstone Projects",
    description: "Undertake Industry certified Capstone Projects from companies like Zomato & BookMyShow",
    icon: faProjectDiagram
  },
  {
    name: "100% Job Assurance",
    description: "Get all the support to crack your dream tech job.",
    icon: faHandshake
  },
  {
    name: "Growth Champion",
    description: "Know learning strategies and get mentorship from our top Alumni",
    icon: faSeedling
  }
];

const WhyChoose = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Interneex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {services.map(service => (
            <div key={service.name} className="flex flex-col items-center lg:py-8 lg:px-6">
              <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 gradient-text" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
