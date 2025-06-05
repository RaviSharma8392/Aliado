import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const services = [
  {
    id: 1,
    name: "App Development",
    description:
      "We have expertise in creating multi-platform mobile app solutions for both Android and iOS devices. Using PhoneGap, Xamarin, and React Native, we offer custom mobile apps that run smoothly on multiple platforms.",
    icon: "fa-mobile-alt"
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Our custom web development services include both front-end and back-end development. Whether it's enhancing an existing app or architecting an enterprise app, our developers are up for the challenge.",
    icon: "fa-code"
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "The digital marketing services we provide increase visibility and engage customers across online platforms through effective SEO, social media, and paid campaigns.",
    icon: "fa-bullhorn"
  }
];

const Service = () => {
  return (
    <div className="px-10 pt-35 md:pt-50 py-16 bg-[#]">
      <div className="text-center mb-12">
        <h2 className="uppercase font-bold text-lg text-[#20163c] tracking-wider">Services</h2>
        <h1 className="text-4xl font-bold my-3 text-gray-800">Our Features & Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We help you build high-quality digital solutions and deliver a wide range of related professional services. We are committed to providing world-class service to our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="border border-gray-200 p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">
              <i className={`fas ${service.icon} text-[#20163c]`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{service.name}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            <div className="mt-4">
              <button className="text-[#20163c] font-semibold hover:text-[#3a2a6d] transition-colors flex items-center">
                Learn more
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;