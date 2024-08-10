import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const mentors = [
  {
    name: 'John Doe',
    experience: '15 years in Supply Chain Management',
    education: 'MBA, Harvard Business School',
    img: null, // fallback if image fails to import
    alt: 'John Doe',
  },
  {
    name: 'Jane Smith',
    experience: '10 years in Inventory Planning',
    education: 'MSc, Stanford University',
    img: null,
    alt: 'Jane Smith',
  },
  {
    name: 'Emily Johnson',
    experience: '8 years in Logistics',
    education: 'BBA, Wharton School of Business',
    img: null,
    alt: 'Emily Johnson',
  },
  {
    name: 'Michael Brown',
    experience: '12 years in Process Automation',
    education: 'MS, MIT',
    img: null,
    alt: 'Michael Brown',
  },
  {
    name: 'Sarah Wilson',
    experience: '7 years in Retail Supply Chain',
    education: 'MBA, Kellogg School of Management',
    img: null,
    alt: 'Sarah Wilson',
  },
];

const Mentor = () => {
    const scrollContainer = useRef(null);
  
    const scroll = (direction) => {
      const scrollAmount = window.innerWidth < 768 ? 200 : 300;
      if (direction === 'left') {
        scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:mt-2 mt-6 mb-6">
          <div className="col-span-4 sm:pl-6 lg:col-span-1 lg:pl-10 lg:pr-4">
            <h2 className="text-3xl sm:text-4xl font-bold sm:mb-2 lg:mb-1">Meet Our Mentors</h2>
            <p className="mb-6 py-3 lg:py-4 text-sm sm:text-base">
              Our mentors bring years of experience across various industries. Learn more about their backgrounds and expertise!
            </p>
  
            <div className="hidden sm:flex items-center">
              {/* Show these buttons on medium to large screens */}
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => scroll('left')}
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
                >
                  <FaChevronLeft className='h-6 w-5'/>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
                >
                  <FaChevronRight className='h-6 w-5'/>
                </button>
              </div>
            </div>
            <div className="hidden sm:flex self-end mt-8 sm:mt-14">
              {/* Show this button on medium to large screens */}
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm sm:text-base">
                View all mentors
              </button>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div
              ref={scrollContainer}
              className="flex overflow-x-auto space-x-4 scrollbar-hide px-4 sm:px-6"
            >
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] bg-purple-100 rounded-lg shadow-lg p-4"
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
                  <h3 className="text-lg sm:text-xl font-semibold mt-4">{mentor.name}</h3>
                  <p className="text-gray-700 mt-2">{mentor.experience}</p>
                  <p className="text-gray-500 mt-2">{mentor.education}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Mentor;