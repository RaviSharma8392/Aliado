import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ProjectsSection = () => {
  const [isLoad, setIsLoad] = useState(4);
  const handleLoad = () => {
    setIsLoad((prev) => prev + (projects.length - 4));
  };
  const handleLess = () => {
    setIsLoad((prev) => prev - 4);
  };
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "Variety Sweets & Restaurant",
      description:
        "A family-friendly restaurant known for its wide range of Indian sweets and traditional meals.",
      logo: "https://i.ibb.co/Ps0frrDP/Whats-App-Image-2025-03-14-at-22-23-30.jpg",
      image:
        "https://ucarecdn.com/d3c9f71e-fe2e-4b2b-8f85-11e5cc7e11e8/Screenshot20250605095945.png",
      link: "https://variety-food-fe.onrender.com/",
      github: "https://github.com/company/ecommerce",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      name: "Gadeni Stays",
      description:
        "A cozy homestay offering peaceful stays in the hills with personalized hospitality.",
      logo: "https://a0.muscache.com/im/pictures/miso/Hosting-588213596491309216/original/1d267401-bac7-4029-aa74-47d304183d70.jpeg?im_w=1440",
      image: "./images/image.png",
      link: "https://gadenistays.com/",
      tags: ["React"],
    },
    {
      id: 3,
      name: "Baba Neeb Karoli Restro & Cafe",
      description:
        "A spiritual-themed cafe combining peaceful ambiance with tasty food.",
      logo: "https://i.postimg.cc/GpwjzDPt/neeb-Karoli.jpg",
      image: "./images/baba.png",
      link: "https://neeb-karoli-ordering-frontend.onrender.com/",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      name: "Rose Dale",
      description:
        "Rose Dale – A charming hotel and restaurant where comfort meets classic elegance.",
      logo: "https://rosedalebhimtal.com/assets/images/about/3.jpg",
      image:
        "https://ucarecdn.com/644fb8e6-8b7c-4470-9cf5-ae3b7a9f8f15/Screenshot20250605101441.png",
      link: "https://rosedales.netlify.app/",
      github: "https://github.com/company/ecommerce",
      tags: ["React"],
    },
    {
      id: 5,
      name: "New Arma Dale",
      description:
        "New Arma Dale is a modern, elegant hotel offering a perfect blend of comfort and sophistication. ",
      logo: "https://newarmadale.com/assets/logo-BxQIKb0L.jpg",
      image: "./images/Screenshot 2025-06-05 101644.png",
      link: "https://newarmadale.com/",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 6,
      name: "The Hidden Cove",
      description:
        "The Hidden Cove – A peaceful retreat offering elegant stays and unforgettable dining.",
      logo: "data:image/jpeg;base64,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",
      image: "./images/Screenshot 2025-06-05 101804.png",
      link: "https://rococo-puppy-eedcac.netlify.app/",
      tags: ["React"],
    },
    {
      id: 7,
      name: "Goura's Bistro",
      description:
        "Goura's Bistro – A stylish hotel and restaurant serving comfort, flavor, and relaxation in every stay.",
      logo: "https://www.gaurasbistro.com/static/media/gauras_logo.779bab8ec2668dbe85e9.png",
      image: "./images/Screenshot 2025-06-05 44558.png",
      link: "https://www.gaurasbistro.com/",
      tags: ["React"],
    },
  ];

  return (
    <section className="py-16 px-4 pt-35 md:pt-50 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our recent web development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, isLoad).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-sm">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-8"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Visit site <FaExternalLinkAlt className="ml-1" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="GitHub repository">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {isLoad < projects.length ? (
            <button
              onClick={handleLoad}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View all projects <FiArrowRight className="ml-2" />
            </button>
          ) : (
            <button
              onClick={handleLess}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Show Less
              <FiArrowRight className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
