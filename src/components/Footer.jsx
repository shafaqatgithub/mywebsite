import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161626] mt-7   py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 justify-start text- text-slate-200">
          <p className="text-center">
            Email: <a href="mirzashafa7@gmail.com" className="underline">mirzashafa7@gmail.com</a>
          </p>
          <p className="text-center">
            Contact: <span className="font-semibold">+91 9035207964</span>
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3   font-semibold transition-colors"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
