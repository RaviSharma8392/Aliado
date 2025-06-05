import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const ProjectsSection = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: 'Variety Sweets & Restaurant',
      description: 'A family-friendly restaurant known for its wide range of Indian sweets and traditional meals.',
      logo: 'https://i.ibb.co/Ps0frrDP/Whats-App-Image-2025-03-14-at-22-23-30.jpg',
      image: './images/Screenshot 2025-06-05 095945.png',
      link: 'https://variety-food-fe.onrender.com/',
      github: 'https://github.com/company/ecommerce',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      name: 'Gadeni Stays',
      description: 'A cozy homestay offering peaceful stays in the hills with personalized hospitality.',
      logo: 'https://a0.muscache.com/im/pictures/miso/Hosting-588213596491309216/original/1d267401-bac7-4029-aa74-47d304183d70.jpeg?im_w=1440',
      image: './images/image.png',
      link: 'https://gadenistays.com/',
      tags: ['React']
    }, {
      id: 3,
      name: 'Baba Neeb Karoli Restro & Cafe',
      description: 'A spiritual-themed cafe combining peaceful ambiance with tasty food.',
      logo: 'https://i.postimg.cc/GpwjzDPt/neeb-Karoli.jpg',
      image: './images/baba.png',
      link: 'https://neeb-karoli-ordering-frontend.onrender.com/',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 4,
      name: 'Rose Dale',
      description: 'A boutique stay or resort surrounded by rose gardens and scenic views.',
      logo: 'https://i.ibb.co/Ps0frrDP/Whats-App-Image-2025-03-14-at-22-23-30.jpg',
      image: './images/Screenshot 2025-06-05 101441.png',
      link: 'https://rosedales.netlify.app/',
      github: 'https://github.com/company/ecommerce',
      tags: ['React']
    },
    {
      id: 5,
      name: 'New Arma Dale',
      description: 'Secure patient portal with appointment scheduling and telemedicine features.',
      logo: 'https://newarmadale.com/assets/logo-BxQIKb0L.jpg',
      image: './images/Screenshot 2025-06-05 101644.png',
      link: 'https://newarmadale.com/',
      tags: ['React', 'Node.js', 'MongoDB']
    }, {
      id: 6,
      name: 'The Hidden Cove',
      description: 'Secure patient portal with appointment scheduling and telemedicine features.',
      logo: 'https://i.postimg.cc/GpwjzDPt/neeb-Karoli.jpg',
      image: './images/Screenshot 2025-06-05 101804.png',
      link: 'https://rococo-puppy-eedcac.netlify.app/',
      tags: ['React']
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
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
             
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-sm">
                    <img src={project.logo} alt={`${project.name} logo`} className="h-8" />
                  </div>
            
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit site <FaExternalLinkAlt className="ml-1" />
                  </a>
                  
                
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="GitHub repository"
                    >
                      <FaGithub className="text-xl" />
                    </a>
              
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View all projects <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;