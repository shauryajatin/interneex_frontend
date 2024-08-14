import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faUserCheck,
  faProjectDiagram,
  faHandshake,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: "Real-World Experience:",
    description:
      "We provide opportunities to work on live projects with our expert tech team.",
    icon: faBriefcase,
  },
  {
    name: "Personalized Mentorship:",
    description:
      "Benefit from one-on-one guidance from industry veterans dedicated to your success.",
    icon: faUserTie,
  },
  {
    name: "Placement Assistance:",
    description:
      "Secure top-tier internships and jobs through our extensive network and resources.",
    icon: faUserCheck,
  },
  {
    name: "Recognized Certification",
    description:
      "Earn a valuable internship experience certificate that enhances your resume and validates your skills.",
    icon: faProjectDiagram,
  },
  {
    name: "Flexible Learning:",
    description:
      "Our programs fit your schedule, whether you’re a full-time student or balancing other commitments.",
    icon: faHandshake,
  },
  {
    name: "Growth Champion",
    description:
      "Know learning strategies and get mentorship from our top Alumni",
    icon: faSeedling,
  },
];

const WhyChoose = () => {
  return (
    <div className="bg-purple-100 py-14 lg:py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-5xl lg:text-6xl font-semibold text-center mb-12">
          Wh<span className="underline">y C</span>hoos<span className="underline">e I</span>nterneex ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 lg:pt-10 lg:pb-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center lg:py-8 lg:px-6"
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="text-5xl mb-4 text-slate-900"
              />
              <h3 className="text-2xl font-semibold">{service.name}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
