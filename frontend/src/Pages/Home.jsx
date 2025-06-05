import React from 'react';
import Service from './Service';
import ProjectsSection from "./Projects";
import TeamPage from "./Teams";
import { FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "CEO, TechWave",
    review:
      "Excellent service and communication throughout the entire development process. Highly recommend!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    designation: "Marketing Manager, DigiPro",
    review:
      "Their digital marketing strategies helped us boost our online visibility dramatically. Great results!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Smith",
    designation: "Founder, FitApp",
    review:
      "The app development team delivered a top-notch product on time. Very professional and responsive.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Home = () => {
  return (
    <div className=" overflow-hidden">
      {/* Hero Section */}
      <div className="bg-[#94E1FE] px-4 md:px-10 lg:px-20 pt-30 md:pt-58 pb-16 font-sans">
        <section className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Create fast & powerful
              <br />
              websites for Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Let your creativity shine and start building your website today
              and impress your visitors.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-4 md:gap-6 my-12">
            {[
              "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/1.png",
              "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/3.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s",
              "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/2.png",
            ].map((icon, index) => (
              <div
                key={index}
                className="bg-white rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <img
                  className="h-8 md:h-10 w-auto"
                  src={icon}
                  alt={`icon-${index}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Banner Images */}
        <section className="max-w-6xl mx-auto mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
            <div className="w-full md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-transform">
              <img
                src="./images/0468f5fe-9c89-436f-9ba4-6f68bf630643123.jpeg"
                alt="demo"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/3 lg:w-2/4 z-10 transform hover:scale-105 transition-transform">
              <img
                src="./images/cec7596a-5f61-4562-9638-7c6b67c2962a145.jpeg"
                alt="demo"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-transform">
              <img
                src="./images/0468f5fe-9c89-436f-9ba4-6f68bf630643123.jpeg"
                alt="demo"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Services Section */}
      <Service />
      {/* Features Section */}
      <div className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#20163c] font-bold text-lg uppercase tracking-wider mb-2">
              Why Choose Us
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Save your time with a lot of features
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer smart, flexible, and scalable solutions to help your
              business grow efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/top/1.png",
                title: "Responsive Design",
                description: "Flawless on all devices",
              },
              {
                icon: "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/top/3.png",
                title: "Secure Code",
                description: "Enterprise-grade security",
              },
              {
                icon: "https://validthemes.net/site-template/landing-page/tekni/assets/img/icon/top/4.png",
                title: "Quick Support",
                description: "24/7 assistance",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Reviews Section
      <div className="bg-gray-50 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#20163c] font-bold text-lg uppercase tracking-wider mb-2">
              Testimonials
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#20163c]"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {review.designation}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div className="flex"></div>
              </div>
            ))} */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      <section
        id="about"
        className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* ABOUT US */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
              About Us
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Aliado empowers businesses to grow online by providing custom
              software solutions, websites, and digital tools that boost
              efficiency, visibility, and customer engagement in the digital
              world.
            </p>
          </div>

          {/* WHY CHOOSE US */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 underline decoration-indigo-500 mb-3">
              Why Choose Us?
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Choose Aliado for innovative, tailored software solutions,
              reliable support, and a proven track record of helping businesses
              thrive online with cutting-edge technology and creative
              strategies.
            </p>
          </div>
        </div>
      </section>
      <h1 className="text-2xl mb-5 flex justify-center font-bold text-gray-900">
        Our Pricing
      </h1>
      <div className="">
        <div className="grid px-40 mb-10  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Websites",
              price: "₹5k - ₹10k",
              features: [
                "Custom websites",
                "Free domain & hosting",
                "Unlimited pages",
                "No maintenance fees",
              ],
            },
            {
              title: "Softwares",
              price: "₹25k - ₹50k",
              features: [
                "Turn your idea into software",
                "Free installation",
                "Your vision, our software",
                "No maintenance fees",
              ],
            },
            {
              title: "Digital Marketing",
              price: "₹9,999",
              features: [
                "All social media handles",
                "Custom graphic designs",
                "6 months account management",
              ],
            },
            {
              title: "QR Portal",
              price: "₹1,999",
              features: [
                "Make a custom web page",
                "Convert into QR page",
                "With custom graphics",
              ],
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="border border-indigo-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                {offer.title}
              </h4>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {offer.price}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {offer.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-indigo-500 mr-2 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <TeamPage />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;