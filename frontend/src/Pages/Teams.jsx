import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Chiranjeev Suyal',
      role: 'Co-founder & Software Developer',
      bio: 'Experienced tech leader with a strong background in web development and product strategy.',
      image: './images/WhatsApp Image 2025-06-04 at 22.07.30_c12e078a.jpg',
    //   social: {
    //     // linkedin: 'https://linkedin.com/in/alexjohnson',
    //     // email: 'alex@company.com'
    //   }
    },
    {
      id: 2,
      name: 'Samishtha Brijwasi',
      role: 'Digital Marketing Specialist',
      bio: 'Skilled marketer focused on SEO, content creation, and growing digital presence.',
      image: './images/WhatsApp Image 2025-06-04 at 22.07.31_5c13aad7.jpg',
    //   social: {
    //     // linkedin: 'https://linkedin.com/in/sarahwilliams',
    //     // email: 'sarah@company.com'
    //   }
    },
    {
      id: 3,
      name: 'Harshit Brijwasi',
      role: 'Co-founder & Software Developer',
      bio: 'Full-stack developer specializing in scalable apps using React, Node.js, and modern APIs.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFG9M8Q-JdQ3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675127463885?e=1754524800&v=beta&t=FOKPqIlLXIlInrnpxT4qq2TEWrB1nUQIg4DIL0_w_Ms',
    //   social: {
    //     // linkedin: 'https://linkedin.com/in/michaelchen',
    //     // github: 'https://github.com/michaelchen',
    //     // email: 'michael@company.com'
    //   }
    },
    {
      id: 4,
      name: 'Ravi Sharma',
      role: 'Software Developer',
      bio: 'Focused on user-friendly front-end development and delivering clean, maintainable code.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQER4b_SsgaOTQ/profile-displayphoto-shrink_800_800/B4DZbPG3qmHQAo-/0/1747231408883?e=1754524800&v=beta&t=Fm2ej0JiAHipwyNDPfeN7UZo-03-ZArqxbRY7OhvyLc',
    //   social: {
    //     // linkedin: 'https://linkedin.com/in/emmarodriguez',
    //     // twitter: 'https://twitter.com/emmarodriguez',
    //     // email: 'emma@company.com'
    //   }
    },
    {
      id: 5,
      name: 'Nikhil Rawat',
      role: 'Sales Manager',
      bio: 'Results-driven sales professional with a focus on customer success and long-term partnerships.',
      image: './images/WhatsApp Image 2025-06-04 at 22.07.54_8b413d235582852.jpg',
    //   social: {
    //     linkedin: 'https://linkedin.com/in/davidkim',
    //     github: 'https://github.com/davidkim',
    //     email: 'david@company.com'
    //   }
    },
    {
      id: 6,
      name: 'Pranjal Sharma',
      role: 'Digital Marketing Specialist',
      bio: 'Creative strategist with a passion for branding, analytics, and audience engagement.',
      image: '/images/WhatsApp Image 2025-06-04 at 22.10.03_b7013c00.jpg',
    //   social: {
    //     // linkedin: 'https://linkedin.com/in/priyapatel',
    //     // github: 'https://github.com/priyapatel',
    //     // email: 'priya@company.com'
    //   }
    }
  ];

  return (
    <div className="bg-gradient-to-b pt-50 from-[#f9f8ff] to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5e35b1] to-[#20163c] sm:text-5xl lg:text-6xl">
            Meet Our Team
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-[#5e35b1]">
            The talented people behind our success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person) => (
            <div
              key={person.id}
              className="group relative bg-white border-2 border-[#ede7f6] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-[#d1c4e9]"
            >
              {/* Accent bar at top */}
              <div className="h-2 bg-gradient-to-r from-[#5e35b1] to-[#20163c]"></div>
              
              <div className="p-6">
                {/* Image with border */}
                <div className="relative mx-auto w-40 h-40 rounded-full border-4 border-[#f3e5f5] group-hover:border-[#e1bee7] transition-all duration-300 overflow-hidden shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Team+Member';
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5e35b1] transition-colors duration-300">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#7e57c2]">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    {person.bio}
                  </p>
                </div>
                
                {/* Social links */}
                <div className="mt-6 flex justify-center space-x-4 border-t border-[#ede7f6] pt-4">
                  {/* {person.social.linkedin && (
                    <a 
                      href={person.social.linkedin} 
                      className="text-[#7e57c2] hover:text-[#5e35b1] transition-colors duration-200"
                      aria-label={`${person.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  )} */}
                  {/* {person.social.twitter && (
                    <a 
                      href={person.social.twitter} 
                      className="text-[#7e57c2] hover:text-[#5e35b1] transition-colors duration-200"
                      aria-label={`${person.name}'s Twitter`}
                    >
                      <FaTwitter className="h-5 w-5" />
                    </a>
                  )}
                  {person.social.github && (
                    <a 
                      href={person.social.github} 
                      className="text-[#7e57c2] hover:text-[#5e35b1] transition-colors duration-200"
                      aria-label={`${person.name}'s GitHub`}
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                  {person.social.email && (
                    <a 
                      href={`mailto:${person.social.email}`}
                      className="text-[#7e57c2] hover:text-[#5e35b1] transition-colors duration-200"
                      aria-label={`Email ${person.name}`}
                    >
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Culture Section */}
        <div className="mt-24 bg-white rounded-xl border-2 border-[#ede7f6] shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:p-16 bg-gradient-to-r from-[#f3e5f5] to-[#e8eaf6]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5e35b1] to-[#20163c] sm:text-4xl">
                Our Culture
              </h2>
              <p className="mt-4 text-lg text-[#5e35b1]">
                We believe in collaboration, innovation, and continuous learning. Our team thrives on solving complex problems with creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;