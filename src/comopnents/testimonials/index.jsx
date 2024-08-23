import React from "react";
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import facebook from "../../assets/images/Facebook.png";

const testimonials = [
  {
    quote: "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    name: "Raghav Singh",
    title: "Full Stack Developer",
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    quote: "It has broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    name: "Vanshita Mishra ",
    title: "Graphic Designer",
    company: "Facebook",
    logo: facebook, // Fixed logo link to use an SVG version
  },
  {
    quote: "Its intuitive design and powerful features make it indispensable. I can't imagine going back to life before it!",
    name: "Rahul Kumar",
    title: "Chief Executive",
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="pt-2 pb-12 px-6 lg:px-8 bg-slate-900 py-10" id="testimonials">
         <div className="text-center mt-10 lg:mt-30">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold text-white my-8 lg:mb-4">
            Testimonials
          </h1>
        </div>
      <div className="max-w-7xl mx-auto bg-slate-900 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" transition-transform transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out bg-prple-200 p-8 rounded-lg shadow-md min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] min-h-[300px] sm:min-h-[400px] lg:min-h-[200px] bg-purple-200"
            //   style={{ minHeight: "250px" }} // Increased minimum height
            >
              <blockquote className="text-xl text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title} @ {testimonial.company}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <img src={testimonial.logo} alt={testimonial.company} className="h-8 max-w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
