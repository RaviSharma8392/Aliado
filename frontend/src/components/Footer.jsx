import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-10 md:px-40 py-12 border-t bg-[#20163c] text-white">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* Logo and Vision */}
        <div className="max-w-sm">
          <img
            className="h-24 mb-4"
            src="https://i.postimg.cc/VsJ96m8r/Whats-App-Image-2025-03-20-at-11-44-09-removebg-preview.png"
            alt="Company Logo"
          />
          <p className="text-sm font-semibold mb-4">Your Vision, Our Code</p>
          <div>
            <h2 className="text-xl font-bold mb-2">Looking to Get Started?</h2>
            <p className="text-sm text-gray-300">
              We at Aliado Softwares would love to help you. Share your
              requirements and our dedicated team will get back to you with a
              custom solution and quotation tailored just for you.
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              {" "}
              <a href="#about">About Us</a>{" "}
            </li>
            <li>
              Phone: <a href="tel:+9170609 88418">+91 70609 88418</a>
              {/* <a href="#+91 70609 88418">+91 70609 88418 </a>{" "} */}
            </li>
            <li>
              Email:{" "}
              <a href="mailto:aliado470@gmail.com" className="hover:underline">
                aliado470@gmail.com
              </a>
            </li>
            <li> Location: Bhimtal,Nainital,Uttarakhand</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Trending Solutions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Trending Solutions</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Food Ordering App</li>
            <li>Dating App</li>
            <li>E-commerce Platform</li>
            <li>Real Estate App</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Aliado Company. All Rights Reserved.</p>
        <ul className="flex gap-4 mt-4 md:mt-0 text-xl text-white">
          <li>
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aliado193?utm_source=ig_web_button_share_sheet&igsh=MW5icXBpdnpxcXlneQ=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
