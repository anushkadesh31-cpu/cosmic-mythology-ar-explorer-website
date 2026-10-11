import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-navy text-white sticky top-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold font-sans">Cosmic Mythology AR Explorer</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Home</a></li>
          <li><a href="#explore" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Explore</a></li>
          <li><a href="#constellations" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Constellations</a></li>
          <li><a href="#mythology" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Mythology</a></li>
          <li><a href="#cultures" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Cultures</a></li>
          <li><a href="#about" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
