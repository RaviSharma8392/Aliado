import React from 'react';

const MiddleButton = () => {
  return (
    <button className="fixed  bottom-6 transform -translate-left-1/2 right-0.5 z-50 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition">
      <a
        href="https://wa.me/917060988418?text=Hi%20there%21%20I%20found%20your%20agency%20online.%20I'd%20love%20to%20know%20more%20about%20your%20web%20development%20services.

"
        target="_blank"
        rel="noopener noreferrer">
        {" "}
        Get in Touch
      </a>
    </button>
  );
};

export default MiddleButton;
