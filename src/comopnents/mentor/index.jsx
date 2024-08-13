import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import suraj from "../../assets/mentors/suraj.jpeg";
import vijay from "../../assets/mentors/vijay.jpeg";
import ayush from "../../assets/mentors/ayush.jpeg";
import sumit from "../../assets/mentors/sumit.jpeg";
import sunil from "../../assets/mentors/sunil.jpeg";
import ashok from "../../assets/mentors/ashok.jpeg";
import narendra from "../../assets/mentors/narendra.png";
import vishal from "../../assets/mentors/vishal.jpeg";

const mentors = [
  {
    name: "Suraj Pratap Singh",
    experience: "CO founder Interneex,Modgenis EX CTO - Hans Matrimony 9+ Yrs OF Exp",
    education: "B.tech, IIT KANPUR",
    img: suraj,
    alt: "Suraj Pratap Singh",
  },
  {
    name: "Vijay Devra",
    experience: "EX SBI , 9+ Yrs OF Exp",
    education: "B.tech, IIT KANPUR",
    img: vijay,
    alt: "Vijay Devra",
  },
  {
    name: "Ayush Sharma",
    experience: "Ex Qualcom EX CDAC, 6+ years of experience",
    education: "",
    img: ayush,
    alt: "Ayush Sharma",
  },
  {
    name: "Sumit Kumar",
    experience: "Prof Thapar University, 8+ yrs of Exp",
    education: "Phd IIIT Allahabad",
    img: sumit,
    alt: "Sumit Kumar",
  },
  {
    name: "Sunil Singh",
    experience: "EX Microsoft, VMware, Broadcom 7+ Yrs of Exp",
    education: "",
    img: sunil,
    alt: "Sunil Singh",
  },
  {
    name: "Ashok Kumar",
    experience: "EX Amazon(USA) 8+ years of Ex",
    education: "B.tech IIT KANPUR",
    img: ashok,
    alt: "Ashok Kumar",
  },
  {
    name: "Narendra Roy",
    experience: "EX Exl 7+ Yrs of Exp",
    education: "B.tech IIT KANPUR",
    img: narendra,
    alt: "Narendra Roy",
  },
  {
    name: "Vishal Tomar",
    experience: "EX Adobe(USA) 8+ years of Ex",
    education: "B.tech IIT KANPUR",
    img: vishal,
    alt: "Vishal Tomar",
  },
];

const Mentor = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth < 768 ? 200 : 300;
    if (direction === "left") {
      scrollContainer.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full lg:my-16 mt-4 lg:mt-20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:mt-2 mt-6 mb-6">
        <div className="col-span-4 sm:pl-6 lg:col-span-1 lg:pl-10 lg:pr-4">
          <h2 className="text-3xl lg:text-5xl font-bold sm:mb-2 lg:mb-1 lg:mt-2 text-justify px-4 lg:px-0">
            <span>Meet Our</span> <br /> Mentors
          </h2>
          <p className="mb-6 py-3 lg:pt-10 text-lg sm:text-base lg:text-lg text-justify px-4 lg:px-0">
            Our mentors bring years of experience across various industries.
            Learn more about their backgrounds and expertise! Grow and learn
            from the best.
          </p>

    
        </div>

        <div className="col-span-4 lg:col-span-3 relative">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto space-x-4 scrollbar-hide px-4 sm:px-6"
          >
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] bg-purple-200 rounded-lg shadow-lg p-4"
              >
                {mentor.img ? (
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-40 sm:h-48 lg:h-60 flex items-center justify-center bg-gray-200 rounded-t-lg">
                    <span className="text-gray-500">{mentor.alt}</span>
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold mt-4">
                  {mentor.name}
                </h3>
                <p className="text-gray-700 mt-2">{mentor.experience}</p>
                <p className="text-gray-500 mt-2">{mentor.education}</p>
              </div>
            ))}
          </div>

          {/* Left and Right Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 transform -translate-y-1/2 -left-0 ml-4 lg:ml-2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
          >
            <FaChevronLeft className="h-6 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 transform -translate-y-1/2 -right-0 mr-4 p-2 lg:mr-2  bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
          >
            <FaChevronRight className="h-6 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
