import React from "react";

const testimonials = [
  {
    quote: "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    name: "Jessica Devis",
    title: "Full Stack Developer",
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    quote: "It has broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    name: "Marcell Glock",
    title: "Graphic Designer",
    company: "Coinbase",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Coinbase.svg", // Fixed logo link to use an SVG version
  },
  {
    quote: "Its intuitive design and powerful features make it indispensable. I can't imagine going back to life before it!",
    name: "Emma Roberts",
    title: "Chief Executive",
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
              style={{ minHeight: "250px" }} // Increased minimum height
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
    </section>
  );
};

export default TestimonialSection;
