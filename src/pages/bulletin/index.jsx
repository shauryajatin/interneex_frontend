import React from "react";
import Pricing from "../../comopnents/plans";
import Modal from "../../comopnents/atoms/modals/formModal";
import Navbar from "../../comopnents/navbar";
import { useState } from "react";
import Footer from "../../comopnents/footer";
import img1 from '../../assets/images1/asset 86.png'
import img2 from '../../assets/images/aws1.png'
import img3 from '../../assets/images1/asset 90.png'


// Sample data that can be fetched via API
const batchesData = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    description: "Learn to build modern web applications from scratch using React, Node.js, and MongoDB.",
    imageUrl: img1, // Replace with actual image URL
    buttonText: "View Details",
  },
  {
    id: 2,
    title: "Cloud Development with AWS",
    description: "Master cloud computing with AWS. Learn to deploy and manage applications in the cloud.",
    imageUrl: img2, // Replace with actual image URL
    buttonText: "View Details",
  },
  {
    id: 3,
    title: "Data Science and Machine Learning",
    description: "Dive into data science and machine learning with hands-on projects using Python and TensorFlow.",
    imageUrl: img3, // Replace with actual image URL
    buttonText: "View Details",
  },
//   {
//     id: 4,
//     title: "Cybersecurity Essentials",
//     description: "Understand the fundamentals of cybersecurity and how to protect systems from threats.",
//     imageUrl: "cybersecurity-image-url", // Replace with actual image URL
//     buttonText: "View Details",
//   },
];

const webinarsData = [
  {
    id: 1,
    title: "Webinar on AI in Web Development",
    description: "Explore the role of artificial intelligence in modern web development.",
    date: "15th September 2024",
    buttonText: "Join Webinar",
  },
  {
    id: 2,
    title: "Webinar on Cloud Architecture",
    description: "Learn the best practices for designing scalable and resilient cloud architectures.",
    date: "18th September 2024",
    buttonText: "Join Webinar",
  },
  {
    id: 3,
    title: "Webinar on Machine Learning Operations (MLOps)",
    description: "Understand how to manage and deploy machine learning models in production.",
    date: "22nd September 2024",
    buttonText: "Join Webinar",
  },
  {
    id: 4,
    title: "Webinar on Blockchain Technology",
    description: "Get insights into blockchain technology and its applications in various industries.",
    date: "25th September 2024",
    buttonText: "Join Webinar",
  },
];

const bulletinsData = [
  {
    id: 1,
    title: "Web Development Trends 2024",
    description: "Discover the latest trends and technologies shaping the future of web development.",
    buttonText: "Read More",
  },
  {
    id: 2,
    title: "Cloud Computing in 2024",
    description: "An overview of how cloud computing is evolving and what to expect in the coming years.",
    buttonText: "Read More",
  },
  {
    id: 3,
    title: "Machine Learning Breakthroughs",
    description: "A look at the most recent advancements in machine learning and their practical applications.",
    buttonText: "Read More",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices",
    description: "Essential cybersecurity practices to keep your systems and data secure.",
    buttonText: "Read More",
  },
];

const Bulletin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-purple-100 text-white min-h-screen">
      <Navbar openModal={openModal} homeIcon={true} />

      <header className="text-center pt-10 bg-purple-100">
        <h1 className="text-5xl font-bold text-slate-900">Explore Our Batches</h1>
        <p className="text-slate-800 text-3xl">Get started with our latest batches, webinars, and bulletins</p>
      </header>

      <main>
        {/* Batches Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 text-slate-900 py-5">Batches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {batchesData.map((batch) => (
                <div key={batch.id} className="bg-purple-200 p-6 rounded-lg">
                  <img src={batch.imageUrl} alt={batch.title} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-xl font-bold mt-4 text-slate-900">{batch.title}</h3>
                  <p className="text-gray-700 mt-2">{batch.description}</p>
                  <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-md">{batch.buttonText}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 text-white py-5">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinarsData.map((webinar) => (
                <div key={webinar.id} className="bg-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900">{webinar.title}</h3>
                  <p className="text-gray-700 mt-2">{webinar.description}</p>
                  <p className="text-gray-500 mt-1">Date: {webinar.date}</p>
                  <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-md">{webinar.buttonText}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bulletins Section */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 text-slate-900 py-5">Latest Bulletins</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bulletinsData.map((bulletin) => (
                <div key={bulletin.id} className="bg-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900">{bulletin.title}</h3>
                  <p className="text-gray-700 mt-2">{bulletin.description}</p>
                  <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-md">{bulletin.buttonText}</button>
                </div>
              ))}
            </div>
          </div>
        </section> */}
       
      </main>
      <Pricing />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Bulletin;
